import type { ApplianceEntry, PlannerEstimate } from '@/types'

const PEAK_SUN_HOURS_LOW = 4 // conservative Kenyan average, cloudy-season side
const PEAK_SUN_HOURS_HIGH = 5.5 // clearer-season side
const SYSTEM_LOSS_FACTOR = 1.25 // wiring, inverter and battery round-trip losses
const INVERTER_SAFETY_LOW = 1.3
const INVERTER_SAFETY_HIGH = 1.6
const BATTERY_DOD = 0.8 // usable depth of discharge assumed for sizing
const AUTONOMY_DAYS_LOW = 1
const AUTONOMY_DAYS_HIGH = 2

function roundToStep(value: number, step: number): number {
  return Math.ceil(value / step) * step
}

export function computeEstimate(appliances: ApplianceEntry[]): PlannerEstimate | null {
  const active = appliances.filter((a) => a.quantity > 0 && a.wattage > 0 && a.hours > 0)
  if (active.length === 0) return null

  const dailyEnergyWh = active.reduce(
    (sum, a) => sum + a.quantity * a.wattage * a.hours,
    0,
  )
  const peakLoadW = active.reduce((sum, a) => sum + a.quantity * a.wattage, 0)
  const dailyEnergyKwh = dailyEnergyWh / 1000

  const inverterLow = roundToStep(peakLoadW * INVERTER_SAFETY_LOW, 100)
  const inverterHigh = roundToStep(peakLoadW * INVERTER_SAFETY_HIGH, 100)

  const batteryLowKwh = (dailyEnergyKwh * AUTONOMY_DAYS_LOW) / BATTERY_DOD
  const batteryHighKwh = (dailyEnergyKwh * AUTONOMY_DAYS_HIGH) / BATTERY_DOD

  const solarLowKw = (dailyEnergyKwh * SYSTEM_LOSS_FACTOR) / PEAK_SUN_HOURS_HIGH
  const solarHighKw = (dailyEnergyKwh * SYSTEM_LOSS_FACTOR) / PEAK_SUN_HOURS_LOW

  return {
    dailyEnergyWh,
    dailyEnergyKwh,
    peakLoadW,
    inverterRangeVA: [inverterLow, inverterHigh],
    batteryRangeKwh: [
      Math.round(batteryLowKwh * 10) / 10,
      Math.round(batteryHighKwh * 10) / 10,
    ],
    solarRangeKw: [
      Math.round(solarLowKw * 10) / 10,
      Math.round(solarHighKw * 10) / 10,
    ],
  }
}

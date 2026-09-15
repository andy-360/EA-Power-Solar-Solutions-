export interface EnergyEstimate {
  dailyConsumption: number // kWh
  panelSize: number // kW
  batteryCapacity: number // kWh
  inverterSize: number // kW
}

export const calculateEnergyPlan = (
  dailyConsumptionKwh: number,
  peakSunHours: number = 4.5,
  safetyMargin: number = 1.2,
  depthOfDischarge: number = 0.8
): EnergyEstimate => {
  // Panel size: consumption / peak sun hours * safety margin
  const panelSize = (dailyConsumptionKwh / peakSunHours) * safetyMargin

  // Battery capacity: 3 days of autonomy / depth of discharge
  const batteryCapacity = (dailyConsumptionKwh * 3) / depthOfDischarge

  // Inverter size: peak load estimate (assume 30% of daily kWh in peak hour)
  const inverterSize = (dailyConsumptionKwh * 0.3) * safetyMargin

  return {
    dailyConsumption: dailyConsumptionKwh,
    panelSize: Math.round(panelSize * 100) / 100,
    batteryCapacity: Math.round(batteryCapacity * 100) / 100,
    inverterSize: Math.round(inverterSize * 100) / 100,
  }
}

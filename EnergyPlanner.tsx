import { useMemo, useState } from 'react'
import { Plus, Trash2, ArrowRight } from 'lucide-react'
import { APPLIANCE_CATALOG } from '../data/appliances'
import { computeEstimate } from '../lib/planner'
import {
  ApplianceEntry,
  Objective,
  PowerSource,
  PropertyType,
  ServiceNeed,
} from '../types'

const PROPERTY_TYPES: PropertyType[] = ['Home', 'Business', 'Institution', 'Farm', 'Other']
const POWER_SOURCES: PowerSource[] = ['Grid', 'Solar', 'Generator', 'Hybrid']
const OBJECTIVES: Objective[] = [
  'Backup power',
  'Reduce electricity costs',
  'Solar installation',
  'Off-grid solution',
  'Upgrade existing system',
]

let entryCounter = 0

interface SegmentedGroupProps<T extends string> {
  label: string
  options: T[]
  value: T | null
  onChange: (value: T) => void
}

function SegmentedGroup<T extends string>({ label, options, value, onChange }: SegmentedGroupProps<T>) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wide text-ink/50 uppercase">{label}</p>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              aria-pressed={active}
              className={`rounded-md px-3.5 py-2 text-sm border transition-colors ${
                active
                  ? 'bg-navy-900 text-paper border-navy-900'
                  : 'bg-transparent text-ink/70 border-ink/15 hover:border-ink/30'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

interface EnergyPlannerProps {
  onRequestAssessment: (need: ServiceNeed) => void
}

export default function EnergyPlanner({ onRequestAssessment }: EnergyPlannerProps) {
  const [propertyType, setPropertyType] = useState<PropertyType | null>(null)
  const [powerSource, setPowerSource] = useState<PowerSource | null>(null)
  const [objective, setObjective] = useState<Objective | null>(null)
  const [appliances, setAppliances] = useState<ApplianceEntry[]>([])
  const [catalogChoice, setCatalogChoice] = useState(APPLIANCE_CATALOG[0].id)

  const estimate = useMemo(() => computeEstimate(appliances), [appliances])

  function addAppliance() {
    const item = APPLIANCE_CATALOG.find((a) => a.id === catalogChoice)
    if (!item) return
    entryCounter += 1
    setAppliances((prev) => [
      ...prev,
      {
        key: `${item.id}-${entryCounter}`,
        catalogId: item.id,
        label: item.name,
        quantity: 1,
        wattage: item.defaultWattage,
        hours: item.defaultHours,
      },
    ])
  }

  function updateAppliance(key: string, field: 'quantity' | 'wattage' | 'hours', value: number) {
    setAppliances((prev) =>
      prev.map((a) => (a.key === key ? { ...a, [field]: Math.max(0, value) } : a)),
    )
  }

  function removeAppliance(key: string) {
    setAppliances((prev) => prev.filter((a) => a.key !== key))
  }

  return (
    <section id="planner" className="bg-navy-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-prose">
          <h2 className="font-display font-semibold text-paper text-3xl sm:text-4xl">
            EA Energy Planner
          </h2>
          <p className="mt-3 text-paper/60">Get a starting estimate for your energy needs.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          {/* Input panel */}
          <div className="rounded-lg bg-paper p-6 sm:p-7">
            <div className="grid sm:grid-cols-3 gap-6">
              <SegmentedGroup
                label="Property type"
                options={PROPERTY_TYPES}
                value={propertyType}
                onChange={setPropertyType}
              />
              <SegmentedGroup
                label="Current power source"
                options={POWER_SOURCES}
                value={powerSource}
                onChange={setPowerSource}
              />
              <SegmentedGroup
                label="Main objective"
                options={OBJECTIVES}
                value={objective}
                onChange={setObjective}
              />
            </div>

            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="text-xs font-medium tracking-wide text-ink/50 uppercase">
                Appliances
              </p>

              {appliances.length === 0 ? (
                <p className="mt-3 text-sm text-ink/50">
                  No appliances added yet. Add one below to start your estimate.
                </p>
              ) : (
                <div className="mt-3 space-y-2">
                  <div className="hidden sm:grid grid-cols-[1.4fr_0.7fr_0.9fr_0.9fr_auto] gap-3 text-[11px] uppercase tracking-wide text-ink/40 px-1">
                    <span>Appliance</span>
                    <span>Qty</span>
                    <span>Watts</span>
                    <span>Hrs/day</span>
                    <span />
                  </div>
                  {appliances.map((a) => (
                    <div
                      key={a.key}
                      className="grid grid-cols-2 sm:grid-cols-[1.4fr_0.7fr_0.9fr_0.9fr_auto] gap-3 items-center rounded-md bg-navy-900/[0.03] px-3 py-2.5"
                    >
                      <span className="text-sm text-ink col-span-2 sm:col-span-1">{a.label}</span>
                      <label className="sm:hidden text-[11px] text-ink/40">Qty</label>
                      <input
                        type="number"
                        min={0}
                        value={a.quantity}
                        onChange={(e) => updateAppliance(a.key, 'quantity', Number(e.target.value))}
                        aria-label={`${a.label} quantity`}
                        className="w-full rounded border border-ink/15 bg-white px-2 py-1.5 text-sm tabular"
                      />
                      <label className="sm:hidden text-[11px] text-ink/40">Watts</label>
                      <input
                        type="number"
                        min={0}
                        value={a.wattage}
                        onChange={(e) => updateAppliance(a.key, 'wattage', Number(e.target.value))}
                        aria-label={`${a.label} wattage`}
                        className="w-full rounded border border-ink/15 bg-white px-2 py-1.5 text-sm tabular"
                      />
                      <label className="sm:hidden text-[11px] text-ink/40">Hours/day</label>
                      <input
                        type="number"
                        min={0}
                        value={a.hours}
                        onChange={(e) => updateAppliance(a.key, 'hours', Number(e.target.value))}
                        aria-label={`${a.label} hours per day`}
                        className="w-full rounded border border-ink/15 bg-white px-2 py-1.5 text-sm tabular"
                      />
                      <button
                        type="button"
                        onClick={() => removeAppliance(a.key)}
                        aria-label={`Remove ${a.label}`}
                        className="justify-self-end text-ink/35 hover:text-red-600 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <select
                  value={catalogChoice}
                  onChange={(e) => setCatalogChoice(e.target.value)}
                  aria-label="Choose appliance to add"
                  className="rounded-md border border-ink/15 bg-white px-3 py-2 text-sm text-ink"
                >
                  {APPLIANCE_CATALOG.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={addAppliance}
                  className="inline-flex items-center gap-1.5 rounded-md border border-wire text-wire px-3.5 py-2 text-sm font-medium hover:bg-wire/5 transition-colors"
                >
                  <Plus size={15} /> Add appliance
                </button>
              </div>
            </div>
          </div>

          {/* Results panel */}
          <div className="rounded-lg bg-navy-800 border border-navy-700 p-6 sm:p-7 flex flex-col">
            <p className="text-xs font-medium tracking-wide text-paper/45 uppercase">
              Illustrative estimate
            </p>

            {estimate ? (
              <div className="mt-4 space-y-4">
                <ResultRow
                  label="Daily energy consumption"
                  value={`${estimate.dailyEnergyKwh.toFixed(1)} kWh`}
                />
                <ResultRow label="Estimated peak load" value={`${estimate.peakLoadW.toFixed(0)} W`} />
                <ResultRow
                  label="Suggested inverter range"
                  value={`${estimate.inverterRangeVA[0]}–${estimate.inverterRangeVA[1]} VA`}
                />
                <ResultRow
                  label="Suggested battery range"
                  value={`${estimate.batteryRangeKwh[0]}–${estimate.batteryRangeKwh[1]} kWh`}
                />
                <ResultRow
                  label="Suggested solar PV range"
                  value={`${estimate.solarRangeKw[0]}–${estimate.solarRangeKw[1]} kWp`}
                />
              </div>
            ) : (
              <p className="mt-4 text-sm text-paper/45">
                Add at least one appliance to see an estimate.
              </p>
            )}

            <div className="mt-6 rounded-md bg-navy-900/60 border border-navy-700 px-3.5 py-3">
              <p className="text-xs text-paper/55 leading-relaxed">
                Preliminary estimate — professional site assessment required.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onRequestAssessment('Energy Assessment')}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-medium text-navy-950 hover:bg-gold-light transition-colors"
            >
              Request a Professional Assessment
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-navy-700 pb-3">
      <span className="text-sm text-paper/60">{label}</span>
      <span className="font-mono text-base text-gold tabular whitespace-nowrap">{value}</span>
    </div>
  )
}

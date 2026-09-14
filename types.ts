export type PropertyType = 'Home' | 'Business' | 'Institution' | 'Farm' | 'Other'

export type PowerSource = 'Grid' | 'Solar' | 'Generator' | 'Hybrid'

export type Objective =
  | 'Backup power'
  | 'Reduce electricity costs'
  | 'Solar installation'
  | 'Off-grid solution'
  | 'Upgrade existing system'

export type ServiceNeed =
  | 'Solar'
  | 'Electrical'
  | 'Battery Backup'
  | 'Solar Water Heating'
  | 'Maintenance'
  | 'Energy Assessment'
  | 'Other'

export interface ApplianceCatalogItem {
  id: string
  name: string
  defaultWattage: number
  defaultHours: number
}

export interface ApplianceEntry {
  key: string
  catalogId: string
  label: string
  quantity: number
  wattage: number
  hours: number
}

export interface PlannerState {
  propertyType: PropertyType | null
  powerSource: PowerSource | null
  objective: Objective | null
  appliances: ApplianceEntry[]
}

export interface PlannerEstimate {
  dailyEnergyWh: number
  dailyEnergyKwh: number
  peakLoadW: number
  inverterRangeVA: [number, number]
  batteryRangeKwh: [number, number]
  solarRangeKw: [number, number]
}

export interface QuoteFormData {
  need: ServiceNeed | null
  propertyType: PropertyType | null
  county: string
  town: string
  details: string
  name: string
  phone: string
  email: string
}

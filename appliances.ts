import { ApplianceCatalogItem } from '../types'

export const APPLIANCE_CATALOG: ApplianceCatalogItem[] = [
  { id: 'lights', name: 'Lights (LED)', defaultWattage: 10, defaultHours: 6 },
  { id: 'tv', name: 'TV', defaultWattage: 90, defaultHours: 5 },
  { id: 'fridge', name: 'Refrigerator', defaultWattage: 150, defaultHours: 24 },
  { id: 'computer', name: 'Computer', defaultWattage: 120, defaultHours: 6 },
  { id: 'router', name: 'Router', defaultWattage: 12, defaultHours: 24 },
  { id: 'pump', name: 'Water Pump', defaultWattage: 750, defaultHours: 1 },
  { id: 'washer', name: 'Washing Machine', defaultWattage: 500, defaultHours: 1 },
  { id: 'other', name: 'Other appliance', defaultWattage: 100, defaultHours: 3 },
]

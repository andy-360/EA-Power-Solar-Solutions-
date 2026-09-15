export interface Solution {
  id: string
  title: string
  description: string
  icon: string
}

export interface Project {
  id: string
  title: string
  description: string
  location: string
  size: string
  technologies: string[]
}

export interface Appliance {
  id: string
  name: string
  watts: number
  hoursPerDay: number
}

export interface QuoteFormData {
  name: string
  email: string
  phone: string
  projectType: string
  location: string
  estimatedBudget: string
  message: string
}

export interface EnergyPlan {
  dailyConsumption: number
  peakSunHours: number
  panelSize: number
  batteryCapacity: number
  inverterSize: number
}

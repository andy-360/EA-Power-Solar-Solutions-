export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Energy Planner', href: '#planner' },
  { label: 'Resources', href: '#trust' },
  { label: 'Contact', href: '#contact' },
]

export interface SolutionItem {
  id: string
  title: string
  description: string
  detail: string
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'solar-pv',
    title: 'Solar PV Systems',
    description: 'Custom solar solutions designed around energy consumption and site requirements.',
    detail:
      'We size panel arrays and inverters against your actual consumption pattern and roof or land conditions, not a generic package.',
  },
  {
    id: 'battery',
    title: 'Battery Backup',
    description: 'Energy storage solutions for improved power reliability.',
    detail:
      'Battery banks sized to carry your essential loads through outages, with charge management suited to your daily routine.',
  },
  {
    id: 'hybrid',
    title: 'Hybrid & Off-Grid',
    description: 'Integrated solar, battery and grid/generator solutions.',
    detail:
      'Systems that blend solar, storage and grid or generator power, switching intelligently to keep supply steady.',
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Electrical installation, maintenance, upgrades and fault diagnosis.',
    detail:
      'Wiring, panel upgrades and fault-finding carried out to applicable safety standards, by a qualified electrical wireman.',
  },
  {
    id: 'water-heating',
    title: 'Solar Water Heating',
    description: 'Renewable-energy solutions for hot-water requirements.',
    detail:
      'Solar thermal systems sized to household or institutional hot-water demand, reducing reliance on electric heating.',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'System inspections, troubleshooting and preventive maintenance.',
    detail:
      'Scheduled inspections and responsive troubleshooting to keep an existing solar or electrical system performing as designed.',
  },
]

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  { index: '01', title: 'Understand', description: 'We learn about your energy requirements.' },
  { index: '02', title: 'Assess', description: 'We evaluate the site, loads and existing electrical system.' },
  { index: '03', title: 'Design', description: 'We develop an appropriately sized solution.' },
  { index: '04', title: 'Install', description: 'The system is professionally installed, tested and commissioned.' },
  { index: '05', title: 'Support', description: 'We provide maintenance and technical support.' },
]

export interface ProjectItem {
  id: string
  title: string
  location: string
  tag: string
  summary: string
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'residential',
    title: 'Residential Solar Installation',
    location: 'Nairobi, Kenya',
    tag: 'Prototype Case Study',
    summary: 'A household system sized to daily lighting, refrigeration and entertainment loads.',
  },
  {
    id: 'small-business',
    title: 'Small Business Backup System',
    location: 'Kenya',
    tag: 'Concept Project',
    summary: 'Battery backup designed to keep point-of-sale and lighting running through outages.',
  },
  {
    id: 'hybrid-system',
    title: 'Hybrid Solar System',
    location: 'Kenya',
    tag: 'Concept Project',
    summary: 'Solar, battery and grid working together to reduce reliance on any single source.',
  },
]

export interface WhyCard {
  title: string
  description: string
}

export const WHY_EA: WhyCard[] = [
  { title: 'Reliable', description: 'Solutions designed around actual energy requirements.' },
  { title: 'Transparent', description: 'Clear communication and straightforward quotations.' },
  { title: 'Technical', description: 'Engineering-focused approach to system sizing and installation.' },
  { title: 'Safety First', description: 'Electrical and solar work should follow applicable safety requirements and standards.' },
  { title: 'Long-Term Support', description: "We don't disappear after installation." },
  { title: 'Sustainable', description: 'Helping customers make greater use of clean renewable energy.' },
]

export const STANDARDS = [
  'Proper system sizing',
  'Electrical safety',
  'Quality components',
  'Documentation',
  'Testing and commissioning',
  'Maintenance',
  'Applicable Kenyan regulatory requirements',
]

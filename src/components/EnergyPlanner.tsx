import { useState } from 'react'
import { appliances } from '../data/appliances'

const EnergyPlanner = () => {
  const [selectedAppliances, setSelectedAppliances] = useState<string[]>([])
  const [customAppliances, setCustomAppliances] = useState<Array<{watts: number, hours: number}>>([{watts: 0, hours: 0}])

  const toggleAppliance = (id: string) => {
    setSelectedAppliances(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    )
  }

  const calculateEnergy = () => {
    let total = 0
    selectedAppliances.forEach(id => {
      const app = appliances.find(a => a.id === id)
      if (app) total += (app.watts * app.hoursPerDay) / 1000
    })
    customAppliances.forEach(app => {
      if (app.watts > 0 && app.hours > 0) {
        total += (app.watts * app.hours) / 1000
      }
    })
    return total.toFixed(2)
  }

  const dailyEnergy = parseFloat(calculateEnergy())
  const panelSize = (dailyEnergy / 4.5).toFixed(2)
  const batteryCapacity = (dailyEnergy * 3).toFixed(2)

  return (
    <section id="planner" className="py-20 px-4 bg-paper">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-ink">Energy Planner</h2>
        <div className="bg-ink/5 p-8 rounded-lg">
          <p className="text-sm text-ink/60 mb-6">Select your appliances to estimate your daily energy consumption and system size.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-ink">Common Appliances</h3>
              {appliances.map(app => (
                <label key={app.id} className="flex items-center mb-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedAppliances.includes(app.id)}
                    onChange={() => toggleAppliance(app.id)}
                    className="mr-3"
                  />
                  <span className="text-sm text-ink">{app.name} ({app.watts}W)</span>
                </label>
              ))}
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-ink">Estimates</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-ink/60">Daily Consumption</p>
                  <p className="text-2xl font-bold text-gold">{dailyEnergy} kWh</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-ink/60">Recommended Panel Size</p>
                  <p className="text-2xl font-bold text-gold">{panelSize} kW</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-ink/60">Battery Capacity</p>
                  <p className="text-2xl font-bold text-gold">{batteryCapacity} kWh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnergyPlanner

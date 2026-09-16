import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import type { PropertyType, QuoteFormData, ServiceNeed } from '@/types'

const NEEDS: ServiceNeed[] = [
  'Solar',
  'Electrical',
  'Battery Backup',
  'Solar Water Heating',
  'Maintenance',
  'Energy Assessment',
  'Other',
]

const PROPERTY_TYPES: PropertyType[] = ['Home', 'Business', 'Institution', 'Farm', 'Other']

const STEP_LABELS = ['Need', 'Property', 'Location', 'Project', 'Contact']

const EMPTY_FORM: QuoteFormData = {
  need: null,
  propertyType: null,
  county: '',
  town: '',
  details: '',
  name: '',
  phone: '',
  email: '',
}

interface QuoteFormProps {
  prefillNeed: ServiceNeed | null
}

export default function QuoteForm({ prefillNeed }: QuoteFormProps) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<QuoteFormData>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (prefillNeed) {
      setForm((prev) => ({ ...prev, need: prefillNeed }))
      setStep(1)
      setSubmitted(false)
    }
  }, [prefillNeed])

  function update<K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const canAdvance = (() => {
    switch (step) {
      case 1:
        return Boolean(form.need)
      case 2:
        return Boolean(form.propertyType)
      case 3:
        return form.county.trim().length > 0 && form.town.trim().length > 0
      case 4:
        return true
      default:
        return true
    }
  })()

  function handleSubmit() {
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) return
    // Prototype only: submission is simulated locally, nothing is sent anywhere.
    setSubmitted(true)
  }

  function startOver() {
    setForm(EMPTY_FORM)
    setStep(1)
    setSubmitted(false)
  }

  return (
    <section id="quote" className="bg-paper py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl">
          Request a quote
        </h2>
        <p className="mt-3 text-ink/60">
          Five short steps. An EA representative will follow up with next steps.
        </p>

        <div className="mt-10 rounded-xl border border-ink/10 bg-white p-6 sm:p-8">
          {submitted ? (
            <div role="status" className="py-6 text-center">
              <CheckCircle2 size={36} className="text-leaf mx-auto" />
              <p className="mt-4 text-ink font-display font-semibold text-lg">Thank you.</p>
              <p className="mt-2 text-ink/65 text-sm max-w-sm mx-auto leading-relaxed">
                Your request has been received. An EA representative will review your
                requirements and get back to you.
              </p>
              <button
                type="button"
                onClick={startOver}
                className="mt-6 text-sm font-medium text-wire hover:text-wire-light"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              <ol className="flex items-center gap-2 mb-8" aria-label="Form progress">
                {STEP_LABELS.map((label, i) => {
                  const n = i + 1
                  const state = n === step ? 'current' : n < step ? 'done' : 'upcoming'
                  return (
                    <li key={label} className="flex-1">
                      <div
                        className={`h-1.5 rounded-full ${
                          state === 'upcoming' ? 'bg-ink/10' : 'bg-wire'
                        }`}
                      />
                      <span
                        className={`mt-1.5 block text-[11px] ${
                          state === 'current' ? 'text-ink font-medium' : 'text-ink/40'
                        }`}
                      >
                        {n}. {label}
                      </span>
                    </li>
                  )
                })}
              </ol>

              {step === 1 && (
                <fieldset>
                  <legend className="font-display font-semibold text-ink text-lg">
                    What do you need?
                  </legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {NEEDS.map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => update('need', n)}
                        aria-pressed={form.need === n}
                        className={`rounded-md px-3.5 py-2 text-sm border transition-colors ${
                          form.need === n
                            ? 'bg-navy-900 text-paper border-navy-900'
                            : 'border-ink/15 text-ink/70 hover:border-ink/30'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 2 && (
                <fieldset>
                  <legend className="font-display font-semibold text-ink text-lg">
                    Property type
                  </legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {PROPERTY_TYPES.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => update('propertyType', p)}
                        aria-pressed={form.propertyType === p}
                        className={`rounded-md px-3.5 py-2 text-sm border transition-colors ${
                          form.propertyType === p
                            ? 'bg-navy-900 text-paper border-navy-900'
                            : 'border-ink/15 text-ink/70 hover:border-ink/30'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 3 && (
                <fieldset>
                  <legend className="font-display font-semibold text-ink text-lg">
                    Location
                  </legend>
                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs text-ink/50">County</span>
                      <input
                        type="text"
                        value={form.county}
                        onChange={(e) => update('county', e.target.value)}
                        className="mt-1.5 w-full rounded-md border border-ink/15 px-3 py-2.5 text-sm"
                        placeholder="e.g. Nairobi"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-ink/50">Town / Area</span>
                      <input
                        type="text"
                        value={form.town}
                        onChange={(e) => update('town', e.target.value)}
                        className="mt-1.5 w-full rounded-md border border-ink/15 px-3 py-2.5 text-sm"
                        placeholder="e.g. Kibichiku"
                      />
                    </label>
                  </div>
                </fieldset>
              )}

              {step === 4 && (
                <fieldset>
                  <legend className="font-display font-semibold text-ink text-lg">
                    Tell us about your project
                  </legend>
                  <textarea
                    value={form.details}
                    onChange={(e) => update('details', e.target.value)}
                    rows={5}
                    className="mt-4 w-full rounded-md border border-ink/15 px-3 py-2.5 text-sm"
                    placeholder="Optional — share appliances, outage frequency, budget range or anything else useful."
                  />
                </fieldset>
              )}

              {step === 5 && (
                <fieldset>
                  <legend className="font-display font-semibold text-ink text-lg">
                    Contact details
                  </legend>
                  <div className="mt-4 space-y-4">
                    <label className="block">
                      <span className="text-xs text-ink/50">Name</span>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className="mt-1.5 w-full rounded-md border border-ink/15 px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-ink/50">Phone</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="mt-1.5 w-full rounded-md border border-ink/15 px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-ink/50">Email</span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="mt-1.5 w-full rounded-md border border-ink/15 px-3 py-2.5 text-sm"
                      />
                    </label>
                  </div>
                </fieldset>
              )}

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60 disabled:opacity-0 disabled:pointer-events-none"
                >
                  <ArrowLeft size={15} /> Back
                </button>

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(5, s + 1))}
                    disabled={!canAdvance}
                    className="inline-flex items-center gap-1.5 rounded-md bg-navy-900 px-5 py-2.5 text-sm font-medium text-paper disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue <ArrowRight size={15} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!form.name.trim() || !form.phone.trim() || !form.email.trim()}
                    className="inline-flex items-center gap-1.5 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-navy-950 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Request an Energy Assessment
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

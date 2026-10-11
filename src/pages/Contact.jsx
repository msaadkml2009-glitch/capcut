import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { contact } from '../content.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: contact.reasons[0],
    message: '',
  })

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please add your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (form.message.trim().length < 12) next.message = 'Tell us a little more (12+ characters).'
    setErrors(next)
    if (Object.keys(next).length) return
    setSent(true)
  }

  return (
    <section className="relative overflow-hidden mesh pt-28 md:pt-32">
      <div className="mx-auto grid max-w-site gap-14 px-5 pb-24 md:grid-cols-12 md:px-8">
        <Reveal className="md:col-span-5">
          <Breadcrumbs className="mb-8" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{contact.eyebrow}</p>
          <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
            {contact.title}
          </h1>
          <p className="mt-5 text-mute">{contact.subtitle}</p>
        </Reveal>

        <Reveal delay={100} className="md:col-span-7">
          <div className="card p-6 md:p-10">
            {sent ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="text-mint" size={40} />
                <h2 className="font-display mt-4 text-2xl font-bold text-white">Message received.</h2>
                <p className="mt-2 max-w-sm text-sm text-mute">
                  Thanks {form.name.split(' ')[0]}. We’ll get back to you shortly.
                </p>
                <button type="button" className="btn-ghost mt-6" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <Field label="Name" error={errors.name}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="field"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="field"
                  />
                </Field>
                <Field label="Reason">
                  <select name="reason" value={form.reason} onChange={onChange} className="field">
                    {contact.reasons.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Message" error={errors.message}>
                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    placeholder="What are you cutting, and how can we help?"
                    className="field resize-none"
                  />
                </Field>
                <button type="submit" className="btn-primary w-full">
                  Send message
                </button>
                <p className="text-center text-xs text-mute">
                  By sending, you agree to our{' '}
                  <Link to="/privacy" className="text-mint">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  )
}

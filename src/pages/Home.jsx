import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Play, Sparkles, ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { home } from '../content.js'

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />
      <Generators />
      <Tools />
      <Templates />
      <Quotes />
      <Faq />
      <FinalCta />
    </>
  )
}

function Hero() {
  const h = home.hero
  return (
    <section className="relative overflow-hidden mesh pt-28 md:pt-32">
      <div className="mx-auto max-w-site px-5 text-center md:px-8">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-mint">
            <span className="relative live-dot h-1.5 w-1.5 rounded-full bg-mint" />
            {h.eyebrow}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mx-auto mt-6 max-w-4xl text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
            {h.title}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-mute md:text-lg">
            {h.subtitle}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={h.primary.to} className="btn-primary">
              <Play size={16} fill="currentColor" />
              {h.primary.label}
            </Link>
            <Link to={h.secondary.to} className="btn-ghost">
              {h.secondary.label}
              <ArrowRight size={16} />
            </Link>
          </div>
          <p className="mt-4 text-xs text-mute">{h.note}</p>
        </Reveal>

        <Reveal delay={260} className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-mint/20 blur-3xl" />
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-card shadow-card">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[11px] tracking-wide text-white/40">NovaCut · Video Studio</span>
            </div>
            <img
              src="/images/hero-editor.jpg"
              alt="NovaCut video editor timeline and preview"
              className="block w-full"
            />
          </div>
          <div className="pointer-events-none absolute -left-2 top-24 hidden floaty rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur md:block">
            <div className="flex items-center gap-2 text-xs text-white">
              <Sparkles size={14} className="text-mint" /> Auto Director on
            </div>
          </div>
          <div className="pointer-events-none absolute -right-2 bottom-24 hidden floaty rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur md:block" style={{ animationDelay: '1.2s' }}>
            <div className="text-xs text-white">Captions · 4K · No watermark</div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 py-8">
          {h.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-bold text-white md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-mute">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Platforms() {
  const row = [...home.platforms, ...home.platforms]
  return (
    <section className="border-y border-white/5 bg-elev/60 py-8">
      <p className="mb-5 text-center text-[11px] uppercase tracking-[0.22em] text-mute">
        Built for the platforms that matter
      </p>
      <div className="flex gap-10 overflow-hidden opacity-70">
        <div className="marquee-track px-6">
          {row.map((p, i) => (
            <span key={p + i} className="font-display text-xl font-semibold tracking-tight text-white/70">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Generators() {
  const g = home.generators
  return (
    <section className="mx-auto max-w-site px-5 py-24 md:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{g.eyebrow}</p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-white md:text-5xl">
          {g.title}
        </h2>
        <p className="mt-4 max-w-xl text-mute">{g.subtitle}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {g.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 90}>
            <Link
              to={item.to}
              className="group card block overflow-hidden transition hover:-translate-y-1 hover:border-mint/40"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-mint backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <ArrowRight size={16} className="text-mute transition group-hover:translate-x-1 group-hover:text-mint" />
                </div>
                <p className="mt-2 text-sm leading-6 text-mute">{item.text}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Tools() {
  const t = home.tools
  const [tab, setTab] = useState(t.groups[0].id)
  const group = t.groups.find((g) => g.id === tab)
  return (
    <section className="bg-elev py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{t.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xl text-mute">{t.subtitle}</p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-2">
          {t.groups.map((g) => (
            <button
              key={g.id}
              onClick={() => setTab(g.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                tab === g.id ? 'bg-white text-ink' : 'border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {group.items.map((item, i) => (
            <Link
              key={item.title}
              to={item.to}
              className="card block p-6 transition hover:-translate-y-0.5 hover:border-mint/40"
            >
              <div className="text-[11px] font-semibold tracking-[0.18em] text-mint">0{i + 1}</div>
              <h3 className="font-display mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{item.text}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to={tab === 'image' ? '/services/image-studio' : '/services/video-studio'}
            className="btn-ghost"
          >
            See all tools <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Templates() {
  const t = home.templates
  return (
    <section className="mx-auto max-w-site px-5 py-24 md:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{t.eyebrow}</p>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display max-w-xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
          <Link to="/services/templates" className="btn-ghost !py-2.5">
            Browse templates <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-4 max-w-xl text-mute">{t.subtitle}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {t.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <Link to="/services/templates" className="group block">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
                <img
                  src={item.image}
                  alt=""
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-mute">{item.text}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-mint">
                  {item.uses}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Quotes() {
  const q = home.quotes
  return (
    <section className="bg-elev py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{q.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            {q.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {q.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80} className="card flex flex-col p-7">
              <p className="flex-1 text-[15px] leading-7 text-white/85">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                {item.avatar ? (
                  <img src={item.avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mint/20 font-display text-sm font-bold text-mint">
                    {item.initials}
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-mute">{item.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="mx-auto max-w-site px-5 py-24 md:px-8">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">FAQ</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-4 text-mute">Replace these with your real answers when you send copy.</p>
        </Reveal>
        <div className="md:col-span-7">
          {home.faq.map((item, i) => (
            <div key={item.q} className="border-b border-white/10">
              <button
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="font-medium text-white">{item.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-mute transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="pb-5 text-sm leading-7 text-mute">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  const c = home.cta
  return (
    <section className="px-5 pb-24 md:px-8">
      <Reveal className="relative mx-auto max-w-site overflow-hidden rounded-[2rem] border border-white/10 px-8 py-16 text-center mesh md:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-mint/10 to-transparent" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">{c.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-mute">{c.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={c.primary.to} className="btn-primary">
              {c.primary.label}
            </Link>
            <Link to={c.secondary.to} className="btn-ghost">
              {c.secondary.label}
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-mute">
            {['No credit card', 'No watermark', 'Cancel anytime'].map((x) => (
              <span key={x} className="inline-flex items-center gap-1.5">
                <Check size={12} className="text-mint" /> {x}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

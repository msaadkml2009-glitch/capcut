import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Smartphone,
  Monitor,
  Globe,
  AlertTriangle,
  Shield,
  Sparkles,
  Clapperboard,
  Captions,
  Wand2,
  Layers,
  Film,
  Apple,
  Laptop,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import DownloadButton from '../components/DownloadButton.jsx'
import { CapCutMark } from '../components/Logo.jsx'
import { home } from '../content.js'

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />
      <Intro />
      <WhatIs />
      <Downloads />
      <Requirements />
      <Versions />
      <Howto />
      <Guides />
      <Templates />
      <AiTools />
      <Export />
      <Watermark />
      <Pricing />
      <Compare />
      <ProsCons />
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
          <h1 className="font-display mx-auto mt-6 max-w-5xl text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.15rem]">
            CapCut Video Editor:{' '}
            <span className="text-gradient">Free Download</span>, Templates &amp; AI Tools
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-mute md:text-lg">{h.subtitle}</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadButton />
            <a href="#howto" className="btn-ghost">
              {h.secondary.label}
              <ArrowRight size={16} />
            </a>
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
              <span className="ml-3 flex items-center gap-2 text-[11px] tracking-wide text-white/40">
                <CapCutMark size={16} /> CapCut · Video Editor
              </span>
            </div>
            <img src="/images/hero-editor.jpg" alt="CapCut video editor timeline and preview" className="block w-full" />
          </div>
          <div className="pointer-events-none absolute -left-2 top-24 hidden floaty rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur md:block">
            <div className="flex items-center gap-2 text-xs text-white">
              <Sparkles size={14} className="text-mint" /> Auto captions on
            </div>
          </div>
          <div
            className="pointer-events-none absolute -right-2 bottom-24 hidden floaty rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur md:block"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="text-xs text-white">Templates · 4K · Official download</div>
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
        CapCut on every screen that matters
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

function Intro() {
  const d = home.intro
  return (
    <section className="mx-auto max-w-site px-5 py-24 md:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
        <p className="mt-5 max-w-3xl text-[15px] leading-8 text-mute">{d.body}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {d.boxes.map((box, i) => (
          <Reveal key={box.title} delay={i * 80}>
            <InfoBox tone={box.tone} title={box.title}>
              {box.text}
            </InfoBox>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function WhatIs() {
  const d = home.aboutCapcut
  return (
    <section className="bg-elev py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
            <p className="mt-5 text-[15px] leading-8 text-mute">{d.body}</p>
            <p className="mt-4 text-[15px] leading-8 text-white/80">{d.unique}</p>
          </Reveal>
          <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
            {d.uses.map((u, i) => (
              <Reveal key={u.title} delay={i * 60} className="card p-5">
                <div className="text-[11px] font-semibold tracking-[0.18em] text-mint">0{i + 1}</div>
                <h3 className="font-display mt-2 text-lg font-semibold text-white">{u.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{u.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const platformIcons = {
  android: Smartphone,
  iphone: Apple,
  windows: Monitor,
  mac: Laptop,
  web: Globe,
  apk: AlertTriangle,
}

function Downloads() {
  const d = home.downloads
  return (
    <section id="download" className="scroll-mt-24 mx-auto max-w-site px-5 py-24 md:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
        <p className="mt-4 max-w-xl text-mute">{d.subtitle}</p>
      </Reveal>

      <div className="mt-12 overflow-hidden rounded-[1.8rem] border border-white/10">
        <img src="/images/devices-capcut.jpg" alt="CapCut on phone, laptop and tablet" className="h-64 w-full object-cover md:h-80" />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {d.items.map((item, i) => {
          const Icon = platformIcons[item.id] || Download
          return (
            <Reveal key={item.id} delay={i * 50} className="card flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/15 text-mint">
                  <Icon size={20} />
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.id === 'apk' ? 'bg-amber-400/15 text-amber-300' : 'bg-mint/15 text-mint'}`}>
                  {item.tag}
                </span>
              </div>
              <h3 className="font-display mt-4 text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-mute">{item.text}</p>
              <a href={item.id === 'apk' ? '#apk-rules' : '#download'} className="btn-primary mt-5 !py-2.5 text-sm">
                <Download size={14} />
                {item.cta}
              </a>
            </Reveal>
          )
        })}
      </div>

      <Reveal>
        <div id="apk-rules" className="scroll-mt-24 mt-8">
          <InfoBox tone="danger" title="CapCut APK download: what you should know">
            <p className="mb-3">
              An APK is simply an installing file for Android apps. The issue is the APK from any unknown site can be altered. If you have to use an APK, follow these rules:
            </p>
            <ul className="space-y-2">
              {d.apkRules.map((rule) => (
                <li key={rule} className="flex gap-2 text-sm leading-6">
                  <Shield size={16} className="mt-1 shrink-0 text-red-300" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </InfoBox>
        </div>
      </Reveal>
    </section>
  )
}

function Requirements() {
  const d = home.requirements
  return (
    <section className="bg-elev py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
          <p className="mt-4 max-w-2xl text-mute">{d.body}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {d.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="card p-6">
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Versions() {
  const d = home.versions
  return (
    <section className="mx-auto max-w-site px-5 py-24 md:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
        <p className="mt-4 max-w-2xl text-mute">{d.body}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {d.boxes.map((box, i) => (
          <Reveal key={box.title} delay={i * 70}>
            <InfoBox tone={box.tone} title={box.title}>
              {box.text}
            </InfoBox>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Howto() {
  const d = home.howto
  return (
    <section id="howto" className="scroll-mt-24 bg-elev py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
          <p className="mt-4 max-w-xl text-mute">{d.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {d.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 50} className="card relative overflow-hidden p-6">
              <div className="font-display text-5xl font-extrabold text-white/10">{s.n}</div>
              <h3 className="font-display mt-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Guides() {
  const d = home.guides
  const icons = [Captions, Wand2, Film, Clapperboard, Layers, Sparkles]
  return (
    <section className="mx-auto max-w-site px-5 py-24 md:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {d.items.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={item.title} delay={i * 40} className="card p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint/15 text-mint">
                <Icon size={18} />
              </div>
              <h3 className="font-display mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-mute">{item.text}</p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function Templates() {
  const t = home.templates
  return (
    <section id="templates" className="scroll-mt-24 bg-elev py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{t.eyebrow}</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display max-w-xl text-3xl font-bold tracking-tight text-white md:text-5xl">{t.title}</h2>
            <Link to="/services/templates" className="btn-ghost !py-2.5">
              Browse templates <ArrowRight size={16} />
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-mute">{t.subtitle}</p>
        </Reveal>

        <Reveal className="mt-10">
          <InfoBox tone="ok" title="How to use CapCut templates">
            <ol className="space-y-2">
              {t.how.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-6">
                  <span className="font-display font-bold text-mint">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </InfoBox>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <Link to="/services/templates" className="group block">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
                  <img src={item.image} alt="" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-mute">{item.text}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-mint">{item.uses}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <InfoBox tone="warn" title="If a CapCut template will not load">
            {t.issues}
          </InfoBox>
        </Reveal>
      </div>
    </section>
  )
}

function AiTools() {
  const d = home.ai
  return (
    <section id="ai" className="scroll-mt-24 mx-auto max-w-site px-5 py-24 md:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
        <p className="mt-4 max-w-2xl text-mute">{d.subtitle}</p>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {d.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 40} className="card p-6">
            <div className="text-[11px] font-semibold tracking-[0.18em] text-mint">AI 0{i + 1}</div>
            <h3 className="font-display mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-mute">{item.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <InfoBox tone="ok" title="The rule of thumb">
          Consider AI your first draft. Allow it to save your time, then verify with your eyes and ears.
        </InfoBox>
      </Reveal>
    </section>
  )
}

function Export() {
  const d = home.export
  return (
    <section className="bg-elev py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
          <p className="mt-4 max-w-2xl text-mute">{d.body}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {d.checks.map((c, i) => (
            <Reveal key={c.title} delay={i * 50} className="card p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mint/15 text-mint">
                <Check size={16} />
              </div>
              <h3 className="font-display mt-4 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Watermark() {
  const d = home.watermark
  return (
    <section className="mx-auto max-w-site px-5 py-24 md:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
        <p className="mt-4 max-w-2xl text-mute">{d.body}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {d.boxes.map((box, i) => (
          <Reveal key={box.title} delay={i * 70}>
            <InfoBox tone={box.tone} title={box.title}>
              {box.text}
            </InfoBox>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  const d = home.pricing
  return (
    <section id="pricing" className="scroll-mt-24 bg-elev py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
          <p className="mt-4 max-w-2xl text-mute">{d.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {d.plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 70}
              className={`card flex flex-col p-7 ${plan.featured ? 'border-mint/40 bg-mint/5 shadow-glow' : ''}`}
            >
              {plan.featured && (
                <span className="mb-3 w-fit rounded-full bg-mint px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink">
                  Most quoted
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="mb-1 text-xs text-mute">{plan.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-mute">
                    <Check size={16} className="mt-0.5 shrink-0 text-mint" />
                    {p}
                  </li>
                ))}
              </ul>
              <DownloadButton className={`mt-8 ${plan.featured ? 'btn-primary' : 'btn-ghost'} w-full`} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <InfoBox tone="warn" title="Prices vary — always check in the app">
            {d.note}
          </InfoBox>
        </Reveal>
        <Reveal className="mt-5">
          <InfoBox tone="ok" title="CapCut free trial and how to cancel">
            {d.trial}
          </InfoBox>
        </Reveal>
      </div>
    </section>
  )
}

function Compare() {
  const d = home.compare
  return (
    <section className="mx-auto max-w-site px-5 py-24 md:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
        <p className="mt-4 max-w-2xl text-mute">{d.subtitle}</p>
      </Reveal>
      <Reveal className="mt-12">
        <div className="table-wrap">
          <table className="pro-table">
            <thead>
              <tr>
                {d.headers.map((h, i) => (
                  <th key={h || 'feat'} className={i === 1 ? 'is-accent' : ''}>
                    {h || 'Feature'}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i} className={i === 0 ? 'is-key' : i === 1 ? 'is-accent' : ''}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  )
}

function ProsCons() {
  const d = home.proscons
  return (
    <section className="bg-elev py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{d.eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">{d.title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal className="card overflow-hidden">
            <div className="border-b border-mint/20 bg-mint/10 px-6 py-4">
              <h3 className="font-display text-xl font-semibold text-mint">Pros</h3>
            </div>
            <ul className="space-y-3 p-6">
              {d.pros.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-6 text-white/85">
                  <Check size={16} className="mt-0.5 shrink-0 text-mint" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="card overflow-hidden">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4">
              <h3 className="font-display text-xl font-semibold text-white">Cons</h3>
            </div>
            <ul className="space-y-3 p-6">
              {d.cons.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-6 text-mute">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">CapCut FAQs</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-4 text-mute">The questions people actually ask before they download CapCut.</p>
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
          <div className="mx-auto mb-6 flex justify-center">
            <CapCutMark size={48} />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">{c.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-mute">{c.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadButton />
            <a href="#howto" className="btn-ghost">
              {c.secondary.label}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-mute">
            {['Official stores only', 'Free to start', 'Cancel Pro anytime'].map((x) => (
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

function InfoBox({ tone = 'ok', title, children }) {
  return (
    <div className={`info-box info-${tone} h-full`}>
      <div className="info-kicker">{title}</div>
      <div className="mt-2 text-sm leading-7 text-white/80">{children}</div>
    </div>
  )
}

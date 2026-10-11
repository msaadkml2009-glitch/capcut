import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'
import DownloadButton from './DownloadButton.jsx'

export default function ServicePage({ data, extraImage }) {
  return (
    <>
      <section className="relative overflow-hidden mesh pt-28 md:pt-32">
        <div className="mx-auto grid max-w-site items-center gap-12 px-5 pb-16 md:grid-cols-2 md:px-8 md:pb-24">
          <Reveal>
            <Breadcrumbs className="mb-8" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{data.eyebrow}</p>
            <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl">
              {data.title}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-mute">{data.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DownloadButton />
              <Link to="/contact" className="btn-ghost">
                Talk to us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 shadow-glow">
              <img src={data.image} alt="" className="h-[420px] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">What you get</h2>
          <p className="mt-4 text-mute">{data.intro}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {data.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="card p-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mint/15 text-mint">
                <Check size={16} />
              </div>
              <h3 className="font-display mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-elev py-20">
        <div className="mx-auto max-w-site px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">How it works</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {data.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80} className="relative">
                <div className="font-display text-5xl font-extrabold text-white/10">{s.n}</div>
                <h3 className="font-display mt-3 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {extraImage && (
        <section className="mx-auto max-w-site px-5 py-16 md:px-8">
          <Reveal className="overflow-hidden rounded-[1.8rem] border border-white/10">
            <img src={extraImage} alt="" className="h-[380px] w-full object-cover md:h-[480px]" />
          </Reveal>
        </section>
      )}

      <section className="px-5 pb-24 md:px-8">
        <Reveal className="mx-auto max-w-site overflow-hidden rounded-[2rem] border border-white/10 px-8 py-14 text-center mesh">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Ready when you are.</h2>
          <p className="mx-auto mt-3 max-w-lg text-mute">
            Download CapCut, open a project, drop in media, and ship a cut without a learning curve.
          </p>
          <DownloadButton className="btn-primary mt-7" />
        </Reveal>
      </section>
    </>
  )
}

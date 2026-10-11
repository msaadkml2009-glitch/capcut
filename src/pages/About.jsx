import Reveal from '../components/Reveal.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { about } from '../content.js'

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden mesh pt-28 md:pt-32">
        <div className="mx-auto max-w-site px-5 pb-16 md:px-8 md:pb-20">
          <Reveal className="max-w-3xl">
            <Breadcrumbs className="mb-8" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{about.eyebrow}</p>
            <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl">
              {about.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-mute">{about.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 md:px-8">
        <Reveal className="mx-auto max-w-site overflow-hidden rounded-[1.8rem] border border-white/10">
          <img
            src="/images/about-studio.jpg"
            alt="CapCut creative studio"
            className="h-[280px] w-full object-cover md:h-[520px]"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="font-display text-3xl font-bold text-white">Our story</h2>
          </Reveal>
          <Reveal className="md:col-span-8 space-y-5" delay={80}>
            {about.story.map((p) => (
              <p key={p.slice(0, 24)} className="text-[15px] leading-8 text-mute">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-elev py-20">
        <div className="mx-auto max-w-site px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white">How we work</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="card p-7">
                <h3 className="font-display text-xl font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {about.stats.map((s) => (
            <Reveal key={s.label}>
              <div className="font-display text-3xl font-bold text-white md:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-mute">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

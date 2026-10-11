import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { brand, legal } from '../content.js'

export default function Terms() {
  return (
    <article className="pt-28 md:pt-32">
      <div className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
        <Reveal>
          <Breadcrumbs className="mb-8" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Legal</p>
          <h1 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-mute">Last updated {legal.updated}</p>
        </Reveal>
        <div className="legal mt-10 space-y-4">
          <p>{legal.termsIntro}</p>

          <h2>1. Agreement</h2>
          <p>
            These Terms of Use (“Terms”) govern access to the NovaCut website and related marketing pages operated by{' '}
            {brand.legalName} (“NovaCut,” “we,” “us”). By using the site you agree to these Terms. If you do not
            agree, do not use the site.
          </p>

          <h2>2. The product</h2>
          <p>
            NovaCut is an AI-powered photo and video editor offered through web and mobile applications. Descriptions
            of features, plans, and availability on this marketing site are illustrative until you replace them with
            final commercial terms. A separate product agreement may apply once an account is created.
          </p>

          <h2>3. Accounts</h2>
          <p>
            You are responsible for the accuracy of information you submit and for keeping credentials confidential.
            You must be old enough to form a binding contract in your jurisdiction, and you may not use the service if
            you are barred under applicable law.
          </p>

          <h2>4. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Upload or generate content that is unlawful, infringing, or that exploits minors.</li>
            <li>Attempt to reverse engineer, disrupt, or overload the service.</li>
            <li>Misrepresent output as human-created where disclosure is required by law or platform rules.</li>
            <li>Use the service to build a competing model by scraping or bulk extraction.</li>
          </ul>

          <h2>5. Your content</h2>
          <p>
            You retain rights in media you upload. You grant NovaCut a limited license to process that media solely to
            provide the editor, generate previews, and operate the service. We do not claim ownership of your projects.
            You represent that you have the rights needed to upload and process that media.
          </p>

          <h2>6. AI output</h2>
          <p>
            Generated or auto-edited output may be imperfect. You are responsible for reviewing cuts, captions, and
            images before publishing. NovaCut does not guarantee uniqueness, fitness for a particular campaign, or
            that output is free of third-party rights.
          </p>

          <h2>7. Plans, trials, and payment</h2>
          <p>
            Pricing, trials, and refunds will follow the plan page you publish. Until then, treat any price mentioned
            on this site as placeholder copy. Paid subscriptions renew until cancelled. Taxes may apply.
          </p>

          <h2>8. Intellectual property</h2>
          <p>
            The NovaCut name, mark, interface, and documentation are owned by {brand.legalName}. You may not copy the
            site design, scrape content, or use our marks without written permission.
          </p>

          <h2>9. Disclaimers</h2>
          <p>
            The site and service are provided “as is.” To the fullest extent permitted by law we disclaim warranties
            of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant uninterrupted
            or error-free operation.
          </p>

          <h2>10. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {brand.legalName} will not be liable for indirect, incidental,
            special, consequential, or punitive damages, or for lost profits, data, or goodwill. Our aggregate
            liability arising out of these Terms will not exceed the greater of one hundred dollars (USD $100) or the
            amounts you paid us in the twelve months before the claim.
          </p>

          <h2>11. Indemnity</h2>
          <p>
            You will defend and indemnify NovaCut against claims arising from your content, your use of the service, or
            your violation of these Terms or of any third-party right.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may suspend or terminate access if you breach these Terms or if we discontinue the marketing site or
            product. You may stop using the site at any time. Sections that by nature should survive will survive.
          </p>

          <h2>13. Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of California, excluding conflict-of-law rules. Courts
            in San Francisco County will have exclusive jurisdiction, except where prohibited.
          </p>

          <h2>14. Changes</h2>
          <p>
            We may update these Terms. The “Last updated” date will change when we do. Continued use after an update
            constitutes acceptance of the revised Terms.
          </p>

          <h2>15. Contact</h2>
          <p>
            Questions about these Terms? Visit our <Link to="/contact">Contact</Link> page.
            <br />
            {brand.legalName}
          </p>
        </div>
      </div>
    </article>
  )
}

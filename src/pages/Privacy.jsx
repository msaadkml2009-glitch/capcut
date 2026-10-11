import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { brand, legal } from '../content.js'

export default function Privacy() {
  return (
    <article className="pt-28 md:pt-32">
      <div className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
        <Reveal>
          <Breadcrumbs className="mb-8" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Legal</p>
          <h1 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-mute">Last updated {legal.updated}</p>
        </Reveal>
        <div className="legal mt-10 space-y-4">
          <p>{legal.privacyIntro}</p>

          <h2>1. Who we are</h2>
          <p>
            {brand.legalName} (“NovaCut,” “we,” “us”) operates this website and the NovaCut editor. For privacy
            questions, visit our <Link to="/contact">Contact</Link> page.
          </p>

          <h2>2. Information we collect</h2>
          <h3>Information you provide</h3>
          <ul>
            <li>Name, email, company, and message content from the contact form.</li>
            <li>Account details if you create a NovaCut workspace (when the product is wired in).</li>
            <li>Media you upload to the editor — processed to provide the service.</li>
          </ul>
          <h3>Information collected automatically</h3>
          <ul>
            <li>Device, browser, and approximate location derived from IP address.</li>
            <li>Pages viewed, referring URLs, and interaction timestamps.</li>
            <li>Cookies or similar storage as described below.</li>
          </ul>

          <h2>3. How we use information</h2>
          <ul>
            <li>To respond to inquiries and provide customer support.</li>
            <li>To operate, secure, and improve the website and editor.</li>
            <li>To send product or service messages you request. Marketing email is opt-in.</li>
            <li>To comply with law and enforce our Terms.</li>
          </ul>

          <h2>4. Legal bases (EEA/UK)</h2>
          <p>
            Where GDPR applies, we rely on one or more of: performance of a contract, legitimate interests (running a
            secure marketing site), consent (where we ask for it), and legal obligation. Replace this section with
            your counsel’s matrix of processing activities.
          </p>

          <h2>5. Sharing</h2>
          <p>
            We do not sell personal information. We may share data with vendors who process it on our instructions
            (hosting, analytics, email delivery), with professional advisors, in a corporate transaction, or when
            required by law. Name your processors here before launch.
          </p>

          <h2>6. Uploaded media and AI</h2>
          <p>
            Project files are processed to generate edits, captions, and exports. This draft does not claim that media
            is used to train foundation models. Confirm your actual training stance with counsel and state it clearly
            before you go live.
          </p>

          <h2>7. Cookies</h2>
          <p>
            This marketing build does not set analytics cookies. If you later add analytics or ads, disclose them, offer
            a choice where required, and update this section.
          </p>

          <h2>8. Retention</h2>
          <p>
            Contact messages are kept only as long as needed to respond and for a reasonable archival period. Account
            and project data follow your product retention rules. You will replace these periods with real ones.
          </p>

          <h2>9. Security</h2>
          <p>
            We use reasonable administrative and technical safeguards. No method of transmission or storage is
            completely secure.
          </p>

          <h2>10. International transfers</h2>
          <p>
            We may process information in the United States and other countries where we or our vendors operate. Where
            required we will use approved transfer mechanisms such as Standard Contractual Clauses.
          </p>

          <h2>11. Your rights</h2>
          <p>
            Depending on where you live you may have rights to access, correct, delete, or export personal information,
            to object to or restrict certain processing, and to withdraw consent. California residents may have
            additional rights under the CCPA/CPRA. Submit requests through our{' '}
            <Link to="/contact">Contact</Link> page. You may also lodge a complaint with a supervisory
            authority.
          </p>

          <h2>12. Children</h2>
          <p>
            The site is not directed to children under 13 (or the equivalent age in your country). We do not knowingly
            collect personal information from children.
          </p>

          <h2>13. Changes</h2>
          <p>
            We may update this Policy. The “Last updated” date will change when we do. Material changes will be
            highlighted on this page or notified by email where appropriate.
          </p>

          <h2>14. Contact</h2>
          <p>
            {brand.legalName}
            <br />
            Visit our <Link to="/contact">Contact</Link> page.
          </p>
        </div>
      </div>
    </article>
  )
}

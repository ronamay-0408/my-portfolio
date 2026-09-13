import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile, reach } from '../../data/content'

const SERVICE_ID  = 'service_cbuhn3f'
const TEMPLATE_ID = 'template_foei9af'
const PUBLIC_KEY  = 'S2dyak9fU9Ek2nJUm'

const empty = { from_name: '', from_email: '', subject: '', message: '' }

function ContactView() {
  const formRef = useRef(null)
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('sent')
        setForm(empty)
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  const busy = status !== 'idle'

  return (
    <>
      <header className="vhead" style={{ '--i': 0 }}>
        <div>
          <span className="eyebrow">Get in touch</span>
          <h2 className="display">Let&rsquo;s build something</h2>
          <p className="lede">
            Whether it&rsquo;s a full system, a website, or just a question about how something should work, my inbox is open.
          </p>
        </div>
      </header>

      <div className="contact-wrap" style={{ '--i': 1 }}>
        <ul className="reach">
          {reach.map((r) => {
            const inner = (
              <>
                <span className="ico"><i className={`bi ${r.icon}`} /></span>
                <div style={{ minWidth: 0 }}>
                  <small>{r.label}</small>
                  <span>{r.value}</span>
                </div>
              </>
            )
            return (
              <li key={r.label} className="card lift">
                {r.href ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'contents' }}
                  >
                    {inner}
                  </a>
                ) : inner}
              </li>
            )
          })}
        </ul>

        <div className="card form">
          <span className="eyebrow">Send a message</span>
          <h3 className="display" style={{ fontSize: 22, margin: '10px 0 18px' }}>
            Drop me a line
          </h3>

          <form ref={formRef} onSubmit={submit}>
            <div className="field-row">
              <div className="field">
                <input
                  name="from_name" type="text" placeholder="Your name" required
                  value={form.from_name} onChange={set('from_name')}
                />
              </div>
              <div className="field">
                <input
                  name="from_email" type="email" placeholder="Your email" required
                  value={form.from_email} onChange={set('from_email')}
                />
              </div>
            </div>
            <div className="field">
              <input
                name="subject" type="text" placeholder="Subject" required
                value={form.subject} onChange={set('subject')}
              />
            </div>
            <div className="field">
              <textarea
                name="message" rows={5} placeholder="Tell me about your project..." required
                value={form.message} onChange={set('message')}
              />
            </div>

            <button
              type="submit"
              disabled={busy}
              className={`submit${status === 'sent' ? ' ok' : ''}${status === 'error' ? ' bad' : ''}`}
            >
              {status === 'sending' && <><i className="bi bi-arrow-repeat spin" /> Sending…</>}
              {status === 'sent'    && <><i className="bi bi-check-lg" /> Message sent</>}
              {status === 'error'   && <><i className="bi bi-exclamation-triangle" /> Failed, try again</>}
              {status === 'idle'    && <><i className="bi bi-send" /> Send message</>}
            </button>
          </form>

          <p className="lede" style={{ fontSize: 12, marginTop: 14, textAlign: 'center' }}>
            Or email me directly at{' '}
            <a href={`mailto:${profile.email}`} style={{ color: 'var(--accent-2)' }}>
              {profile.email}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default ContactView

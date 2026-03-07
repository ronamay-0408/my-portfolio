import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// 🔑 Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID  = 'service_cbuhn3f'
const EMAILJS_TEMPLATE_ID = 'template_foei9af'
const EMAILJS_PUBLIC_KEY  = 'S2dyak9fU9Ek2nJUm'

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'Sto. Domingo, Albay 4508',
    color: '#60a5fa',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Contact Number',
    value: '999-856-3419',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email Address',
    value: 'balangatronamay@gmail.com',
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    label: 'Website',
    value: 'ronamay-0408.github.io',
    color: '#34d399',
  },
]

function ContactCard({ item, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-gray-100 dark:bg-gray-800"
      style={{
        animation: visible ? 'contactFadeUp 0.6s ease forwards' : 'none',
        animationDelay: `${index * 0.1}s`,
        opacity: visible ? undefined : 0,
        borderRadius: '16px',
        padding: '28px 20px',
        textAlign: 'center',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        border: `1px solid ${hovered ? item.color + '55' : 'rgba(128,128,128,0.15)'}`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 12px 32px ${item.color}20` : '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '36px', height: '36px',
        borderTop: `2px solid ${item.color}44`,
        borderRight: `2px solid ${item.color}44`,
        borderTopRightRadius: '16px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Icon */}
      <div style={{
        width: '60px', height: '60px',
        borderRadius: '50%',
        background: `${item.color}15`,
        border: `1px solid ${item.color}33`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: item.color,
        margin: '0 auto 16px',
        transition: 'all 0.35s ease',
        boxShadow: hovered ? `0 0 20px ${item.color}30` : 'none',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
      }}>
        {item.icon}
      </div>

      {/* Label */}
      <p style={{
        fontFamily: "'Courier New', monospace",
        fontSize: '11px', letterSpacing: '0.2em',
        textTransform: 'uppercase', marginBottom: '6px',
        color: item.color, fontWeight: 700,
      }}>{item.label}</p>

      {/* Divider */}
      <div style={{
        width: hovered ? '40px' : '20px', height: '2px',
        background: `linear-gradient(90deg, ${item.color}, transparent)`,
        margin: '0 auto 10px',
        borderRadius: '2px',
        transition: 'width 0.3s ease',
      }} />

      {/* Value */}
      <p style={{ fontSize: '13px', lineHeight: 1.5 }}
        className="text-gray-600 dark:text-gray-400">{item.value}</p>
    </div>
  )
}

function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSending(false)
      setSent(true)
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    })
    .catch(() => {
      setSending(false)
      setError(true)
      setTimeout(() => setError(false), 5000)
    })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 pb-24 px-4 overflow-hidden"
    >
      <style>{`
        @keyframes contactFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-input {
          transition: all 0.25s ease;
          outline: none;
        }
        .contact-input:focus {
          ring: none;
          border-color: #60a5fa !important;
          box-shadow: 0 0 0 3px rgba(96,165,250,0.15);
        }
        .send-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative; overflow: hidden;
        }
        .send-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(96,165,250,0.4); }
        .send-btn:active { transform: translateY(0); }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '15%', right: '-5%',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: '280px', height: '280px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="max-w-[70rem] w-full relative z-10">

        {/* Heading */}
        <div className="relative flex justify-center items-center pt-5 pb-8">
          <h1
            className="text-gray-300 dark:text-gray-600 absolute z-0 top-4 select-none"
            style={{ fontSize: 'clamp(80px, 12vw, 140px)', fontWeight: 900 }}
          >Contact</h1>
          <h2 className="text-black text-[50px] font-bold dark:text-white relative z-10">
            Contact Me
          </h2>
        </div>

        {/* Section label */}
        {visible && (
          <div
            style={{ animation: 'contactFadeUp 0.5s ease forwards', opacity: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #7c3aed, #60a5fa)', borderRadius: '2px' }} />
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', letterSpacing: '0.35em', color: '#60a5fa', textTransform: 'uppercase' }}>
              get in touch
            </span>
            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #60a5fa, #7c3aed)', borderRadius: '2px' }} />
          </div>
        )}

        {/* Description */}
        <div
          style={{ animation: visible ? 'contactFadeUp 0.6s ease forwards' : 'none', animationDelay: '0.1s', opacity: visible ? undefined : 0 }}
          className="text-center px-4 mb-12"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-[40em] mx-auto leading-relaxed">
            Feel free to reach out if you'd like to connect, collaborate, or discuss any projects!
            You can contact me at <span className="text-blue-400">balangatronamay@gmail.com</span> or connect on{' '}
            <span className="text-blue-400">ronamay-0408</span> GitHub.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactInfo.map((item, i) => (
            <ContactCard key={i} item={item} index={i} visible={visible} />
          ))}
        </div>

        {/* Image + Form */}
        <div
          style={{ animation: visible ? 'contactFadeUp 0.7s ease forwards' : 'none', animationDelay: '0.4s', opacity: visible ? undefined : 0 }}
          className="flex flex-col md:flex-row gap-8 items-stretch"
        >
          {/* Image */}
          <div className="w-full md:w-[42%] flex items-center justify-center">
            <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
              {/* Shimmer border */}
              <div style={{
                position: 'absolute', inset: '-3px', borderRadius: '20px',
                background: 'linear-gradient(135deg, #60a5fa, #7c3aed, #60a5fa)',
                backgroundSize: '200%',
                animation: 'shimmerMove 3s linear infinite',
                opacity: 0.5, zIndex: 0,
              }} />
              <style>{`
                @keyframes shimmerMove {
                  0%   { background-position: -200% center; }
                  100% { background-position: 200% center; }
                }
              `}</style>
              <div style={{ position: 'relative', zIndex: 1, borderRadius: '18px', overflow: 'hidden' }}>
                <img
                  src="/contents/ronabg.png"
                  alt="Rona May Balangat"
                  className="w-full h-full object-cover block"
                />
                {/* Overlay badge */}
                <div style={{
                  position: 'absolute', bottom: '16px', left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(8,8,18,0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(96,165,250,0.3)',
                  borderRadius: '100px', padding: '6px 16px',
                  whiteSpace: 'nowrap',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', color: '#e2e8f0', letterSpacing: '0.1em' }}>
                    Let's work together
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-[58%]">
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-10"
              style={{ border: '1px solid rgba(128,128,128,0.15)' }}
            >
              {/* Form header */}
              <div className="mb-6">
                <p style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', letterSpacing: '0.3em', color: '#60a5fa', textTransform: 'uppercase', marginBottom: '6px' }}>
                  send a message
                </p>
                <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 800, fontSize: '24px', letterSpacing: '-0.01em' }}
                  className="text-gray-900 dark:text-white">
                  Get In Touch
                </h3>
                <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #60a5fa, #7c3aed)', borderRadius: '2px', marginTop: '8px' }} />
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    required
                    className="contact-input w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-600"
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    required
                    className="contact-input w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-600"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))}
                  required
                  className="contact-input w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-600"
                />
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Your Message..."
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  required
                  className="contact-input w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-600 resize-none"
                />

                <button
                  type="submit"
                  disabled={sending || sent || error}
                  className="send-btn w-full flex items-center justify-center gap-2 text-white font-bold py-3 rounded-xl text-sm tracking-widest uppercase"
                  style={{
                    background: sent
                      ? 'linear-gradient(135deg, #10b981, #34d399)'
                      : error
                      ? 'linear-gradient(135deg, #ef4444, #f87171)'
                      : 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                    cursor: sending || sent || error ? 'default' : 'pointer',
                    letterSpacing: '0.15em',
                  }}
                >
                  {sent ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : error ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Failed — Try Again
                    </>
                  ) : sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact

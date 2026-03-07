import { useEffect, useRef, useState } from 'react'

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Web Design',
    description: 'Crafting visually stunning, user-centered interfaces with attention to detail, accessibility, and modern design principles.',
    color: '#60a5fa',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Full Stack Development',
    description: 'End-to-end web solutions — from database architecture and APIs to responsive frontends that deliver seamless experiences.',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Web Development',
    description: 'Building fast, secure, and scalable web applications using modern frameworks like React, Laravel, and Node.js.',
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 4.5h3m-6 4.5V18" />
      </svg>
    ),
    title: 'App Development',
    description: 'Developing cross-platform mobile and desktop applications with intuitive UX and robust back-end integration.',
    color: '#34d399',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Quality Assurance',
    description: 'Ensuring software reliability through thorough testing, debugging, and performance optimization before deployment.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: 'System Design & Architecture',
    description: 'Designing scalable, maintainable system architectures that balance performance, security, and developer experience.',
    color: '#f472b6',
  },
]

function ServiceCard({ service, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-gray-100 dark:bg-gray-800"
      style={{
        animationDelay: `${0.1 + index * 0.1}s`,
        opacity: visible ? undefined : 0,
        background: hovered
          ? `linear-gradient(135deg, rgba(31,41,55,0.08) 0%, ${service.color}12 100%)`
          : undefined,
        border: `1px solid ${hovered ? service.color + '66' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '20px',
        padding: '36px 28px',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 40px ${service.color}20` : '0 2px 12px rgba(0,0,0,0.15)',
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '56px', height: '56px',
        borderTop: `2px solid ${service.color}44`,
        borderRight: `2px solid ${service.color}44`,
        borderTopRightRadius: '20px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Bottom left accent */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '40px', height: '40px',
        borderBottom: `2px solid ${service.color}22`,
        borderLeft: `2px solid ${service.color}22`,
        borderBottomLeftRadius: '20px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Icon container */}
      <div style={{
        width: '64px', height: '64px',
        borderRadius: '16px',
        background: `${service.color}15`,
        border: `1px solid ${service.color}33`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: service.color,
        marginBottom: '20px',
        transition: 'all 0.35s ease',
        boxShadow: hovered ? `0 0 20px ${service.color}30` : 'none',
        transform: hovered ? 'scale(1.1) rotate(-4deg)' : 'scale(1) rotate(0deg)',
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        color: hovered ? service.color : undefined,
        fontFamily: "'Georgia', serif",
        fontSize: '18px', fontWeight: 800,
        marginBottom: '12px',
        transition: 'color 0.3s ease',
        letterSpacing: '-0.01em',
      }} className="text-gray-900 dark:text-gray-100">{service.title}</h3>

      {/* Divider */}
      <div style={{
        width: hovered ? '48px' : '24px', height: '2px',
        background: `linear-gradient(90deg, ${service.color}, transparent)`,
        borderRadius: '2px', marginBottom: '14px',
        transition: 'width 0.3s ease',
      }} />

      {/* Description */}
      <p style={{
        fontSize: '13px',
        lineHeight: 1.75, margin: 0,
        fontFamily: "'Courier New', monospace",
      }} className="text-gray-600 dark:text-gray-400">{service.description}</p>

      {/* Number watermark */}
      <div style={{
        position: 'absolute', bottom: '16px', right: '20px',
        fontFamily: "'Georgia', serif",
        fontSize: '48px', fontWeight: 900,
        color: `${service.color}08`,
        lineHeight: 1, userSelect: 'none',
        transition: 'color 0.3s ease',
        ...(hovered && { color: `${service.color}14` }),
      }}>0{index + 1}</div>
    </div>
  )
}

function Services() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 pb-24 px-4 overflow-hidden"
    >
      <style>{`
        @keyframes serviceFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '15%', right: '-5%',
          width: '380px', height: '380px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: '300px', height: '300px',
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
        <div className="relative flex justify-center items-center pt-5 pb-10">
          <h1
            className="text-gray-300 dark:text-gray-600 absolute z-0 top-5 select-none"
            style={{ fontSize: 'clamp(80px, 12vw, 140px)', fontWeight: 900 }}
          >Services</h1>
          <h2 className="text-black text-[50px] font-bold dark:text-white relative z-10">
            Services
          </h2>
        </div>

        {/* Section label */}
        {visible && (
          <div
            style={{ animation: 'serviceFadeUp 0.6s ease forwards', opacity: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #7c3aed, #60a5fa)', borderRadius: '2px' }} />
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', letterSpacing: '0.35em', color: '#60a5fa', textTransform: 'uppercase' }}>
              what I offer
            </span>
            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #60a5fa, #7c3aed)', borderRadius: '2px' }} />
          </div>
        )}

        {/* Description */}
        <div
          style={{
            animation: visible ? 'serviceFadeUp 0.6s ease forwards' : 'none',
            animationDelay: '0.1s', opacity: visible ? undefined : 0,
          }}
          className="text-center px-4 mb-14"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Fully dedicated to honing my skills as a full-stack developer. Passionate about tackling complex projects and always striving for excellence — whether it's coding or personal hobbies, I approach each task with commitment and focus.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services

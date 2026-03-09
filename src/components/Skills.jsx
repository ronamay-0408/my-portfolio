import { useState, useRef, useEffect } from "react";

const base = import.meta.env.BASE_URL

const skills = [
  { name: "HTML5", percent: 90, color: "#E34F26", category: "Frontend", logo: `${base}logos/html.png` },
  { name: "CSS", percent: 90, color: "#1572B6", category: "Frontend", logo: `${base}logos/text.png` },
  { name: "JavaScript", percent: 85, color: "#F7DF1E", category: "Frontend", logo: `${base}logos/java-script.png` },
  { name: "React", percent: 70, color: "#61DAFB", category: "Frontend", logo: `${base}logos/react.png` },
  { name: "PHP", percent: 90, color: "#777BB4", category: "Backend", logo: `${base}logos/php.png` },
  { name: "Laravel", percent: 90, color: "#FF2D20", category: "Framework", logo: `${base}logos/laravel.png` },
  { name: "GitHub", percent: 85, color: "#f0f6fc", category: "Tools", logo: `${base}logos/github.png` },
  { name: "Python", percent: 80, color: "#3776AB", category: "Backend", logo: `${base}logos/python.png` },
  { name: "Node JS", percent: 50, color: "#339933", category: "Backend", logo: `${base}logos/nodejs.png` },
  { name: "SQL", percent: 80, color: "#4479A1", category: "Database", logo: `${base}logos/sql-server.png` },
  { name: "WordPress", percent: 70, color: "#21759B", category: "CMS", logo: `${base}logos/wordpress.png` },
  { name: "ASP.NET MVC", percent: 50, color: "#512BD4", category: "Framework", logo: `${base}logos/web.png` },
  { name: "Java", percent: 60, color: "#ED8B00", category: "Languages", logo: `${base}logos/java.png` },
  { name: "C#", percent: 60, color: "#68217A", category: "Languages", logo: `${base}logos/c-sharp.png` },
  { name: "C++", percent: 40, color: "#00599C", category: "Languages", logo: `${base}logos/c-.png` },
]

const RadialBar = ({ percent, color, size = 120, logo }) => {
  const [animated, setAnimated] = useState(0);
  const ref = useRef(null);
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animated / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = null;
          const duration = 1200;
          const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setAnimated(Math.round(eased * percent));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref} style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ position: "absolute", top: 0, left: 0 }}>
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#1a1a2e" strokeWidth="7" />
        <circle
          cx="50" cy="50" r={radius} fill="none"
          stroke={color} strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 50 50)"
          style={{ transition: "stroke-dashoffset 0.05s linear", filter: `drop-shadow(0 0 6px ${color}88)` }}
        />
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: "4px",
      }}>
        <img
          src={logo}
          alt=""
          style={{ width: "42px", height: "42px", objectFit: "contain", filter: "drop-shadow(0 0 4px rgba(255,255,255,0.15))" }}
        />
        <span style={{
          color: "white",
          fontFamily: "'Courier New', monospace",
          fontWeight: 700,
          fontSize: "13px",
          lineHeight: 1,
        }}>{animated}%</span>
      </div>
    </div>
  );
};

const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const delay = (index % 5) * 80;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${delay}ms`,
        background: hovered
          ? `linear-gradient(135deg, #1f2937 0%, ${skill.color}18 100%)`
          : "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
        border: `1px solid ${hovered ? skill.color + "88" : "#ffffff14"}`,
        boxShadow: hovered ? `0 0 24px ${skill.color}30, inset 0 0 30px ${skill.color}08` : "none",
        transform: hovered ? "translateY(-6px) scale(1.03)" : "translateY(0) scale(1)",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        padding: "32px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      className="skill-card-animate"
    >
      {/* Corner accent */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "40px", height: "40px",
        borderTop: `2px solid ${skill.color}55`,
        borderRight: `2px solid ${skill.color}55`,
        borderTopRightRadius: "16px",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
      }} />

      <RadialBar percent={skill.percent} color={skill.color} size={120} logo={skill.logo} />

      <div style={{ textAlign: "center" }}>
        <p style={{
          color: hovered ? skill.color : "#e2e8f0",
          fontFamily: "'Courier New', monospace",
          fontWeight: 700,
          fontSize: "15px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          transition: "color 0.3s ease",
          margin: 0,
        }}>{skill.name}</p>
        <p style={{
          color: "#4a5568",
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          letterSpacing: "0.1em",
          marginTop: "4px",
          textTransform: "uppercase",
        }}>{skill.category}</p>
      </div>
    </div>
  );
};

const TechStackCarousel = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setScrollProgress(progress);
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <style>{`
        .skills-scroll::-webkit-scrollbar { display: none; }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes skillPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .skill-card-animate {
          animation: fadeSlideIn 0.5s ease forwards;
          opacity: 0;
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <p style={{
          color: "#6b7280",
          fontSize: "14px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          marginBottom: "8px",
          fontFamily: "'Courier New', monospace",
        }}>what I work with</p>
        <h3 style={{
          margin: 0,
          fontFamily: "'Georgia', serif",
          fontSize: "clamp(24px, 4vw, 45px)",
          fontWeight: 800,
          background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "0.02em",
        }}>Tech Stack</h3>
        <div style={{
          width: "40px", height: "2px",
          background: "linear-gradient(90deg, #7c3aed, #0ea5e9)",
          margin: "12px auto 0",
          borderRadius: "2px",
        }} />
      </div>

      {/* Scroll row */}
      <div style={{ position: "relative" }}>
        {/* Left fade + button */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "72px",
          background: "linear-gradient(90deg, #080812 0%, transparent 100%)",
          zIndex: 2, display: "flex", alignItems: "center", justifyContent: "flex-start",
          paddingLeft: "12px",
          opacity: canScrollLeft ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: canScrollLeft ? "auto" : "none",
        }}>
          <button
            onClick={() => scroll(-1)}
            style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%", width: "40px", height: "40px",
              color: "white", cursor: "pointer", fontSize: "18px",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
          >←</button>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="skills-scroll"
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            padding: "16px 80px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
          }}
        >
          {skills.map((skill, i) => (
            <div key={skill.name} style={{ flexShrink: 0, width: "190px", scrollSnapAlign: "center" }}>
              <SkillCard skill={skill} index={i} />
            </div>
          ))}
        </div>

        {/* Right fade + button */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "72px",
          background: "linear-gradient(270deg, #080812 0%, transparent 100%)",
          zIndex: 2, display: "flex", alignItems: "center", justifyContent: "flex-end",
          paddingRight: "12px",
          opacity: canScrollRight ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: canScrollRight ? "auto" : "none",
        }}>
          <button
            onClick={() => scroll(1)}
            style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%", width: "40px", height: "40px",
              color: "white", cursor: "pointer", fontSize: "18px",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
          >→</button>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        width: "160px", height: "2px",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "2px",
        margin: "24px auto 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, height: "100%",
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(90deg, #7c3aed, #0ea5e9)",
          borderRadius: "2px",
          transition: "width 0.1s linear",
          boxShadow: "0 0 8px #7c3aed88",
        }} />
      </div>
      <p style={{
        color: "#374151",
        fontSize: "10px",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "8px",
        fontFamily: "'Courier New', monospace",
      }}>scroll to explore</p>
    </div>
  );
};

function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 dark:border-gray-700 pb-10 px-2">
      {/* Content */}
      <div className="max-w-[70rem] w-full items-stretch">

        {/* Section heading */}
        <div className="relative flex justify-center items-center pt-5 pb-10">
          <h1
            className="text-gray-300 dark:text-gray-600 absolute z-0 top-5"
            style={{ fontSize: "clamp(80px, 12vw, 140px)", fontWeight: 900 }}
          >
            Skills
          </h1>
          <h2 className="text-black text-[50px] font-bold dark:text-white relative z-10">
            My Skills
          </h2>
        </div>

        {/* Description */}
        <div className="relative z-10 text-center px-4">
          <p className="text-gray-600 dark:text-gray-300">
            I've developed strong skills in full-stack development, with expertise in both front-end and back-end technologies.
            I'm proficient in languages like PHP, Java, JavaScript, Python, C#, and SQL, and have hands-on experience with frameworks
            such as React, Laravel, Nuxt.js, and ASP.NET MVC. I'm always eager to expand my technical knowledge and apply it to
            real-world projects that make a meaningful impact.
          </p>
        </div>

        {/* Tech Stack — full dark design */}
        <div className="mt-10 bg-gray-900" style={{
          padding: "48px 0 36px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Background grid */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.04,
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }} />
          {/* Ambient glow blobs */}
          <div style={{
            position: "absolute", top: "0%", left: "0%",
            width: "350px", height: "350px",
            background: "radial-gradient(circle, #7c3aed22 0%, transparent 70%)",
            borderRadius: "50%", pointerEvents: "none",
            animation: "skillPulse 6s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "0%", right: "0%",
            width: "280px", height: "280px",
            background: "radial-gradient(circle, #0ea5e922 0%, transparent 70%)",
            borderRadius: "50%", pointerEvents: "none",
            animation: "skillPulse 8s ease-in-out infinite 2s",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <TechStackCarousel />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Rona May Balangat',
  handle: '@ronamay-0408',
  role: 'Full Stack Developer',
  photo: `${base}contents/ronabg.png`,
  resume: `${base}resume.pdf`,
  email: 'balangatronamay@gmail.com',
  phone: '999-856-3419',
  address: 'Sto. Domingo, Albay 4508',
  website: 'ronamay-0408.github.io',
  github: 'https://github.com/ronamay-0408',
  linkedin: 'https://www.linkedin.com/in/rona-may-balangat-50037b289',
  headline: ['Build it clean.', 'Ship it simple.'],
  tagline:
    'IT graduate and Software Engineer at Poliris. I build web systems that pull scattered information into one place and make the process feel effortless for the people using it.',
}

export const socials = [
  { label: 'GitHub',   icon: 'bi-github',        href: profile.github },
  { label: 'LinkedIn', icon: 'bi-linkedin',      href: profile.linkedin },
  { label: 'Email',    icon: 'bi-envelope-fill', href: `mailto:${profile.email}` },
]

export const nav = [
  { id: 'home',       label: 'Home',       icon: 'bi-house',        blurb: 'The overview' },
  { id: 'projects',   label: 'Projects',   icon: 'bi-folder2-open', blurb: 'Systems and apps built to solve real problems.' },
  { id: 'skills',     label: 'Skills',     icon: 'bi-stack',        blurb: 'The stack I reach for.' },
  { id: 'experience', label: 'Experience', icon: 'bi-briefcase',    blurb: 'Where I have worked and studied.' },
  { id: 'services',   label: 'Services',   icon: 'bi-grid-1x2',     blurb: 'What I can build for you.' },
  { id: 'about',      label: 'About',      icon: 'bi-person',       blurb: 'Who I am and how I work.' },
  { id: 'contact',    label: 'Contact',    icon: 'bi-chat-dots',    blurb: 'Let us talk about your project.' },
]

export const dailyDrivers = [
  { name: 'Laravel',    logo: `${base}logos/laravel.png` },
  { name: 'PHP',        logo: `${base}logos/php.png` },
  { name: 'React',      logo: `${base}logos/react.png` },
  { name: 'JavaScript', logo: `${base}logos/java-script.png` },
  { name: 'TypeScript', logo: `${base}logos/typescript.svg` },
  { name: 'Python',     logo: `${base}logos/python.png` },
  { name: 'C#',         logo: `${base}logos/c-sharp.png` },
  { name: 'MySQL',      logo: `${base}logos/sql-server.png` },
  { name: 'GitHub',     logo: `${base}logos/github.png` },
]

export const projects = [
  {
    id: 'busina',
    title: 'BUsina',
    category: 'Capstone System',
    description:
      'Vehicle registration and violation management for the whole of Bicol University, combining registration, security clearance and violation tracking in one platform for campus entry and exit.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    cover: `${base}projects/busina/1.png`,
    screenshots: Array.from({ length: 9 }, (_, i) => `${base}projects/busina/${i + 1}.png`),
  },
  {
    id: 'coe',
    title: 'Self-Assessment Tool',
    category: 'Web System',
    description:
      'A web-based tool for managing and evaluating requirements for school accreditation, with document tracking and per-criterion scoring.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind', 'Preline'],
    cover: `${base}projects/coe/1.png`,
    screenshots: Array.from({ length: 8 }, (_, i) => `${base}projects/coe/${i + 1}.png`),
  },
  {
    id: 'iraya',
    title: 'Iraya Energies',
    category: 'Website',
    description:
      'A dynamic demo site showcasing Iraya’s products and services, rebuilt for responsiveness, performance and easy content management.',
    tech: ['Laravel', 'WordPress', 'Vue.js', 'MySQL'],
    cover: `${base}projects/iraya/1.png`,
    screenshots: Array.from({ length: 8 }, (_, i) => `${base}projects/iraya/${i + 1}.png`),
  },
  {
    id: 'glasses-ecom',
    title: 'Glasses E-Commerce',
    category: 'E-Commerce',
    description:
      'A sleek online eyewear store with product filtering, cart management and a smooth checkout experience.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    cover: `${base}projects/glassesEcom/1.png`,
    screenshots: Array.from({ length: 2 }, (_, i) => `${base}projects/glassesEcom/${i + 1}.png`),
  },
  {
    id: 'voting-system',
    title: 'Voting System',
    category: 'Web App',
    description:
      'A secure digital voting platform that streamlines elections with voter authentication, real-time results and audit trails.',
    tech: ['Node.js', 'JavaScript'],
    cover: `${base}projects/voting-system.png`,
    screenshots: [`${base}projects/voting-system.png`, `${base}contents/votingSystem.jpg`],
  },
  {
    id: 'inventory-system',
    title: 'Inventory System',
    category: 'Desktop System',
    description:
      'A full-featured inventory manager with stock tracking, supplier records and reporting dashboards.',
    tech: ['Java', 'MySQL'],
    cover: `${base}projects/inventory-system-java.png`,
    screenshots: [`${base}projects/inventory-system-java.png`, `${base}contents/javaInventory.jpg`],
  },
]

export const lab = [
  { title: 'Motorpool',     img: `${base}contents/Motorpool.png` },
  { title: 'Eye Store',     img: `${base}contents/EyeStore.jpg` },
  { title: 'Chat App',      img: `${base}contents/chatApp.jpg` },
  { title: 'Weather App',   img: `${base}contents/weatherAppFIGMA.png` },
  { title: 'Calculator',    img: `${base}contents/Calcu.jpg` },
  { title: 'Location Map',  img: `${base}contents/loc.png` },
]

export const skills = [
  { name: 'HTML5',       percent: 90, category: 'Frontend',  logo: `${base}logos/html.png` },
  { name: 'CSS',         percent: 90, category: 'Frontend',  logo: `${base}logos/text.png` },
  { name: 'JavaScript',  percent: 85, category: 'Frontend',  logo: `${base}logos/java-script.png` },
  { name: 'TypeScript',  percent: 75, category: 'Frontend',  logo: `${base}logos/typescript.svg` },
  { name: 'React',       percent: 70, category: 'Frontend',  logo: `${base}logos/react.png` },
  { name: 'PHP',         percent: 90, category: 'Backend',   logo: `${base}logos/php.png` },
  { name: 'Laravel',     percent: 90, category: 'Framework', logo: `${base}logos/laravel.png` },
  { name: 'Supabase',    percent: 70, category: 'Backend',   logo: `${base}logos/supabase.svg` },
  { name: 'GitHub',      percent: 85, category: 'Tools',     logo: `${base}logos/github.png` },
  { name: 'Python',      percent: 80, category: 'Backend',   logo: `${base}logos/python.png` },
  { name: 'SQL',         percent: 80, category: 'Database',  logo: `${base}logos/sql-server.png` },
  { name: 'WordPress',   percent: 70, category: 'CMS',       logo: `${base}logos/wordpress.png` },
  { name: 'Java',        percent: 60, category: 'Language',  logo: `${base}logos/java.png` },
  { name: 'C#',          percent: 60, category: 'Language',  logo: `${base}logos/c-sharp.png` },
  { name: 'Node.js',     percent: 50, category: 'Backend',   logo: `${base}logos/nodejs.png` },
  { name: 'ASP.NET MVC', percent: 50, category: 'Framework', logo: `${base}logos/web.png` },
  { name: 'C++',         percent: 40, category: 'Language',  logo: `${base}logos/c-.png` },
]

export const experience = [
  {
    period: 'March 2026 to Present',
    role: 'Software Engineer',
    org: 'Poliris',
    type: 'Full-time',
    description:
      'Responsible for the Poliris website and the GEO dashboard inside the Poliris application, building features end to end and keeping both interfaces fast, reliable and easy to use.',
    tags: ['TypeScript', 'React', 'Supabase', 'Python'],
  },
  {
    period: 'Oct 2025 to June 2026',
    role: 'Junior Programmer',
    org: 'Bicol University, ICTO',
    type: 'Full-time',
    description:
      'Developed and maintained the software that runs on the university’s digital infrastructure. Worked with cross-functional teams to design, build and optimise systems that improve user experience and day-to-day operations.',
    tags: ['PHP', 'Laravel', 'Livewire', 'MySQL', 'Tailwind', 'Preline'],
  },
  {
    period: 'Feb 2025 to May 2025',
    role: 'Full Stack Developer',
    org: 'Iraya Energies Inc.',
    type: 'Internship',
    description:
      'Built a dynamic demo page showcasing Iraya’s products and services using Laravel and WordPress, improving UI/UX, responsiveness, performance and content manageability.',
    tags: ['WordPress', 'ReactJS', 'NuxtJS'],
  },
  {
    period: '2024 to 2025',
    role: 'Full Stack Developer',
    org: 'Bicol University, Capstone',
    type: 'Project',
    description:
      'Led BUsina, a full-scale vehicle registration and security system for the entire university, combining user management, system security and data processing into one platform for campus-wide safety.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Full Stack'],
  },
  {
    period: '2021 to 2025',
    role: 'BS Information Technology',
    org: 'Bicol University',
    type: 'Education',
    description:
      'Explored the full spectrum of IT, from software development and databases to networking and systems analysis, alongside hands-on projects that blend creativity with technical skill.',
    tags: ['BSIT', 'Software Dev', 'Databases', 'Networking'],
  },
]

export const services = [
  {
    icon: 'bi-palette',
    title: 'Web Design',
    description: 'Visually considered, user-centred interfaces built with attention to detail, accessibility and modern design principles.',
  },
  {
    icon: 'bi-code-slash',
    title: 'Full Stack Development',
    description: 'End-to-end web solutions, from database architecture and APIs to responsive frontends that feel seamless.',
  },
  {
    icon: 'bi-globe2',
    title: 'Web Development',
    description: 'Fast, secure and scalable web applications using modern frameworks like React, Laravel and Node.js.',
  },
  {
    icon: 'bi-phone',
    title: 'App Development',
    description: 'Cross-platform mobile and desktop applications with intuitive UX and a solid back-end behind them.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Quality Assurance',
    description: 'Reliable software through thorough testing, debugging and performance tuning before anything ships.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'System Design',
    description: 'Scalable, maintainable architectures that balance performance, security and developer experience.',
  },
]

export const stats = [
  { number: 7,   label: 'Projects\nCompleted' },
  { number: 2,   label: 'Happy\nClients' },
  { number: 5,   label: 'Years\nLearning' },
  { number: 100, label: 'Cups of\nCoffee' },
]

export const personal = [
  { label: 'Name',     value: 'Rona May Balangat' },
  { label: 'Born',     value: 'February 28, 2003' },
  { label: 'Location', value: 'Sto. Domingo, Albay' },
  { label: 'Email',    value: profile.email },
  { label: 'Phone',    value: profile.phone },
  { label: 'Role',     value: 'Software Engineer, Poliris' },
]

export const reach = [
  { icon: 'bi-geo-alt-fill',   label: 'Address', value: profile.address },
  { icon: 'bi-telephone-fill', label: 'Phone',   value: profile.phone },
  { icon: 'bi-envelope-fill',  label: 'Email',   value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'bi-github',         label: 'GitHub',  value: 'ronamay-0408', href: profile.github },
]

export const bio = [
  'I’m an Information Technology graduate with a strong passion for technology and problem-solving. I enjoy creating websites that centralise information and make processes easy and simple for the people using them.',
  'Right now I work as a Software Engineer at Poliris, where most of my days are spent building the company website and the GEO dashboard with TypeScript, React and Supabase. Outside of code I cook, experiment with new recipes, and build custom furniture, always blending creativity with function.',
]

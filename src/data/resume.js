export const profile = {
  name: 'Chisom Darlynton Steve-Oko',
  title: 'Full-Stack Developer | Cloud Computing',
  location: 'Port Harcourt, Nigeria',
  email: 'chisomdarlynton@gmail.com',
  github: 'https://github.com/Darchis01',
  linkedin: 'https://www.linkedin.com/in/chisom-darlynton-1268a4249',
  resumeFile: '/resume.pdf', // drop your exported PDF resume into /public as resume.pdf
  summary:
    "A Computer Science graduate from Gregory University Uturu, with a self-directed focus on cloud computing, with hands-on full-stack experience across Python, JavaScript, Django, Flask, React, and Node.js. Built AERO, a predictive network failover system for hybrid cloud environments using SDN (Mininet/Ryu) and a machine learning classifier. Interned as a full-stack developer with cloud deployment exposure, and comfortable working from infrastructure to UI. Currently expanding a portfolio of self-directed cloud and full-stack projects.",
}

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Django', 'Flask', 'React', 'Node.js'],
  },
  {
    category: 'Cloud & Systems',
    items: ['Microsoft Azure', 'Cloud Computing Fundamentals', 'VM-based Network Simulation (VirtualBox, Linux)', 'Software-Defined Networking (Mininet/Ryu)'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
    {
    category: 'Tools & Platforms',
    items: ['VS Code', 'GitHub', 'Vercel', 'Render', 'Tableau', 'Canva'],
  },
  {
    category: 'Design',
    items: ['UI/UX Design', 'Graphics Design'],
  },  {
    category: 'Design',
    items: ['UI/UX Design', 'Graphics Design', 'Figma', 'Adobe Illustrator', 'Photoshop', 'Behance'],
  },
]

export const experience = [
  {
    company: 'New Horizon Solutions',
    location: 'Ekere, Port Harcourt, Nigeria',
    role: 'Full-Stack Developer (Internship)',
    period: 'Jul 2025 – Dec 2025',
    points: [
      'Completed a structured full-stack development track, building features with Python, JavaScript, CSS, Django, and REST APIs.',
      'Trained in cloud computing on Microsoft Azure, covering deployment workflows and infrastructure practices.',
      'Completed a UI/UX design side course covering Figma, Adobe Illustrator, Photoshop, Canva, and Behance, sharpening existing graphics design skills through real project work.',
    ],
  },
  {
    company: 'Gregory University Uturu (GUU)',
    location: 'Abia State, Nigeria',
    role: 'Networking & Data Analysis (Internship)',
    period: 'Aug 2024 – Dec 2024',
    points: [
      'Worked on computer networking fundamentals — hardware coupling/decoupling, building network cables (including twisted-pair), routers, and setting up network connections.',
      'Performed data analysis on large datasets (e.g. population statistics), cleaning data and producing insights and recommendations using Tableau.',
    ],
  },
]

export const education = {
  school: 'Gregory University Uturu (GUU), Abia State, Nigeria',
  degree: 'B.Sc. Computer Science (2022 – 2026)',
}

// Replace / extend these as you build and host more projects on GitHub.
export const projects = [
  {
    title: 'AERO — Autonomous Edge-Resilience Orchestrator',
    description:
      'A predictive network failover system for hybrid cloud environments. Combines a Random Forest classifier with Software-Defined Networking to anticipate and route around link failures in real time, with a live monitoring dashboard.',
    stack: ['Flask', 'Mininet/Ryu SDN', 'Random Forest', 'vis.js', 'Chart.js'],
    github: 'https://github.com/Darchis01/aero',
    live: '',
    featured: true,
  },

  {
    title: 'DevTrack',
    description:
      'A full-stack task tracker built to demonstrate end-to-end engineering — from database design to CI/CD-ready deployment. Supports full task CRUD with status workflow (To Do → In Progress → Done) and priority levels, deployed across three separate services.',
    stack: ['React (Vite)', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL (Supabase)', 'GitHub Actions'],
    github: 'https://github.com/Darchis01/devtrack',
    live: 'https://devtrack-smoky.vercel.app',
    featured: false,
  },
  {
    title: 'Job Application Tracker',
    description:
      'A kanban-style board for tracking job applications through Applied, Interviewing, Offer, and Rejected stages. Full CRUD via a REST API, with Django-powered admin for direct data management.',
    stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'React'],
    github: 'https://github.com/Darchis01/job-tracker-api',
    live: 'https://job-tracker-frontend-997n.vercel.app',
    featured: false,
  },
]

export const certifications = [
  'Cisco Networking Academy — Get Connected (2021)',
  'Jobberman / Mastercard Foundation — Building Careers for Workplace Success Training (2026)',
  'La Plage Meta Verse — Artificial Intelligence for International HR Managers (Level 1)',
  'La Plage Meta Verse — Artificial Intelligence for Public Service Officials (Level 1)',
  'La Plage Meta Verse — Artificial Intelligence for Healthcare Practitioners (Level 1)',
  'La Plage Meta Verse — International Customer Service for Managers (Level 1)',
  'La Plage Meta Verse — Emotional Intelligence (Level 1)',
  'La Plage Meta Verse — Climate Change and Renewable Energy (Level 1)',
]

export const terminalLines = [
  { cmd: 'whoami', out: profile.name },
  { cmd: 'cat role.txt', out: profile.title },
  { cmd: 'cat status.txt', out: 'CS graduate · open to full-stack / cloud roles' },
]

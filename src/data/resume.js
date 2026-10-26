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

export const about = {
  photo: '/profile.jpg', // drop your photo into /public as profile.jpg
  bio:
    "I'm a Computer Science graduate from Gregory University Uturu with a self-directed focus on cloud computing and full-stack development. I like building things end-to-end — from cloud infrastructure to the interface people actually touch — and I learn best by shipping real, working projects rather than tutorials alone. Outside of code, I run live production for my church's media unit most Sundays: handling the livestream, screen displays, and making sure the broadcast goes out without a hitch — a different kind of real-time systems work.",
}

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'PHP'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Django', 'Flask', 'React', 'Node.js', 'Vue.js', 'Spring'],
  },
  {
    category: 'Cloud & Systems',
    items: ['Microsoft Azure (AZ-900, AZ-104, AZ-400)', 'AWS Cloud Practitioner Fundamentals', 'Docker', 'Kubernetes', 'VM-based Network Simulation (VirtualBox, Linux)', 'Software-Defined Networking (Mininet/Ryu)'],
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
      'Trained in cloud computing on Microsoft Azure (AZ-900, AZ-104, AZ-400 track), covering deployment workflows and infrastructure practices.',
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
      'A predictive network failover system for hybrid cloud environments. Combines a Random Forest classifier with Software-Defined Networking (Mininet + Ryu) to anticipate and route around link failures in real time, with a live monitoring dashboard. Full-scale simulation requires a Linux environment to run — see AERO-Lite for a live, serverless demo.',
    stack: ['Flask', 'Mininet/Ryu SDN', 'Random Forest', 'vis.js', 'Chart.js'],
    github: 'https://github.com/Darchis01/aero',
    live: '',
    featured: true,
  },
  {
    title: 'AERO-Lite',
    description:
      'A serverless, deployable demo of AERO. Swaps the Linux-dependent Mininet/Ryu simulation for a synthetic traffic generator, so the same prediction logic runs anywhere. The model itself isn\u2019t faked: it\u2019s a Random Forest retrained on a larger, more realistic dataset, exported as a pure-Python tree-walker, and verified to produce identical predictions to the original scikit-learn model — without needing scikit-learn at runtime.',
    stack: ['Vercel Serverless Functions', 'Python (stdlib only)', 'Random Forest'],
    github: 'https://github.com/Darchis01/aero-lite',
    live: 'https://aero-lite.vercel.app/',
    featured: false,
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
  {
    title: 'Bookstore',
    description:
      'A Django bookstore application with a fully documented relational database design — ER diagram, data-flow documentation, and a complete SQL schema committed alongside the code.',
    stack: ['Django', 'SQL', 'PostgreSQL'],
    github: 'https://github.com/Darchis01/bookstore',
    live: '',
    featured: false,
  },
]

export const certifications = [
  'Cisco Networking Academy — Get Connected (2021)',
  'Cisco Networking Academy — IoT Fundamentals (2022)',
  'Jobberman / Mastercard Foundation — Building Careers for Workplace Success Training (2026)',
  'Microsoft Azure — AZ-900, AZ-104, AZ-400 course track (New Horizon Solutions)',
  'AWS Training & Certification — Cloud Practitioner Essentials (2026)',
  'AWS Training & Certification — Compute Services Overview (2026)',
  'AWS Training & Certification — Amazon Connect Instance Fundamentals (2026)',
]

export const terminalLines = [
  { cmd: 'whoami', out: profile.name },
  { cmd: 'cat role.txt', out: profile.title },
  { cmd: 'cat status.txt', out: 'CS graduate · open to full-stack / cloud roles' },
]
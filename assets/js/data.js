/**
 * Centralised site content.
 * Edit these arrays to add or update skills, projects and certifications.
 * See README.md for the field reference.
 */

/* Skill groups (no percentage bars by design). `icon` is a key of ICONS in main.js. */
window.SKILLS = [
  { title: 'Programming', icon: 'code', items: ['Python', 'PHP', 'JavaScript', 'Java'] },
  { title: 'Data & Databases', icon: 'database', items: ['SQL', 'MySQL', 'PostgreSQL', 'Oracle SQL', 'Pandas', 'Power BI'] },
  { title: 'Cloud & Infrastructure', icon: 'cloud', items: ['Linux', 'Red Hat', 'AWS', 'GCP', 'Apache'] },
  { title: 'Networking & Cybersecurity', icon: 'shield', items: ['Cisco Networking', 'Network Troubleshooting', 'Network Defense', 'Firewalls', 'iptables'] },
  { title: 'Development', icon: 'git', items: ['Git', 'REST APIs', 'MVC Architecture'] }
];

/*
 * Projects. Optional fields: image, github, demo, tags.
 * Leave github/demo empty ('') when there is no public link — the button is hidden.
 */
window.PROJECTS = [
  {
    title: 'EcoFloat',
    subtitle: 'Invernadero flotante inteligente',
    year: '2024 – Actualidad',
    category: 'IoT y Sostenibilidad',
    description: 'Desarrollo de un prototipo tecnológico de invernadero flotante orientado al cultivo a pequeña escala, incorporando componentes IoT para monitoreo ambiental y transmisión remota de datos.',
    image: 'assets/img/projects/ecofloat.svg',
    imageAlt: 'Ilustración abstracta de un invernadero flotante con nodos de sensores conectados',
    tags: ['IoT', 'Monitoreo ambiental', 'Transmisión remota de datos'],
    github: '',
    demo: ''
  },
  {
    title: 'Humedal Inteligente',
    subtitle: 'Monitoreo IoT de humedales',
    year: '2026 – Actualidad',
    category: 'IoT y Sostenibilidad',
    description: 'Desarrollo de un concepto de humedal inteligente que integra tecnologías IoT para monitoreo ambiental, recopilación de datos y supervisión remota del sistema.',
    image: 'assets/img/projects/humedal.svg',
    imageAlt: 'Ilustración abstracta de un humedal con ondas de agua y red de sensores',
    tags: ['IoT', 'Recopilación de datos', 'Supervisión remota'],
    github: '',
    demo: ''
  }
];

/*
 * Certifications. Optional fields: badge (image path), credentialUrl.
 * Without `badge`, a typographic card is rendered. Without `credentialUrl`, no link is shown.
 */
window.CERTIFICATIONS = [
  {
    title: 'Network Defense Essentials (NDE) v1',
    issuer: 'EC-Council',
    year: '2024',
    area: 'Ciberseguridad · Defensa de redes',
    badge: '',
    credentialUrl: ''
  },
  {
    title: 'Cisco Certified Support Technician — Cybersecurity (CCST Cybersecurity)',
    issuer: 'Cisco',
    year: '2026',
    area: 'Ciberseguridad',
    badge: '',
    credentialUrl: ''
  }
];

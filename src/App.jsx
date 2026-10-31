import { useEffect, useState } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Download, Eye, Menu, X, ArrowUp, Award } from 'lucide-react'

const GH = 'https://github.com/sakthi-vel2005'
const LI = 'https://www.linkedin.com/in/sakthivel-v-93083b247'
const MAIL = 'sakthivel972005@gmail.com'
const PDF = '/resume/Sakthivel-V-Resume.pdf'
const NAV = ['home', 'about', 'skills', 'projects', 'education', 'contact']
const SKILLS = {
  'Programming Languages': ['Java', 'SQL'],
  Frontend: ['HTML', 'CSS', 'React.js'],
  Backend: ['JDBC', 'Java Servlets', 'JSP', 'Hibernate'],
  Database: ['MySQL'],
  'Core Concepts': ['Object-Oriented Programming', 'Data Structures and Algorithms', 'Computer Networking', 'Design Patterns'],
  'Tools and Platforms': ['Git', 'GitHub', 'Docker'],
}
// Project links: set real URLs here when available. null = not published yet.
const PROJECTS = [
  { t: 'SharePlate', s: 'AI-Powered Food Rescue Platform', tech: ['React.js', 'Core Java', 'Java Servlets', 'JDBC', 'MySQL', 'Apache Tomcat', 'AI API'], gh: null, live: null, kind: 'food',
    d: 'A web-based food rescue platform that connects food donors with NGOs to reduce food waste. Currently in development.', f: ['Food donation management', 'Recipient requests', 'Pickup coordination', 'AI-powered donation description generation'] },
  { t: 'SmartSpend', s: 'AI-Powered Personal Expense Tracker', tech: ['Java', 'JDBC', 'Servlets', 'JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript'], gh: null, live: null, kind: 'money',
    d: 'A personal finance web application for tracking income and expenses through manual entry and optional CSV bank statement imports.', f: ['Transaction management', 'Spending analytics', 'AI-powered insights', 'Budgeting recommendations'] },
]
const Tags = ({ list }) => <div className="tags">{list.map(x => <span className="tag" key={x}>{x}</span>)}</div>
const Reveal = ({ children, ...p }) => <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .5 }} {...p}>{children}</motion.div>
const Link = ({ href, ico: I, children, cls = '', ...r }) => <a className={`btn ${cls}`} href={href} {...r}><I size={18} />{children}</a>

function Nav() {
  const [open, setOpen] = useState(false), [on, setOn] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setOn(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV.forEach(id => document.getElementById(id) && io.observe(document.getElementById(id)))
    return () => io.disconnect()
  }, [])
  return <nav aria-label="Main"><div className="wrap">
    <a href="#home" className="logo">Sakthivel V.</a>
    <ul className={open ? 'open' : ''}>{NAV.map(n => <li key={n}><a href={`#${n}`} className={on === n ? 'on' : ''} onClick={() => setOpen(false)}>{n[0].toUpperCase() + n.slice(1)}</a></li>)}
      <li><a className="btn fill" href={PDF} download="Sakthivel-V-Resume.pdf"><Download size={16} />Resume</a></li></ul>
    <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></nav>
}

function Hero() {
  const up = i => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { delay: .1 * i, duration: .6 } })
  return <><section id="home" className="wrap hero">
    <div>
      <motion.p className="hello" {...up(0)}>HELLO, I'M</motion.p>
      <motion.h1 {...up(1)}>Sakthivel V.</motion.h1>
      <motion.h2 {...up(2)}>Java Full Stack Developer &amp; AI Integration Enthusiast.</motion.h2>
      <motion.p {...up(3)}>B.Tech Information Technology graduate with hands-on knowledge of Java, SQL, React, and backend development. Passionate about building practical software solutions, integrating AI capabilities, and continuously improving my technical skills.</motion.p>
      <motion.div className="row" {...up(4)}>
        <Link cls="fill" ico={Download} href={PDF} download="Sakthivel-V-Resume.pdf">Download Resume</Link>
        <Link ico={Eye} href="#projects">Explore Projects</Link>
        <Link cls="slate" ico={Mail} href="#contact">Contact Me</Link>
      </motion.div>
      <motion.div className="row" {...up(5)}>
        <a className="ico" href={GH} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
        <a className="ico" href={LI} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
        <a className="ico" href={`mailto:${MAIL}`} aria-label="Email"><Mail size={20} /></a>
      </motion.div>
    </div>
    <motion.div className="frame" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }} transition={{ opacity: { duration: .8 }, scale: { duration: .8 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}>
      <img src="/images/profile.png" width="900" height="1240" alt="Portrait of Sakthivel V in a navy blazer" />
    </motion.div>
  </section>
  <div className="strip"><div className="wrap">{['Java', 'React', 'JDBC', 'MySQL', 'AI Integration'].map(x => <span key={x}>{x}</span>)}</div></div></>
}

function About() {
  return <section id="about"><div className="wrap"><h2>About me</h2><Reveal className="about">
    <div><p>I am a B.Tech Information Technology graduate with hands-on knowledge of Java, SQL, HTML, CSS, JavaScript and React. My academic projects use Java Full Stack technologies and AI integration, built on a foundation in Data Structures and Algorithms, Object-Oriented Programming and System Design.</p>
      <p>I enjoy backend work with JDBC and Servlets, and I am looking for an entry-level Software Developer role where I can contribute to real-world software.</p></div>
    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
      {[['Degree', 'B.Tech IT, 2026'], ['CGPA', '7.48'], ['Focus', 'Java Full Stack'], ['Interest', 'AI integration']].map(([a, b]) => <div className="card" key={a}><small>{a}</small><h3 style={{ margin: 0 }}>{b}</h3></div>)}
    </div></Reveal></div></section>
}

const Skills = () => <section id="skills"><div className="wrap"><h2>Technical skills</h2><div className="grid">
  {Object.entries(SKILLS).map(([k, v], i) => <motion.div className="card" key={k} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}><h3>{k}</h3><Tags list={v} /></motion.div>)}
</div></div></section>

const Viz = ({ kind }) => <div className="viz" role="img" aria-label={kind === 'food' ? 'Illustrative preview of a food donation dashboard' : 'Illustrative preview of a spending dashboard'}>
  <div className="bar" style={{ width: '45%' }} /><div className="bar c" style={{ width: '70%' }} />
  <div className="vrow">{(kind === 'food' ? [40, 70, 55, 90, 65] : [30, 55, 80, 45, 70]).map((h, i) => <i key={i} style={{ height: h + '%' }} />)}</div>
  <div className="bar c" style={{ width: '60%' }} /></div>

const Projects = () => <section id="projects"><div className="wrap"><h2>Featured projects</h2>
  {PROJECTS.map((p, i) => <Reveal className="card proj" key={p.t}>
    <div><h3 style={{ fontSize: '1.7rem' }}>{p.t}</h3><p style={{ color: 'var(--slate)', fontWeight: 500 }}>{p.s}</p><p style={{ marginTop: 12 }}>{p.d}</p>
      <ul style={{ margin: '12px 0 0 20px' }}>{p.f.map(x => <li key={x}>{x}</li>)}</ul><Tags list={p.tech} />
      <div className="row" style={{ marginTop: 8 }}>
        {[['GitHub', Github, p.gh], ['Live demo', Eye, p.live]].map(([l, I, u]) => u
          ? <Link key={l} ico={I} href={u} target="_blank" rel="noreferrer">{l}</Link>
          : <span key={l} className="btn" role="link" aria-disabled="true"><I size={18} />{l} (link coming soon)</span>)}
      </div></div>
    <div><Viz kind={p.kind} /><p className="note">Illustrative preview, not a screenshot.</p></div>
  </Reveal>)}</div></section>

const Education = () => <section id="education"><div className="wrap"><h2>Education, training and certification</h2><div className="tl">
  {[['Bachelor of Technology, Information Technology', 'Vel Tech Multi Tech College, Avadi, Tiruvallur. 2022–2026. CGPA 7.48.'],
    ['Higher Secondary, Class XII (Bio-Maths)', 'Sowdambikaa Matric Hr. Sec. School, Tiruchirapalli. 74.26%.'],
    ['Secondary, Class X', 'Sowdambikaa Matric Hr. Sec. School, Tiruchirapalli. 85%.']].map(([a, b]) => <Reveal className="card" key={a}><h3>{a}</h3><p>{b}</p></Reveal>)}
  <Reveal className="card"><h3>Java Full Stack Development Training, Tap Academy</h3>
    <p style={{ marginBottom: 12 }}>Practical training in backend application development, CRUD operations, database connectivity and AI integration.</p><Tags list={['Core Java', 'JDBC', 'Servlets', 'JSP', 'Hibernate', 'SQL']} /></Reveal>
  <Reveal className="card"><h3><Award size={20} style={{ verticalAlign: -3 }} /> Google Data Analytics Specialization</h3>
    <p style={{ marginBottom: 12 }}>Foundational knowledge for working with data.</p><Tags list={['Data analysis', 'Data cleaning', 'Data visualization', 'Spreadsheets', 'SQL', 'Tableau']} /></Reveal>
</div></div></section>

const Contact = () => <section id="contact"><div className="wrap">
  <Reveal className="band" id="resume"><h2>Want to know more about my experience?</h2><p>Download my resume to explore my technical skills, academic projects, education, and professional training.</p>
    <div className="row"><Link ico={Download} href={PDF} download="Sakthivel-V-Resume.pdf">Download Resume</Link><Link cls="slate" ico={Eye} href={PDF} target="_blank" rel="noreferrer">View Resume</Link></div></Reveal>
  <h2 style={{ marginTop: 80 }}>Let's work together.</h2>
  <p style={{ maxWidth: 560, marginBottom: 28 }}>I'm open to entry-level software development opportunities, collaborations, and exciting technical projects.</p>
  <div className="grid">{[[Mail, 'Email', MAIL, `mailto:${MAIL}`], [Phone, 'Phone', '7418457322', 'tel:+917418457322'], [MapPin, 'Location', 'Tiruchirapalli, Tamil Nadu, India'], [Github, 'GitHub', 'sakthi-vel2005', GH], [Linkedin, 'LinkedIn', 'sakthivel-v-93083b247', LI]].map(([I, l, v, h]) =>
    <div className="card" key={l}><I size={22} /><h3 style={{ marginTop: 10 }}>{l}</h3>{h ? <a href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{v}</a> : <p>{v}</p>}</div>)}</div>
</div></section>

const Footer = () => <footer><div className="wrap"><div><strong style={{ fontFamily: 'Manrope', fontSize: '1.3rem' }}>Sakthivel V.</strong><br />Java Full Stack Developer | AI Integration Enthusiast</div>
  <div className="row" style={{ margin: 0 }}><a href={GH} target="_blank" rel="noreferrer">GitHub</a><a href={LI} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${MAIL}`}>Email</a>
    <a className="btn" style={{ color: 'var(--ivory)', borderColor: 'var(--ivory)' }} href="#home" aria-label="Back to top"><ArrowUp size={16} />Top</a></div>
  <small>© {new Date().getFullYear()} Sakthivel V.</small></div></footer>

export default function App() {
  return <MotionConfig reducedMotion="user"><Nav /><main><Hero /><About /><Skills /><Projects /><Education /><Contact /></main><Footer /></MotionConfig>
}

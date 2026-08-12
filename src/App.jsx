import { useEffect, useState } from 'react'
import Background from './components/Background'
import ThemeToggle from './components/ThemeToggle'
import Terminal from './components/Terminal'
import {
  profile,
  skills,
  experience,
  education,
  projects,
  certifications,
} from './data/resume'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Background theme={theme} />

      <nav className="nav">
        <div className="nav-inner">
          <span className="mono" style={{ fontWeight: 700 }}>~/steve-oko</span>
          <ul className="nav-links">
            <li><a href="#work">work</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>

      <main>
        <section className="section" style={{ paddingTop: 72 }}>
          <div className="wrap grid-2" style={{ alignItems: 'center', gap: 48 }}>
            <div>
              <p className="eyebrow">available for full-stack / cloud roles</p>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)' }}>{profile.name}</h1>
              <p className="mono" style={{ color: 'var(--accent)', marginTop: 8, fontSize: '1.05rem' }}>
                {profile.title}
              </p>
              <p style={{ marginTop: 20, maxWidth: 480 }}>{profile.summary}</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                <a className="btn btn-primary" href={profile.resumeFile} download="resume.pdf">↓ download résumé</a>
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer">github</a>
                <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>
              </div>
            </div>
            <Terminal />
          </div>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <p className="eyebrow">selected work</p>
            <h2>Projects</h2>
            <div className="grid-3">
              {projects.map((p) => (
                <div className="card" key={p.title}>
                  {p.featured && <p className="eyebrow" style={{ marginBottom: 8 }}>flagship</p>}
                  <h3 style={{ fontSize: '1rem', marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: 14 }}>{p.description}</p>
                  <div>{p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                    {p.github && <a className="btn" style={{ padding: '6px 12px', fontSize: '0.75rem' }} href={p.github} target="_blank" rel="noreferrer">code</a>}
                    {p.live && <a className="btn" style={{ padding: '6px 12px', fontSize: '0.75rem' }} href={p.live} target="_blank" rel="noreferrer">live</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="wrap">
            <p className="eyebrow">toolbox</p>
            <h2>Skills</h2>
            <div className="grid-2">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="mono" style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: 10 }}>
                    {group.category}
                  </p>
                  <div>{group.items.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap">
            <p className="eyebrow">where I've worked</p>
            <h2>Experience</h2>
            {experience.map((e) => (
              <div className="card" key={e.company} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                  <h3 style={{ fontSize: '1rem' }}>{e.role}</h3>
                  <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{e.period}</span>
                </div>
                <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--accent)', margin: '6px 0 12px' }}>
                  {e.company} — {e.location}
                </p>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {e.points.map((pt) => <li key={pt} style={{ marginBottom: 6 }}>{pt}</li>)}
                </ul>
              </div>
            ))}

            <div className="card" style={{ marginTop: 24 }}>
              <p className="eyebrow" style={{ marginBottom: 8 }}>education</p>
              <h3 style={{ fontSize: '1rem' }}>{education.school}</h3>
              <p style={{ margin: '6px 0 0' }}>{education.degree} · {education.specialization}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="eyebrow">credentials</p>
            <h2>Certifications</h2>
            <ul style={{ paddingLeft: 18, columns: 2, columnGap: 32 }}>
              {certifications.map((c) => (
                <li key={c} style={{ marginBottom: 10, breakInside: 'avoid' }}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap" style={{ textAlign: 'center' }}>
            <p className="eyebrow">get in touch</p>
            <h2>Let's build something.</h2>
            <p style={{ maxWidth: 480, margin: '0 auto 28px' }}>
              Open to full-stack and cloud engineering roles, internships, and collaborations.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>email me</a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">github</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          built by {profile.name} · {new Date().getFullYear()}
        </div>
      </footer>
    </>
  )
}

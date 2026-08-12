import { useEffect, useState } from 'react'
import { terminalLines } from '../data/resume'

// Types out each command/output pair in sequence, then leaves a blinking cursor.
export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState('cmd') // 'cmd' | 'out' | 'done'
  const [rendered, setRendered] = useState([])

  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      setPhase('done')
      return
    }
    const current = terminalLines[lineIndex]
    const target = phase === 'cmd' ? current.cmd : current.out

    if (charIndex < target.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), phase === 'cmd' ? 45 : 12)
      return () => clearTimeout(t)
    }

    if (phase === 'cmd') {
      const t = setTimeout(() => {
        setPhase('out')
        setCharIndex(0)
      }, 250)
      return () => clearTimeout(t)
    }

    // finished this line's output
    const t = setTimeout(() => {
      setRendered((r) => [...r, current])
      setLineIndex((i) => i + 1)
      setPhase('cmd')
      setCharIndex(0)
    }, 400)
    return () => clearTimeout(t)
  }, [charIndex, phase, lineIndex])

  const current = terminalLines[lineIndex]

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
      </div>
      <div className="terminal-body">
        {rendered.map((l, i) => (
          <div key={i}>
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>{l.cmd}
            </div>
            <div className="terminal-line terminal-out">{l.out}</div>
          </div>
        ))}

        {current && (
          <div>
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              {phase === 'cmd' ? current.cmd.slice(0, charIndex) : current.cmd}
              {phase === 'cmd' && <span className="cursor" />}
            </div>
            {phase === 'out' && (
              <div className="terminal-line terminal-out">
                {current.out.slice(0, charIndex)}
                <span className="cursor" />
              </div>
            )}
          </div>
        )}

        {phase === 'done' && (
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  )
}

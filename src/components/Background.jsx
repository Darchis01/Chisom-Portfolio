import { useEffect, useRef } from 'react'

// Ambient, low-key node network that drifts slowly and nudges away from
// the cursor. Deliberately restrained — this sits behind readable text.
export default function Background({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let width, height
    let nodes = []
    const mouse = { x: -9999, y: -9999 }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      const count = Math.min(70, Math.floor((width * height) / 22000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const accent = theme === 'dark' ? '110, 231, 201' : '15, 157, 120'
      const line = theme === 'dark' ? '30, 39, 51' : '226, 229, 234'

      for (const n of nodes) {
        if (!prefersReduced) {
          n.x += n.vx
          n.y += n.vy
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            n.x += (dx / dist) * 0.6
            n.y += (dy / dist) * 0.6
          }
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 140) {
            ctx.strokeStyle = `rgba(${line}, ${1 - d / 140})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${accent}, 0.6)`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    function onMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
}

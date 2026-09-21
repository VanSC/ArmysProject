import { useMemo } from 'react'
import './HeartsRain.css'

const TONOS = ['#D7263D', '#F5354F', '#A50F27', '#FF6B7E', '#E84A5F']

/**
 * Lluvia de corazones rojos sobre toda la pantalla.
 * Cada corazón recibe posición, tamaño, duración y retraso
 * al azar mediante variables CSS, así la animación vive en CSS
 * y no cuesta re-renders.
 */
export default function HeartsRain({ count = 26, front = false }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 7 + Math.random() * 14          // 7–21 px
        return {
          id: i,
          x: `${Math.random() * 100}%`,
          s: `${size.toFixed(1)}px`,
          c: TONOS[Math.floor(Math.random() * TONOS.length)],
          op: (0.38 + Math.random() * 0.42).toFixed(2),
          blur: `${(size * 0.9).toFixed(1)}px`,
          dur: `${(7 + Math.random() * 9).toFixed(2)}s`,
          sway: `${(2 + Math.random() * 2.6).toFixed(2)}s`,
          delay: `${(-Math.random() * 14).toFixed(2)}s`,
        }
      }),
    [count]
  )

  return (
    <div className={`hearts${front ? ' hearts--front' : ''}`} aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="hearts__fall"
          style={{ '--x': h.x, '--dur': h.dur, '--delay': h.delay }}
        >
          <span className="hearts__sway" style={{ '--sway': h.sway, '--delay': h.delay }}>
            <span
              className="heart"
              style={{ '--s': h.s, '--c': h.c, '--op': h.op, '--blur': h.blur }}
            />
          </span>
        </span>
      ))}
    </div>
  )
}

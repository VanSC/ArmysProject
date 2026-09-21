import { useMemo } from 'react'
import './MascotsRain.css'

const MASCOTAS = ['chimmy', 'cooky', 'koya', 'mang', 'rj', 'shooky', 'tata', 'van']

// 5 tamaños fijos por mascota (px) · de más chico a más grande
const TAMANOS = [16, 22, 34, 52, 74]

/**
 * Lluvia de mascotas Perú (BT21) sobre toda la pantalla, en reemplazo
 * de los corazones. Cada instancia recibe una mascota y uno de los 5
 * tamaños al azar; el resto (duración, retraso) se resuelve con
 * variables CSS para que la animación viva en CSS.
 *
 * La posición horizontal se reparte en franjas iguales (una por
 * instancia) con algo de variación al azar dentro de cada franja,
 * así la lluvia cubre todo el ancho de la pantalla y no se agrupa
 * de un solo lado por casualidad.
 */
export default function MascotsRain({ count = 16, front = false }) {
  const items = useMemo(
    () => {
      const franja = 100 / count
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        mascota: MASCOTAS[Math.floor(Math.random() * MASCOTAS.length)],
        size: TAMANOS[Math.floor(Math.random() * TAMANOS.length)],
        x: `${(franja * i + Math.random() * franja).toFixed(2)}%`,
        op: (0.55 + Math.random() * 0.35).toFixed(2),
        dur: `${(10 + Math.random() * 10).toFixed(2)}s`,
        sway: `${(2.4 + Math.random() * 2.6).toFixed(2)}s`,
        delay: `${(-Math.random() * 18).toFixed(2)}s`,
      }))
    },
    [count]
  )

  return (
    <div className={`mascots${front ? ' mascots--front' : ''}`} aria-hidden="true">
      {items.map((m) => (
        <span
          key={m.id}
          className="mascots__fall"
          style={{ '--x': m.x, '--dur': m.dur, '--delay': m.delay }}
        >
          <span className="mascots__sway" style={{ '--sway': m.sway, '--delay': m.delay }}>
            <img
              className="mascots__img"
              src={`/mascotas/${m.mascota}.png`}
              alt=""
              style={{ '--s': `${m.size}px`, '--op': m.op }}
            />
          </span>
        </span>
      ))}
    </div>
  )
}

import { useState } from 'react'
import './Logo.css'

/**
 * Logo de Arirang.
 * Pon tu archivo en  /public/arirang-logo.png  (o .svg y cambia LOGO_SRC).
 * Si el archivo no existe todavía, se muestra un lockup de texto
 * para que la pantalla nunca quede rota.
 */
const LOGO_SRC = '/arirang-logo.png'

export default function Logo({ size = 'md', className = '' }) {
  const [ok, setOk] = useState(true)

  return (
    <span className={`logo logo--${size} ${className}`}>
      {ok ? (
        <img
          className="logo__img"
          src={LOGO_SRC}
          alt="Arirang"
          onError={() => setOk(false)}
        />
      ) : (
        <span className="logo__text">
          <span className="logo__heart" aria-hidden="true" />
          ARIRANG
        </span>
      )}
    </span>
  )
}

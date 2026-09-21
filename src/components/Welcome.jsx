import Logo from './Logo'
import './Welcome.css'

export default function Welcome({ name, onNameChange, onStart }) {
  const ready = Boolean(name.trim())

  return (
    <main className="screen welcome">
      <div className="screen__panel">
        <Logo size="lg" className="welcome__logo" />

        <div className="ticket-wrap">
          <section className="surface welcome__card">
            <p className="welcome__eyebrow">Espacio de ARMY para ARMYs</p>

            <h1 className="welcome__title">
              Toda ARMY<br />tiene <em>su</em> canción
            </h1>

            <p className="welcome__lede">
              Responde 4 preguntas y llévate tu photocard con la canción que te representa.
            </p>

            <label className="welcome__field">
              <span className="welcome__field-label">¿Cómo te llamas?</span>
              <input
                className="welcome__input"
                type="text"
                maxLength={18}
                placeholder="Escribe tu nombre"
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onStart()}
                autoComplete="given-name"
              />
            </label>

            <img
              className="welcome__army"
              src="/army-silhouette.png"
              alt="ARMY"
            />

            <p className="welcome__question">¿Cuál es tu canción de BTS?</p>

            <button className="btn btn--stickerimg welcome__btn" onClick={onStart} disabled={!ready}>
              <img className="btn__stickerimg" src="/sticker-iniciar.png" alt="Iniciar" />
            </button>
          </section>
          <span className="ticket-star ticket-star--black ticket-star--lg ticket-star--tl" aria-hidden="true" />
          <span className="ticket-star ticket-star--red ticket-star--xl ticket-star--tr" aria-hidden="true" />
          <span className="ticket-star ticket-star--red ticket-star--sm ticket-star--bl" aria-hidden="true" />
          <span className="ticket-star ticket-star--black ticket-star--md ticket-star--br" aria-hidden="true" />
        </div>
      </div>
    </main>
  )
}

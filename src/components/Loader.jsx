import Logo from './Logo'
import './Loader.css'

export default function Loader({ duration = 2400 }) {
  return (
    <main className="screen loader" role="status" aria-live="polite">
      <div className="screen__panel">
        <div className="ticket-wrap">
          <section className="surface loader__card">
            <Logo size="md" className="loader__logo" />

            <div className="loader__disc" aria-hidden="true">
              <span className="loader__ring" />
              <span className="loader__ring loader__ring--2" />
              <span className="loader__heart" />
            </div>

            <h2 className="loader__title">Estamos cargando tu canción</h2>
            <p className="loader__sub">Buscando en el catálogo lo que va contigo…</p>

            <div className="loader__bar" aria-hidden="true">
              <span style={{ animationDuration: `${duration}ms` }} />
            </div>
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

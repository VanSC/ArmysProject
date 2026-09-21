import './PeekToggle.css'

export default function PeekToggle({ hidden, onToggle }) {
  return (
    <button
      type="button"
      className="peek-toggle"
      onClick={onToggle}
      aria-label={hidden ? 'Mostrar tarjeta' : 'Esconder tarjeta'}
      aria-pressed={hidden}
    >
      {hidden ? (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 3l18 18M10.6 5.2A10.9 10.9 0 0 1 12 5c5.5 0 9.5 4 11 7-.6 1.2-1.7 2.7-3.2 4M6.2 6.2C4 7.7 2.6 9.6 1 12c1.5 3 5.5 7 11 7 1.3 0 2.5-.2 3.6-.6"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          />
          <path
            d="M9.5 10a3.2 3.2 0 0 0 4.5 4.5"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M1 12c1.5-3 5.5-7 11-7s9.5 4 11 7c-1.5 3-5.5 7-11 7S2.5 15 1 12Z"
            stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      )}
    </button>
  )
}

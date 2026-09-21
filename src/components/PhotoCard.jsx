import { useEffect, useRef, useState } from 'react'
import { downloadCard } from '../lib/downloadCard'
import { findOption } from '../data/questions'
import { spotifyUrl, ytMusicUrl } from '../lib/spotify'
import './PhotoCard.css'

export default function PhotoCard({ name, answers = {}, song, design, onRestart }) {
  const cardRef = useRef(null)
  const [src, setSrc] = useState(design.src)
  const [imgOk, setImgOk] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  // si cambia el diseño (volver a jugar), reinicia la cadena de imágenes
  useEffect(() => {
    setSrc(design.src)
    setImgOk(true)
  }, [design.src])

  const biasLabels = (Array.isArray(answers.bias) ? answers.bias : answers.bias ? [answers.bias] : [])
    .map((b) => findOption('bias', b)?.label)
    .filter(Boolean)
  const bias = biasLabels.length
    ? {
        label:
          biasLabels.length === 1
            ? biasLabels[0]
            : `${biasLabels.slice(0, -1).join(', ')} y ${biasLabels[biasLabels.length - 1]}`,
      }
    : null
  const tipos = Array.isArray(answers.tipo) ? answers.tipo : answers.tipo ? [answers.tipo] : []
  const tipo = findOption('tipo', tipos[0])

  const acento = tipo?.hex || '#D7263D'

  /** Si falla la foto del bias, prueba la alternativa del pool. */
  const handleImgError = () => {
    if (design.alt && src !== design.alt) setSrc(design.alt)
    else setImgOk(false)
  }

  const handleDownload = async () => {
    setSaving(true)
    setError('')
    try {
      await downloadCard(cardRef.current, name)
    } catch {
      setError('No se pudo generar la imagen. Intenta de nuevo.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="screen result">
      <div className="screen__panel">
        <p className="result__eyebrow">Tu canción es</p>
        <h1 className="result__song">{song.title}</h1>

        <div
          className="card"
          ref={cardRef}
          style={{ background: design.fallback, color: design.textColor, '--acento': acento }}
        >
          {imgOk && (
            <img className="card__bg" src={src} alt="" onError={handleImgError} />
          )}

          <div className="card__veil" aria-hidden="true" />
          <span className="card__acento" aria-hidden="true" />

          <div className="card__body">
            <span className="card__name">{name}</span>

            <h2 className="card__song">{song.title}</h2>
            <span className="card__album">{song.album} · {song.year}</span>

            <ul className="card__meta">
              {bias && (
                <li>
                  <span className="card__meta-k">Bias</span>
                  <span className="card__meta-v">{bias.label}</span>
                </li>
              )}
            </ul>
          </div>

          <span className="card__mark">ARIRANG · BTS PERÚ</span>
        </div>

        <div className="result__actions">
          <button
            className="btn btn--stickerimg result__download"
            onClick={handleDownload}
            disabled={saving}
            aria-label={saving ? 'Generando…' : 'Descargar photocard'}
          >
            <img className="btn__stickerimg" src="/sticker-descargar.png" alt="" />
            {saving && <span className="btn__stickerimg-loading">Generando…</span>}
          </button>
          <button
            className="btn btn--stickerimg result__restart"
            onClick={onRestart}
            aria-label="Volver a jugar"
          >
            <img className="btn__stickerimg" src="/sticker-reiniciar.png" alt="" />
          </button>
        </div>

        <div className="result__links">
            <a
              className="btn result__spotify"
              href={spotifyUrl(song)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="result__spotify-icon"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
                <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
              </svg>
              Ir a Spotify
            </a>
            <a
              className="btn result__spotify result__ytmusic"
              href={ytMusicUrl(song)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="result__spotify-icon"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
                <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
              </svg>
              Ir a YouTube Music
            </a>
        </div>

        {error && <p className="result__error">{error}</p>}
      </div>
    </main>
  )
}

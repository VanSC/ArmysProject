import { useState } from 'react'
import { QUESTIONS, MEMBER_LABELS, MEMBER_ORDER } from '../data/questions'
import Logo from './Logo'
import './QuizCarousel.css'

const NEEDS_BUTTON = new Set(['text'])

/** ¿Esta pregunta necesita el botón "Siguiente"? */
const needsButton = (q) => NEEDS_BUTTON.has(q.type) || Boolean(q.multiple)

export default function QuizCarousel({ onFinish, onExit }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [albumFilter, setAlbumFilter] = useState('')
  const [activeMember, setActiveMember] = useState(MEMBER_ORDER[0])

  const question = QUESTIONS[index]
  const isLast = index === QUESTIONS.length - 1
  const current = answers[question.id]
  const canAdvance = Array.isArray(current)
    ? current.length > 0
    : Boolean(typeof current === 'string' ? current.trim() : current)

  const commit = (next) => {
    if (isLast) onFinish(next)
    else setIndex((i) => i + 1)
  }

  const choose = (value) => {
    const next = { ...answers, [question.id]: value }
    setAnswers(next)
    window.setTimeout(() => commit(next), 240)
  }

  /** Marca o desmarca una opción en las preguntas de varias respuestas. */
  const toggle = (value) => {
    const actual = Array.isArray(answers[question.id]) ? answers[question.id] : []
    const exclusiva = (v) => question.options.find((o) => o.value === v)?.exclusive
    let next
    if (actual.includes(value)) {
      next = actual.filter((v) => v !== value)
    } else if (exclusiva(value)) {
      next = [value] // "No pude conseguir tickets" reemplaza a los días
    } else {
      next = [...actual.filter((v) => !exclusiva(v)), value]
    }
    setAnswers((a) => ({ ...a, [question.id]: next }))
  }

  const back = () => (index === 0 ? onExit() : setIndex((i) => i - 1))

  const nextStep = () => {
    if (!canAdvance) return
    const valor = Array.isArray(current) ? current : String(current).trim()
    commit({ ...answers, [question.id]: valor })
  }

  /** Álbumes: tabs por integrante (+ BTS) y filtro por nombre/año dentro de la categoría activa. */
  const renderAlbumPicker = (q) => {
    const marcadas = Array.isArray(answers[q.id]) ? answers[q.id] : []
    const filtro = albumFilter.trim().toLowerCase()

    const coincide = (opt) => {
      if (!filtro) return true
      return (
        opt.label.toLowerCase().includes(filtro) ||
        (opt.caption || '').toLowerCase().includes(filtro)
      )
    }

    const deLaCategoria = q.options.filter((o) => o.member === activeMember)
    const visibles = deLaCategoria.filter(coincide)

    return (
      <div className="quiz__album">
        <div className="quiz__tabs" role="tablist" aria-label="Categoría de álbum">
          {MEMBER_ORDER.map((m) => {
            const count = q.options.reduce(
              (n, o) => (o.member === m && marcadas.includes(o.value) ? n + 1 : n),
              0
            )
            return (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={activeMember === m}
                className={`quiz__tab${activeMember === m ? ' is-active' : ''}`}
                onClick={() => setActiveMember(m)}
              >
                {MEMBER_LABELS[m]}
                {count > 0 && <span className="quiz__tab-count">{count}</span>}
              </button>
            )
          })}
        </div>

        <label className="quiz__filter">
          <svg className="quiz__filter-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            className="quiz__filter-input"
            placeholder={`Busca en ${MEMBER_LABELS[activeMember]}`}
            value={albumFilter}
            onChange={(e) => setAlbumFilter(e.target.value)}
          />
          {albumFilter && (
            <button
              type="button"
              className="quiz__filter-clear"
              onClick={() => setAlbumFilter('')}
              aria-label="Borrar búsqueda"
            >
              ×
            </button>
          )}
        </label>

        {visibles.length === 0 && (
          <p className="quiz__album-empty">No hay álbumes que coincidan con tu búsqueda.</p>
        )}

        <div className="quiz__options quiz__options--2">
          {visibles.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`quiz__option${marcadas.includes(opt.value) ? ' is-active' : ''}`}
              aria-pressed={marcadas.includes(opt.value)}
              onClick={() => toggle(opt.value)}
            >
              <span className="quiz__check" aria-hidden="true" />
              <span className="quiz__option-label">{opt.label}</span>
              {opt.caption && <span className="quiz__option-caption">{opt.caption}</span>}
            </button>
          ))}
        </div>
      </div>
    )
  }

  const renderInput = (q) => {
    const value = answers[q.id] || ''

    if (q.type === 'album') {
      return renderAlbumPicker(q)
    }

    if (q.type === 'chips') {
      return (
        <div className="quiz__chips">
          {q.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`quiz__chip${value === opt.value ? ' is-active' : ''}`}
              onClick={() => choose(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )
    }

    const marcadas = Array.isArray(value) ? value : []
    const activa = (v) => (q.multiple ? marcadas.includes(v) : value === v)

    return (
      <div className={`quiz__options quiz__options--${q.cols || 2}`}>
        {q.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`quiz__option${activa(opt.value) ? ' is-active' : ''}`}
            aria-pressed={q.multiple ? activa(opt.value) : undefined}
            onClick={() => (q.multiple ? toggle(opt.value) : choose(opt.value))}
          >
            {q.multiple && <span className="quiz__check" aria-hidden="true" />}
            <span className="quiz__option-label">{opt.label}</span>
            {opt.caption && <span className="quiz__option-caption">{opt.caption}</span>}
          </button>
        ))}
      </div>
    )
  }

  return (
    <main className="screen quiz">
      <div className="screen__panel quiz__panel">
        <header className="quiz__head">
          <button className="quiz__back" onClick={back} aria-label="Anterior">
            <span aria-hidden="true">←</span>
          </button>
          <Logo size="sm" className="quiz__logo" />
          <span className="quiz__count">
            {index + 1}<span className="quiz__count-sep">/</span>{QUESTIONS.length}
          </span>
        </header>

        <div className="quiz__progress" aria-hidden="true">
          <span
            className="quiz__bar"
            style={{ width: `${((index + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>

        <div className="quiz__viewport">
          <section className="quiz__slide" key={question.id}>
            <div className="ticket-wrap">
              <div className="surface quiz__card">
                <p className="quiz__hint">{question.hint}</p>
                <h2 className="quiz__label">{question.label}</h2>
                {renderInput(question)}
              </div>
              <span className="ticket-star ticket-star--black ticket-star--lg ticket-star--tl" aria-hidden="true" />
              <span className="ticket-star ticket-star--red ticket-star--xl ticket-star--tr" aria-hidden="true" />
              <span className="ticket-star ticket-star--red ticket-star--sm ticket-star--bl" aria-hidden="true" />
              <span className="ticket-star ticket-star--black ticket-star--md ticket-star--br" aria-hidden="true" />
            </div>
          </section>
        </div>

        {needsButton(question) && (
          <button className="btn btn--stickerimg quiz__next" onClick={nextStep} disabled={!canAdvance}>
            <img className="btn__stickerimg" src="/sticker-siguiente.png" alt="Siguiente" />
          </button>
        )}
      </div>
    </main>
  )
}

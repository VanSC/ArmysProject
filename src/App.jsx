import { useEffect, useState } from 'react'
import Welcome from './components/Welcome'
import QuizCarousel from './components/QuizCarousel'
import Loader from './components/Loader'
import PhotoCard from './components/PhotoCard'
import MascotsRain from './components/MascotsRain'
import Footer from './components/Footer'
import Ship from './components/Ship'
import ThemeToggle from './components/ThemeToggle'
import PeekToggle from './components/PeekToggle'
import { matchSong } from './lib/matchSong'
import './styles/app.css'

const LOADER_MS = 2400

export default function App() {
  const [stage, setStage] = useState('welcome') // welcome | quiz | loading | result
  const [name, setName] = useState('')
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [cardsHidden, setCardsHidden] = useState(false)
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('bts-photocard-theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
    try {
      localStorage.setItem('bts-photocard-theme', dark ? 'dark' : 'light')
    } catch {
      // localStorage no disponible: no pasa nada, sigue funcionando en memoria
    }
  }, [dark])

  useEffect(() => {
    document.body.classList.toggle('hide-cards', cardsHidden)
  }, [cardsHidden])

  // cada pantalla nueva arranca con la tarjeta visible
  useEffect(() => {
    setCardsHidden(false)
  }, [stage])

  const start = () => {
    if (!name.trim()) return
    setName(name.trim())
    setStage('quiz')
  }

  const finish = (finalAnswers) => {
    setAnswers(finalAnswers)
    setResult(matchSong(finalAnswers))
    setStage('loading')
    window.setTimeout(() => setStage('result'), LOADER_MS)
  }

  const backToWelcome = () => setStage('welcome')

  const restart = () => {
    setAnswers({})
    setResult(null)
    setName('')
    setStage('welcome')
  }

  return (
    <div className="app">
      <ThemeToggle dark={dark} onToggle={() => setDark((d) => !d)} />
      <PeekToggle hidden={cardsHidden} onToggle={() => setCardsHidden((h) => !h)} />

      <div className="app__galaxy" aria-hidden="true" />
      <img
        className="app__constellation app__constellation--light"
        src="/constellation-red.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="app__constellation app__constellation--dark"
        src="/constellation-white.png"
        alt=""
        aria-hidden="true"
      />
      <div className="app__glow" aria-hidden="true" />
      <MascotsRain count={16} />

      {stage === 'welcome' && (
        <Welcome name={name} onNameChange={setName} onStart={start} />
      )}

      {stage === 'quiz' && <QuizCarousel onFinish={finish} onExit={backToWelcome} />}

      {stage === 'loading' && <Loader duration={LOADER_MS} />}

      {stage === 'result' && result && (
        <PhotoCard
          name={name}
          answers={answers}
          song={result.song}
          design={result.design}
          onRestart={restart}
        />
      )}

      <Footer />

      <MascotsRain count={6} front />

      <Ship />
    </div>
  )
}

import { SONGS } from '../data/songs'
import { pickDesign } from '../data/designs'
import { deriveTraits, aLista } from './traits'
import { pickWeighted } from './random'

// Cuánto más probable es una canción por cada punto extra de match.
const PESO_POR_PUNTO = 2

// Puntos por coincidencia. El TIPO de ARMY (mood + energía) pesa más
// que el bias; el bias ya no filtra el catálogo, solo suma un poco.
const PUNTOS = {
  moodTipo: 2,
  energiaTipo: 2,
  momento: 1,
  moodBias: 1,
  soloDelBias: 2,
  anio: 1,
}
const TOTAL = Object.values(PUNTOS).reduce((a, b) => a + b, 0)

/**
 * Puntúa TODO el catálogo (no solo las canciones del bias) y sortea
 * una canción ponderada por puntaje: a mayor match, más probabilidad,
 * pero nunca es un ganador fijo.
 *
 * La foto de la card prioriza al bias, sin ser siempre (ver data/designs.js).
 */
export function matchSong(answers = {}) {
  const traits = deriveTraits(answers)
  const biases = aLista(answers.bias).filter((b) => b !== 'ot7')
  const anio = Number(answers.anio)

  const scored = SONGS.map((song) => {
    const t = song.traits || {}
    let score = 0
    // varios tipos de ARMY: cada uno aporta su parte de los puntos
    score += PUNTOS.moodTipo * (traits.moods[t.mood] || 0)
    score += PUNTOS.energiaTipo * (traits.energias[t.energia] || 0)
    if (traits.momento && t.momento === traits.momento) score += PUNTOS.momento
    score += PUNTOS.moodBias * (traits.moodsBias[t.mood] || 0)
    if (biases.includes(song.artist)) score += PUNTOS.soloDelBias
    if (Number.isFinite(anio) && song.year >= anio) score += PUNTOS.anio
    return { song, score }
  })

  const puntaje = new Map(scored.map((s) => [s.song, s.score]))
  const song = pickWeighted(
    scored.map((s) => s.song),
    (s) => PESO_POR_PUNTO ** puntaje.get(s)
  )

  return {
    song,
    design: pickDesign(answers.bias),
    traits,
    score: puntaje.get(song),
    total: TOTAL,
  }
}

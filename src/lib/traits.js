// ============================================================
//  Traduce las respuestas de las 6 preguntas a los traits que
//  usa el catálogo de canciones (songs.js).
//
//  tipo   → mood + energia (pesa 2 puntos cada uno)
//  album  → momento        (1 punto)
//  bias   → mood de apoyo  (1 punto) + 1 punto extra a sus solos
//
//  El año no puntúa por tipo/mood: suma un punto extra a las
//  catálogo (ver matchSong.js).
// ============================================================

/** Normaliza una respuesta (string o lista) a lista. */
export const aLista = (v) => (Array.isArray(v) ? v : v ? [v] : [])

export const BIAS_MOOD = {
  rm: 'intenso',
  jin: 'nostalgico',
  suga: 'intenso',
  jhope: 'feliz',
  jimin: 'tranquilo',
  v: 'nostalgico',
  jungkook: 'feliz',
  ot7: 'tranquilo',
}

export const ALBUM_MOMENTO = {
  '2cool4skool': 'noche',
  orul82: 'tarde',
  'skool-luv': 'tarde',
  'dark-wild': 'noche',
  hyyh1: 'tarde',
  hyyh2: 'tarde',
  'young-forever': 'tarde',
  wings: 'noche',
  ynwa: 'manana',
  lyher: 'tarde',
  lytear: 'tarde',
  lyanswer: 'tarde',
  persona: 'manana',
  mots7: 'madrugada',
  be: 'manana',
  proof: 'madrugada',
  arirang: 'manana',

  // ---------- solistas ----------
  'rm-mixtape': 'noche',
  'rm-mono': 'madrugada',
  'rm-indigo': 'tarde',
  'rm-rpwp': 'manana',

  'jin-astronaut': 'manana',
  'jin-happy': 'tarde',
  'jin-echo': 'madrugada',

  'suga-agustd': 'noche',
  'suga-d2': 'noche',
  'suga-dday': 'madrugada',

  'jhope-hopeworld': 'manana',
  'jhope-jitb': 'noche',
  'jhope-hots': 'tarde',

  'jimin-face': 'madrugada',
  'jimin-muse': 'tarde',

  'v-layover': 'tarde',

  'jk-golden': 'manana',
}

/** Cada tipo de ARMY aporta mood + energía (es lo que más pesa en el match). */
export const TIPO_TRAITS = {
  soft:      { mood: 'tranquilo',  energia: 'baja' },
  hype:      { mood: 'feliz',      energia: 'alta' },
  dancer:    { mood: 'intenso',    energia: 'alta' },
  poeta:     { mood: 'nostalgico', energia: 'baja' },
  coleccion: { mood: 'tranquilo',  energia: 'media' },
  lider:     { mood: 'intenso',    energia: 'media' },
  dayone:    { mood: 'nostalgico', energia: 'media' },
  streamer:  { mood: 'feliz',      energia: 'media' },
  creativa:  { mood: 'feliz',      energia: 'baja' },
  multi:     { mood: 'tranquilo',  energia: 'alta' },
}

/** De varios álbumes elegidos, se queda con el momento más repetido. */
function momentoDeAlbumes(valores) {
  const lista = Array.isArray(valores) ? valores : valores ? [valores] : []
  if (lista.length === 0) return null

  const conteo = {}
  for (const v of lista) {
    const m = ALBUM_MOMENTO[v]
    if (m) conteo[m] = (conteo[m] || 0) + 1
  }
  const entradas = Object.entries(conteo)
  if (entradas.length === 0) return null

  entradas.sort((a, b) => b[1] - a[1])
  return entradas[0][0]
}

/** Mood de apoyo del/los bias: mapa { mood: proporción } que suma 1. */
function repartoBias(bias) {
  const lista = aLista(bias).filter((b) => BIAS_MOOD[b])
  const out = {}
  for (const b of lista) out[BIAS_MOOD[b]] = (out[BIAS_MOOD[b]] || 0) + 1 / lista.length
  return out
}

/**
 * Traits derivados de las respuestas.
 *  · moods / energias → de los TIPOS de ARMY elegidos (pueden ser varios).
 *      Cada uno es un mapa { valor: proporción } que suma 1
 *      (con 2 tipos, cada uno aporta la mitad).
 *  · momento          → de los álbumes favoritos
 *  · moodsBias        → del/los bias (apoyo, pesa menos)
 */
export function deriveTraits(answers = {}) {
  const lista = aLista(answers.tipo)
  const tipos = lista.map((t) => TIPO_TRAITS[t]).filter(Boolean)

  const reparto = (key) => {
    const out = {}
    for (const t of tipos) out[t[key]] = (out[t[key]] || 0) + 1 / tipos.length
    return out
  }

  return {
    moods: reparto('mood'),
    energias: reparto('energia'),
    momento: momentoDeAlbumes(answers.album),
    moodsBias: repartoBias(answers.bias),
  }
}

export const TRAIT_KEYS = ['mood', 'energia', 'momento']

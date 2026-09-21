// ============================================================
//  PREGUNTAS DEL QUIZ  ·  4 preguntas
//
//  1. Bias                       (choice múltiple · los 7 + OT7, que es exclusivo)
//  2. Álbumes favoritos          (album · grupo + solistas, multiselección + filtro)
//  3. Año en que conociste a BTS (chips · 2013–2026)
//  4. Tipo de ARMY               (choice múltiple · 10 opciones · pesa más que el bias en la canción)
//
//  El nombre se pide en el banner de bienvenida, no aquí.
//  El mapeo de respuestas → traits de canción vive en
//  src/lib/traits.js
// ============================================================

export const ANIOS = Array.from({ length: 2026 - 2013 + 1 }, (_, i) => String(2013 + i))

export const BIAS = [
  { value: 'rm',        label: 'RM',        caption: 'Kim Namjoon' },
  { value: 'jin',       label: 'Jin',       caption: 'Kim Seokjin' },
  { value: 'suga',      label: 'SUGA',      caption: 'Min Yoongi' },
  { value: 'jhope',     label: 'j-hope',    caption: 'Jung Hoseok' },
  { value: 'jimin',     label: 'Jimin',     caption: 'Park Jimin' },
  { value: 'v',         label: 'V',         caption: 'Kim Taehyung' },
  { value: 'jungkook',  label: 'Jung Kook', caption: 'Jeon Jungkook' },
  { value: 'ot7',       label: 'OT7',       caption: 'Los 7, sin dudar', exclusive: true },
]

/** Orden y etiquetas de las categorías (grupo + cada integrante). */
export const MEMBER_LABELS = {
  bts:      'BTS (grupo)',
  rm:       'RM',
  jin:      'Jin',
  suga:     'SUGA',
  jhope:    'j-hope',
  jimin:    'Jimin',
  v:        'V',
  jungkook: 'Jung Kook',
}
export const MEMBER_ORDER = ['bts', 'rm', 'jin', 'suga', 'jhope', 'jimin', 'v', 'jungkook']

export const ALBUMES = [
  // ---------- discografía del grupo ----------
  { value: '2cool4skool',   label: '2 Cool 4 Skool',    caption: '2013', member: 'bts' },
  { value: 'orul82',        label: 'O!RUL8,2?',         caption: '2013', member: 'bts' },
  { value: 'skool-luv',     label: 'Skool Luv Affair',  caption: '2014', member: 'bts' },
  { value: 'dark-wild',     label: 'Dark & Wild',       caption: '2014', member: 'bts' },
  { value: 'hyyh1',         label: 'HYYH Pt. 1',        caption: 'The Most Beautiful Moment in Life · 2015', member: 'bts' },
  { value: 'hyyh2',         label: 'HYYH Pt. 2',        caption: 'The Most Beautiful Moment in Life · 2015', member: 'bts' },
  { value: 'young-forever', label: 'Young Forever',     caption: 'HYYH Special · 2016', member: 'bts' },
  { value: 'wings',         label: 'Wings',             caption: '2016', member: 'bts' },
  { value: 'ynwa',          label: 'You Never Walk Alone', caption: '2017', member: 'bts' },
  { value: 'lyher',         label: 'Love Yourself: Her', caption: '2017', member: 'bts' },
  { value: 'lytear',        label: 'Love Yourself: Tear', caption: '2018', member: 'bts' },
  { value: 'lyanswer',      label: 'Love Yourself: Answer', caption: '2018', member: 'bts' },
  { value: 'persona',       label: 'Map of the Soul: Persona', caption: '2019', member: 'bts' },
  { value: 'mots7',         label: 'Map of the Soul: 7', caption: '2020', member: 'bts' },
  { value: 'be',            label: 'BE',                caption: '2020', member: 'bts' },
  { value: 'proof',         label: 'Proof',             caption: '2022', member: 'bts' },
  { value: 'arirang',       label: 'ARIRANG',           caption: 'Comeback · 2026', member: 'bts' },

  // ---------- RM ----------
  { value: 'rm-mixtape',    label: 'RM',                caption: 'Mixtape · 2015', member: 'rm' },
  { value: 'rm-mono',       label: 'Mono',              caption: 'Mixtape · 2018', member: 'rm' },
  { value: 'rm-indigo',     label: 'Indigo',            caption: '2022', member: 'rm' },
  { value: 'rm-rpwp',       label: 'Right Place, Wrong Person', caption: '2024', member: 'rm' },

  // ---------- Jin ----------
  { value: 'jin-astronaut', label: 'The Astronaut',     caption: '2022', member: 'jin' },
  { value: 'jin-happy',     label: 'Happy',              caption: '2024', member: 'jin' },
  { value: 'jin-echo',      label: 'Echo',               caption: '2025', member: 'jin' },

  // ---------- SUGA / Agust D ----------
  { value: 'suga-agustd',   label: 'Agust D',            caption: 'Mixtape · 2016', member: 'suga' },
  { value: 'suga-d2',       label: 'D-2',                caption: 'Mixtape · 2020', member: 'suga' },
  { value: 'suga-dday',     label: 'D-Day',              caption: '2023', member: 'suga' },

  // ---------- j-hope ----------
  { value: 'jhope-hopeworld', label: 'Hope World',       caption: 'Mixtape · 2018', member: 'jhope' },
  { value: 'jhope-jitb',    label: 'Jack In The Box',    caption: '2022', member: 'jhope' },
  { value: 'jhope-hots',    label: 'Hope on the Street Vol. 1', caption: '2024', member: 'jhope' },

  // ---------- Jimin ----------
  { value: 'jimin-face',    label: 'Face',               caption: '2023', member: 'jimin' },
  { value: 'jimin-muse',    label: 'Muse',               caption: '2024', member: 'jimin' },

  // ---------- V ----------
  { value: 'v-layover',     label: 'Layover',            caption: '2023', member: 'v' },

  // ---------- Jung Kook ----------
  { value: 'jk-golden',     label: 'Golden',             caption: '2023', member: 'jungkook' },
]

export const TIPOS = [
  { value: 'soft',     label: 'Soft ARMY',     caption: 'Baladas y llorar bonito',     hex: '#FF7FA3' },
  { value: 'hype',     label: 'Hype ARMY',     caption: 'Grito en cada comeback',      hex: '#D7263D' },
  { value: 'dancer',   label: 'Dancer',        caption: 'Me sé todas las coreos',      hex: '#F07A28' },
  { value: 'poeta',    label: 'Poeta',         caption: 'Vivo por las letras',         hex: '#8A5CD1' },
  { value: 'coleccion',label: 'Coleccionista', caption: 'Álbumes, photocards, todo',   hex: '#2F6FD0' },
  { value: 'lider',    label: 'Líder',         caption: 'Organizo a todo el fandom',   hex: '#3EA96F' },
  { value: 'dayone',   label: 'Day one',       caption: 'Aquí desde el principio',     hex: '#F2B705' },
  { value: 'streamer', label: 'Stream ARMY',   caption: 'Streams, votos y metas',      hex: '#17A2B8' },
  { value: 'creativa', label: 'Creativa',      caption: 'Edits, fanarts y fanfics',    hex: '#C2409B' },
  { value: 'multi',    label: 'Multi-stan',    caption: 'Los 7 y todos sus solos',     hex: '#5B6C8F' },
]

export const QUESTIONS = [
  {
    id: 'bias',
    type: 'choice',
    cols: 2,
    multiple: true,
    label: '¿Quién es tu bias?',
    hint: 'Puedes elegir más de uno · si son los 7, marca OT7',
    options: BIAS,
  },
  {
    id: 'album',
    type: 'album',
    multiple: true,
    label: '¿Cuáles son tus álbumes favoritos?',
    hint: 'Del grupo y de cada integrante · elige los que quieras',
    options: ALBUMES,
  },
  {
    id: 'anio',
    type: 'chips',
    label: '¿En qué año conociste a BTS?',
    hint: 'Desde el debut hasta hoy',
    options: ANIOS.map((a) => ({ value: a, label: a })),
  },
  {
    id: 'tipo',
    type: 'choice',
    cols: 2,
    multiple: true,
    label: '¿Qué tipo de Army te consideras?',
    hint: 'Puedes elegir más de uno',
    options: TIPOS,
  },
]

/** Devuelve el objeto de opción elegido para una pregunta. */
export function findOption(questionId, value) {
  const q = QUESTIONS.find((x) => x.id === questionId)
  if (!q || !q.options) return null
  return q.options.find((o) => o.value === value) || null
}

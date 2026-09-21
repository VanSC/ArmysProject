// ============================================================
//  CATÁLOGO DE CANCIONES
//
//  artist : 'bts' (grupo) | 'rm' | 'jin' | 'suga' | 'jhope'
//           | 'jimin' | 'v' | 'jungkook'
//
//  traits.mood    : nostalgico | feliz | intenso | tranquilo
//  traits.energia : baja | media | alta
//  traits.momento : manana | tarde | noche | madrugada
//
//  Cómo se usa el artist (ver src/lib/matchSong.js):
//   · Bias = un miembro → entran sus solos + las de grupo,
//     y sus solos suman un punto extra.
//   · Bias = OT7        → entran todas.
// ============================================================

import { SONGS_GRUPO } from './songsGrupo'

export const SONGS = [
  // ---------------- GRUPO ----------------
  // (vive en songsGrupo.js: discografía de BTS)
  ...SONGS_GRUPO,

  // ---------------- RM ----------------
  { id: 'wild-flower',       artist: 'rm', title: 'Wild Flower',        album: 'Indigo',                    year: 2022, traits: { mood: 'intenso',    energia: 'alta',  momento: 'noche' } },
  { id: 'still-life',        artist: 'rm', title: 'Still Life',         album: 'Indigo',                    year: 2022, traits: { mood: 'feliz',      energia: 'media', momento: 'tarde' } },
  { id: 'come-back-to-me',   artist: 'rm', title: 'Come back to me',    album: 'Right Place, Wrong Person', year: 2024, traits: { mood: 'nostalgico', energia: 'baja',  momento: 'madrugada' } },
  { id: 'lost',              artist: 'rm', title: 'LOST!',              album: 'Right Place, Wrong Person', year: 2024, traits: { mood: 'intenso',    energia: 'media', momento: 'tarde' } },
  { id: 'closer',            artist: 'rm', title: 'Closer',             album: 'Indigo',                    year: 2022, traits: { mood: 'tranquilo',  energia: 'baja',  momento: 'noche' } },

  // ---------------- JIN ----------------
  { id: 'the-astronaut',     artist: 'jin', title: 'The Astronaut',     album: 'Single',                    year: 2022, traits: { mood: 'nostalgico', energia: 'media', momento: 'noche' } },
  { id: 'super-tuna',        artist: 'jin', title: 'Super Tuna',        album: 'Single',                    year: 2021, traits: { mood: 'feliz',      energia: 'alta',  momento: 'tarde' } },
  { id: 'running-wild',      artist: 'jin', title: 'Running Wild',      album: 'Happy',                     year: 2024, traits: { mood: 'feliz',      energia: 'alta',  momento: 'manana' } },
  { id: 'ill-be-there',      artist: 'jin', title: "I'll Be There",     album: 'Happy',                     year: 2024, traits: { mood: 'feliz',      energia: 'media', momento: 'manana' } },
  { id: 'abyss',             artist: 'jin', title: 'Abyss',             album: 'Single',                    year: 2020, traits: { mood: 'nostalgico', energia: 'baja',  momento: 'madrugada' } },

  // ---------------- SUGA / AGUST D ----------------
  { id: 'daechwita',         artist: 'suga', title: 'Daechwita',        album: 'D-2',                       year: 2020, traits: { mood: 'intenso',    energia: 'alta',  momento: 'noche' } },
  { id: 'people',            artist: 'suga', title: 'People',           album: 'D-2',                       year: 2020, traits: { mood: 'tranquilo',  energia: 'baja',  momento: 'tarde' } },
  { id: 'haegeum',           artist: 'suga', title: 'Haegeum',          album: 'D-DAY',                     year: 2023, traits: { mood: 'intenso',    energia: 'alta',  momento: 'madrugada' } },
  { id: 'amygdala',          artist: 'suga', title: 'AMYGDALA',         album: 'D-DAY',                     year: 2023, traits: { mood: 'intenso',    energia: 'media', momento: 'madrugada' } },
  { id: 'snooze',            artist: 'suga', title: 'Snooze',           album: 'D-DAY',                     year: 2023, traits: { mood: 'tranquilo',  energia: 'baja',  momento: 'manana' } },

  // ---------------- J-HOPE ----------------
  { id: 'chicken-noodle-soup', artist: 'jhope', title: 'Chicken Noodle Soup', album: 'Single',              year: 2019, traits: { mood: 'feliz',      energia: 'alta',  momento: 'tarde' } },
  { id: 'arson',             artist: 'jhope', title: 'Arson',            album: 'Jack In The Box',          year: 2022, traits: { mood: 'intenso',    energia: 'media', momento: 'madrugada' } },
  { id: 'more',              artist: 'jhope', title: 'MORE',             album: 'Jack In The Box',          year: 2022, traits: { mood: 'intenso',    energia: 'alta',  momento: 'noche' } },
  { id: 'on-the-street',     artist: 'jhope', title: 'on the street',    album: 'Single',                   year: 2023, traits: { mood: 'nostalgico', energia: 'baja',  momento: 'tarde' } },
  { id: 'neuron',            artist: 'jhope', title: 'NEURON',           album: 'HOPE ON THE STREET Vol.1', year: 2024, traits: { mood: 'feliz',      energia: 'alta',  momento: 'manana' } },

  // ---------------- JIMIN ----------------
  { id: 'like-crazy',        artist: 'jimin', title: 'Like Crazy',      album: 'FACE',                      year: 2023, traits: { mood: 'intenso',    energia: 'alta',  momento: 'madrugada' } },
  { id: 'set-me-free-pt2',   artist: 'jimin', title: 'Set Me Free Pt.2', album: 'FACE',                     year: 2023, traits: { mood: 'intenso',    energia: 'alta',  momento: 'noche' } },
  { id: 'who',               artist: 'jimin', title: 'Who',             album: 'MUSE',                      year: 2024, traits: { mood: 'nostalgico', energia: 'media', momento: 'tarde' } },
  { id: 'smeraldo-garden',   artist: 'jimin', title: 'Smeraldo Garden Marching Band', album: 'MUSE',        year: 2024, traits: { mood: 'feliz',      energia: 'media', momento: 'manana' } },
  { id: 'promise',           artist: 'jimin', title: 'Promise',         album: 'Single',                    year: 2018, traits: { mood: 'tranquilo',  energia: 'baja',  momento: 'noche' } },

  // ---------------- V ----------------
  { id: 'slow-dancing',      artist: 'v', title: 'Slow Dancing',        album: 'Layover',                   year: 2023, traits: { mood: 'tranquilo',  energia: 'baja',  momento: 'noche' } },
  { id: 'love-me-again',     artist: 'v', title: 'Love Me Again',       album: 'Layover',                   year: 2023, traits: { mood: 'nostalgico', energia: 'baja',  momento: 'madrugada' } },
  { id: 'fri-ends',          artist: 'v', title: 'FRI(END)S',           album: 'Single',                    year: 2024, traits: { mood: 'nostalgico', energia: 'media', momento: 'tarde' } },
  { id: 'winter-ahead',      artist: 'v', title: 'Winter Ahead',        album: 'Single',                    year: 2024, traits: { mood: 'tranquilo',  energia: 'baja',  momento: 'manana' } },
  { id: 'christmas-tree',    artist: 'v', title: 'Christmas Tree',      album: 'Single',                    year: 2021, traits: { mood: 'tranquilo',  energia: 'media', momento: 'noche' } },

  // ---------------- JUNG KOOK ----------------
  { id: 'seven',             artist: 'jungkook', title: 'Seven',        album: 'GOLDEN',                    year: 2023, traits: { mood: 'feliz',      energia: 'alta',  momento: 'tarde' } },
  { id: '3d',                artist: 'jungkook', title: '3D',           album: 'GOLDEN',                    year: 2023, traits: { mood: 'feliz',      energia: 'alta',  momento: 'noche' } },
  { id: 'standing-next-to-you', artist: 'jungkook', title: 'Standing Next to You', album: 'GOLDEN',         year: 2023, traits: { mood: 'intenso',    energia: 'alta',  momento: 'madrugada' } },
  { id: 'euphoria',          artist: 'jungkook', title: 'Euphoria',     album: 'Love Yourself: Answer',     year: 2018, traits: { mood: 'feliz',      energia: 'media', momento: 'manana' } },
  { id: 'my-you',            artist: 'jungkook', title: 'My You',       album: 'Single',                    year: 2022, traits: { mood: 'nostalgico', energia: 'baja',  momento: 'madrugada' } },
]

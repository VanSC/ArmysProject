// ============================================================
//  CANCIONES DEL GRUPO (BTS) · discografía en coreano
//  + sencillos en japonés y en inglés.
//
//  Formato de cada fila:  [título, mood, energía, momento]
//    mood     n = nostalgico · f = feliz · i = intenso · t = tranquilo
//    energía  b = baja · m = media · a = alta
//    momento  m = mañana · t = tarde · n = noche · d = madrugada
//
//  Los traits son una lectura del "vibe" de cada canción y se
//  pueden ajustar fila por fila. Para enlazar una canción directo
//  en Spotify, agrega  spotify: '<id del track>'  a su objeto
//  (ver src/lib/spotify.js).
// ============================================================

const MOOD = { n: 'nostalgico', f: 'feliz', i: 'intenso', t: 'tranquilo' }
const ENERGIA = { b: 'baja', m: 'media', a: 'alta' }
const MOMENTO = { m: 'manana', t: 'tarde', n: 'noche', d: 'madrugada' }

const ALBUMES = [
  { album: '2 Cool 4 Skool', year: 2013, songs: [
    ['We Are Bulletproof Pt.2', 'i', 'a', 't'],
    ['No More Dream', 'i', 'a', 't'],
    ['Like', 'f', 'm', 't'],
    ['Outro: Circle Room Cypher', 'i', 'm', 'n'],
  ]},
  { album: 'O!RUL8,2?', year: 2013, songs: [
    ['N.O', 'i', 'a', 'm'],
    ['We On', 'f', 'a', 't'],
    ['If I Ruled the World', 'f', 'm', 'm'],
    ['Coffee', 't', 'b', 'n'],
    ['BTS Cypher Pt.1', 'i', 'a', 'n'],
    ['Attack on Bangtan', 'i', 'a', 't'],
    ['Paldogangsan', 'f', 'a', 't'],
    ['Outro: Luv in Skool', 't', 'm', 'n'],
  ]},
  { album: 'Skool Luv Affair', year: 2014, songs: [
    ['Boy In Luv', 'i', 'a', 't'],
    ['Where You From', 'i', 'a', 'n'],
    ['Just One Day', 'f', 'm', 't'],
    ['Tomorrow', 'n', 'm', 'n'],
    ['Spine Breaker', 'i', 'm', 'n'],
    ['Jump', 'f', 'a', 't'],
    ['Miss Right', 'f', 'm', 't'],
  ]},
  { album: 'Dark & Wild', year: 2014, songs: [
    ['Danger', 'i', 'a', 't'],
    ['War of Hormone', 'i', 'a', 't'],
    ['Hip Hop Phile', 'i', 'a', 'n'],
    ['Let Me Know', 't', 'm', 'n'],
    ['Rain', 't', 'b', 'n'],
    ['BTS Cypher Pt.3: Killer', 'i', 'a', 'd'],
    ['Look Here', 'f', 'm', 't'],
    ['Second Grade', 'f', 'a', 't'],
    ['Blanket Kick', 'f', 'm', 't'],
    ['24/7=Heaven', 'f', 'm', 'm'],
    ['Embarrassed', 'n', 'b', 'n'],
  ]},
  { album: 'HYYH Pt.1', year: 2015, songs: [
    ['I Need U', 'n', 'm', 'n'],
    ['Hold Me Tight', 'n', 'b', 'd'],
    ['Dope', 'i', 'a', 't'],
    ['Converse High', 'f', 'm', 't'],
    ['Moving On', 'n', 'm', 'm'],
    ['Outro: Love Is Not Over', 't', 'm', 'n'],
  ]},
  { album: 'HYYH Pt.2', year: 2015, songs: [
    ['Run', 'n', 'a', 't'],
    ['Butterfly', 't', 'b', 'n'],
    ['Whalien 52', 'n', 'm', 'n'],
    ['Ma City', 'f', 'a', 't'],
    ['Silver Spoon (Baepsae)', 'i', 'a', 'n'],
    ['Autumn Leaves', 'n', 'b', 't'],
    ['Outro: House of Cards', 'n', 'b', 'd'],
  ]},
  { album: 'Young Forever', year: 2016, songs: [
    ['Fire', 'i', 'a', 't'],
    ['Save ME', 'n', 'a', 'n'],
    ['Epilogue: Young Forever', 'n', 'b', 'd'],
  ]},
  { album: 'Wings', year: 2016, songs: [
    ['Blood Sweat & Tears', 'i', 'm', 'n'],
    ['Begin', 't', 'b', 'n'],
    ['Lie', 'n', 'b', 'd'],
    ['Stigma', 'n', 'b', 'n'],
    ['First Love', 'n', 'b', 'd'],
    ['Reflection', 'n', 'b', 'd'],
    ['MAMA', 't', 'm', 'm'],
    ['Awake', 'n', 'b', 'n'],
    ['Lost', 'n', 'b', 'n'],
    ['BTS Cypher Pt.4', 'i', 'a', 'n'],
    ['Am I Wrong', 'i', 'a', 'n'],
    ['21st Century Girls', 'f', 'a', 't'],
    ['Two! Three! (Still Wishing for More Good Days)', 'f', 'm', 't'],
  ]},
  { album: 'You Never Walk Alone', year: 2017, songs: [
    ['Spring Day', 'n', 'b', 'n'],
    ['Not Today', 'i', 'a', 't'],
    ['A Supplementary Story: You Never Walk Alone', 'n', 'b', 'n'],
  ]},
  { album: 'Love Yourself: Her', year: 2017, songs: [
    ['DNA', 'f', 'a', 'n'],
    ['Best of Me', 'f', 'a', 't'],
    ['Dimple', 'f', 'm', 't'],
    ['Pied Piper', 'i', 'm', 't'],
    ['MIC Drop', 'i', 'a', 'n'],
    ['Go Go', 'f', 'a', 't'],
    ['Outro: Her', 't', 'm', 'n'],
  ]},
  { album: 'Love Yourself: Tear', year: 2018, songs: [
    ['Fake Love', 'i', 'm', 'd'],
    ['The Truth Untold', 'n', 'b', 'd'],
    ['134340', 'n', 'b', 'd'],
    ['Paradise', 't', 'b', 'n'],
    ['Love Maze', 'n', 'm', 'n'],
    ['Magic Shop', 't', 'm', 'n'],
    ['Airplane pt.2', 'f', 'm', 't'],
    ['Anpanman', 'f', 'a', 't'],
    ['So What', 'f', 'a', 't'],
    ['Outro: Tear', 'i', 'a', 'd'],
  ]},
  { album: 'Love Yourself: Answer', year: 2018, songs: [
    ['IDOL', 'f', 'a', 'd'],
    ['Answer: Love Myself', 't', 'a', 'm'],
    ["I'm Fine", 'f', 'm', 't'],
    ['Trivia 起: Just Dance', 'f', 'a', 't'],
    ['Trivia 承: Love', 't', 'b', 'n'],
    ['Trivia 轉: Seesaw', 'n', 'm', 'n'],
  ]},
  { album: 'Map of the Soul: Persona', year: 2019, songs: [
    ['Boy With Luv', 'f', 'm', 't'],
    ['Make It Right', 't', 'm', 'n'],
    ['HOME', 't', 'b', 'n'],
    ['Dionysus', 'i', 'a', 'n'],
    ['Mikrokosmos', 't', 'm', 'n'],
  ]},
  { album: 'Map of the Soul: 7', year: 2020, songs: [
    ['Black Swan', 'i', 'b', 'd'],
    ['ON', 'i', 'a', 'm'],
    ['UGH!', 'i', 'a', 'n'],
    ['Louder than bombs', 'n', 'm', 'n'],
    ['00:00 (Zero O’Clock)', 't', 'b', 'd'],
    ['We are Bulletproof: the Eternal', 'f', 'a', 't'],
    ['Outro: Ego', 'f', 'a', 'm'],
  ]},
  { album: 'BE', year: 2020, songs: [
    ['Life Goes On', 'n', 'b', 'm'],
    ['Dynamite', 'f', 'a', 't'],
    ['Blue & Grey', 'n', 'b', 'd'],
    ['Telepathy', 'f', 'm', 't'],
    ['Dis-ease', 'i', 'm', 'n'],
    ['Stay', 't', 'b', 'n'],
    ['Fly To My Room', 't', 'b', 'd'],
  ]},
  { album: 'Butter', year: 2021, songs: [
    ['Butter', 'f', 'a', 't'],
  ]},
  { album: 'Butter (CD)', year: 2021, songs: [
    ['Permission to Dance', 'f', 'a', 'm'],
  ]},
  { album: 'Music of the Spheres (Coldplay)', year: 2021, songs: [
    ['My Universe', 'f', 'm', 'n'],
  ]},
  { album: 'Proof', year: 2022, songs: [
    ['Yet To Come', 'n', 'm', 'm'],
    ['Run BTS', 'i', 'a', 't'],
    ['For Youth', 'n', 'b', 'n'],
    ['Born Singer', 'n', 'm', 'm'],
  ]},
  { album: 'Single', year: 2022, songs: [
    ['Bad Decisions', 'f', 'a', 't'],
  ]},
  { album: 'Single', year: 2023, songs: [
    ['Take Two', 'n', 'm', 't'],
  ]},
  { album: 'Japan · Sencillos', year: 2017, songs: [
    ['For You', 'f', 'b', 't'],
    ['Crystal Snow', 't', 'b', 'n'],
  ]},
  { album: 'Japan · Sencillos', year: 2020, songs: [
    ['Lights', 'f', 'm', 't'],
    ['Stay Gold', 'n', 'b', 'n'],
    ['Your Eyes Tell', 't', 'b', 'n'],
  ]},
  { album: 'Japan · Sencillos', year: 2021, songs: [
    ['Film Out', 'n', 'b', 'n'],
  ]},
  { album: 'ARIRANG', year: 2026, songs: [
    ['Body to Body', 'i', 'm', 'n'],
    ['Hooligan', 'i', 'a', 'n'],
    ['Aliens', 'i', 'm', 'd'],
    ['Fya', 'i', 'a', 'n'],
    ['2.0', 'f', 'a', 'm'],
    ['No. 29', 'n', 'b', 'n'],
    ['Swim', 'f', 'm', 't'],
    ['Merry Go Round', 'f', 'm', 't'],
    ['Normal', 'n', 'b', 'n'],
    ['Like Animals', 'i', 'm', 'd'],
    ["They Don't Know 'bout Us", 'n', 'm', 'n'],
    ['One More Night', 't', 'm', 'n'],
    ['Please', 't', 'b', 'd'],
    ['Into the Sun', 'f', 'a', 'm'],
    ['Come Over', 'f', 'm', 'n'],
  ]},
]

const slug = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'x'

export const SONGS_GRUPO = ALBUMES.flatMap(({ album, year, songs }) =>
  songs.map(([title, m, e, mo]) => ({
    id: `${slug(title)}-${year}`,
    artist: 'bts',
    title,
    album,
    year,
    traits: { mood: MOOD[m], energia: ENERGIA[e], momento: MOMENTO[mo] },
  }))
)

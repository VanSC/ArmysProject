// ============================================================
//  ENLACES A SPOTIFY Y YOUTUBE MUSIC
//
//  · Si la canción tiene  spotify: '<id del track>'  → abre esa
//    canción directo (open.spotify.com/track/<id>).
//  · Si no, abre la búsqueda "título + artista" en Spotify.
//
//  YouTube Music igual: con  ytmusic: '<id del video>'  abre esa
//  canción; si no, abre la búsqueda.
// ============================================================

const NOMBRE_ARTISTA = {
  bts: 'BTS',
  rm: 'RM',
  jin: 'Jin',
  suga: 'SUGA',
  jhope: 'j-hope',
  jimin: 'Jimin',
  v: 'V',
  jungkook: 'Jung Kook',
}

export function spotifyUrl(song) {
  if (!song) return 'https://open.spotify.com'
  if (song.spotify) return `https://open.spotify.com/track/${song.spotify}`

  const artista = NOMBRE_ARTISTA[song.artist] || 'BTS'
  const consulta = `${song.title} ${artista}`
  return `https://open.spotify.com/search/${encodeURIComponent(consulta)}`
}

export function ytMusicUrl(song) {
  if (!song) return 'https://music.youtube.com'
  if (song.ytmusic) return `https://music.youtube.com/watch?v=${song.ytmusic}`

  const artista = NOMBRE_ARTISTA[song.artist] || 'BTS'
  const consulta = `${song.title} ${artista}`
  return `https://music.youtube.com/search?q=${encodeURIComponent(consulta)}`
}

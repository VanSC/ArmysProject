// ============================================================
//  FONDOS DE PHOTOCARD
//
//  Las fotos viven en  /public/BTS - PHOTOCARDS/  (1000 x 1500 px).
//  La foto se elige POR EL NOMBRE del archivo:
//
//    Jin-1..7  ·  suga-*  ·  j-hope-*  ·  jimin-*  ·  v-*
//    jungkook-*  ·  rm-*  ·  bts*.png (grupo → se usa para OT7)
//
//  1) Un solo bias  → siempre una card de ese integrante.
//  2) Varios bias u OT7 → siempre una card del grupo (bts*.png).
//  3) Si el archivo no carga, cae en otra card cualquiera.
//  4) Si tampoco carga ninguna, queda el degradado.
//
//  Para sumar una foto: pégala en la carpeta y agrega su nombre
//  exacto a la lista de su integrante (abajo).
// ============================================================

import { pickRandom } from '../lib/random'
import { aLista } from '../lib/traits'

const CARPETA = '/BTS - PHOTOCARDS/'

export const FOTOS = {
  rm: ['rm-1.png', 'rm-2.png', 'rm-3.png', 'rm-4.png', 'rm-5.png', 'rm-6.png', 'rm-7.png'],
  jin: ['Jin-1.png', 'Jin-2.png', 'Jin-3.png', 'Jin-4.png', 'Jin-5.png', 'Jin-6.png', 'Jin-7.png'],
  suga: ['suga-1.png', 'suga-2.png', 'suga-3-2.png', 'suga-4.png', 'suga-5.png', 'suga-6.png', 'suga-7-6.png'],
  jhope: ['j-hope-1.png', 'j-hope-2.png', 'j-hope-3.png', 'j-hope-4.png', 'j-hope-5.png', 'j-hope-6.png', 'j-hope-7.png'],
  jimin: ['jimin-1.png', 'jimin-2.png', 'jimin-3.png', 'jimin-4.png', 'jimin-5.png', 'jimin-6.png', 'jimin-7.png'],
  v: ['v-1.png', 'v-2.png', 'v-3.png', 'v-4.png', 'v-5.png', 'v-6.png', 'v-7.png'],
  jungkook: ['jungkook-1.png', 'jungkook-2.png', 'jungkook-3.png', 'jungkook-4.png', 'jungkook-5.png', 'jungkook-6.png', 'jungkook-7.png'],
  ot7: [
    'bts.png', 'bts (2).png', 'bts (3).png', 'bts (4).png', 'bts (5).png', 'bts (6).png',
    'bts (7).png', 'bts (8).png', 'bts (9).png', 'bts (10).png', 'bts (11).png',
  ],
}

const TODAS = Object.values(FOTOS).flat()

// Los nombres llevan espacios y paréntesis: se codifica la ruta.
const RUTA = (file) => encodeURI(`${CARPETA}${file}`)

export const TEXT_COLOR = '#FFFFFF'
export const FALLBACK_CSS = 'linear-gradient(170deg, #1E1416 0%, #6E0A1A 52%, #D7263D 100%)'

/**
 * Devuelve la foto según el/los bias elegidos, más una alternativa
 * cualquiera por si el archivo no carga.
 */
export function pickDesign(bias) {
  const lista = aLista(bias)
  // varios bias u OT7 → fotos del grupo; uno solo → las de ese integrante
  const clave = lista.length === 1 ? lista[0] : lista.length > 1 ? 'ot7' : null
  const delBias = FOTOS[clave]
  const foto = pickRandom(delBias?.length ? delBias : TODAS)
  const alterna = pickRandom(TODAS)

  return {
    id: foto,
    src: RUTA(foto),
    alt: RUTA(alterna),
    textColor: TEXT_COLOR,
    fallback: FALLBACK_CSS,
  }
}

# ARIRANG · Photocard BTS

Web app estática (React 18 + Vite, sin backend) que hace un quiz de 5 preguntas
y entrega una photocard descargable con la canción de BTS que te representa.

## Flujo

1. **Banner** — logo de Arirang y campo de nombre.
2. **Quiz** — 4 tarjetas:
   1. Bias (se puede elegir más de uno · OT7 es exclusivo)
   2. Álbum favorito
   3. Año en que conociste a BTS (2013–2026)
   4. Tipo de ARMY (10 opciones · se puede elegir más de uno)
3. **Loader** — 2.4 s.
4. **Resultado** — photocard con nombre, canción y bias,
   más una ficha con todas las respuestas y botón de descarga (PNG).

## Diseño

- Paleta blanca dominante con rojo (`src/styles/tokens.css`), superficies tipo card.
- Lluvia de corazones rojos animados con `box-shadow` en toda la pantalla
  (`src/components/HeartsRain.jsx`).
- Todo responsive con `clamp()` y grids que se adaptan; se desactiva la animación
  con `prefers-reduced-motion`.

## Archivos que vas a querer tocar

| Archivo | Para qué |
|---|---|
| `src/data/questions.js` | Texto y opciones de las 5 preguntas |
| `src/data/songs.js` | Catálogo de canciones con sus traits |
| `src/data/designs.js` | Foto por bias + pool de respaldo |
| `src/lib/traits.js` | Mapeo bias→mood, álbum→momento, tipo→energía |
| `public/photocards/` | Los PNG de las cards, 1000×1500 px |
| `public/arirang-logo.png` | Logo de Arirang |
| `src/components/Footer.jsx` | Link de Instagram del footer (`INSTAGRAM_URL`) |

## Cómo elige la canción

`src/lib/matchSong.js`:

1. Filtra por bias: si es un miembro entran **sus solos + las canciones de grupo**;
   si es OT7 entra todo el catálogo.
2. `deriveTraits()` convierte bias, álbum y tipo de persona en `mood`, `momento` y `energia`.
3. Puntúa cada canción por traits coincidentes; un solo del propio bias suma un punto extra.
4. Si hay año, prefiere canciones publicadas desde ese año (si queda alguna).
5. Sortea una entre las finalistas.

## La foto de la photocard

La decide el bias: pide `/photocards/<bias>.png` (`rm.png`, `jin.png`, `suga.png`,
`jhope.png`, `jimin.png`, `v.png`, `jk.png`, `ot7.png`). Si ese archivo no existe,
cae en una card del pool `DISPONIBLES` sorteada al azar; si tampoco carga, queda
el degradado rojo.

## Correr en local

```bash
npm install
npm run dev
```

## Deploy

GitHub → vercel.com/new → preset Vite, build `npm run build`, output `dist`.
O directo: `npx vercel --prod`.

export function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Sorteo ponderado: cada item entra con una probabilidad proporcional
 * a weightFn(item). Si todos los pesos son 0 o la lista está vacía,
 * cae de vuelta a pickRandom.
 */
export function pickWeighted(list, weightFn) {
  const weights = list.map((item) => Math.max(0, weightFn(item)))
  const total = weights.reduce((sum, w) => sum + w, 0)
  if (total <= 0) return pickRandom(list)

  let umbral = Math.random() * total
  for (let i = 0; i < list.length; i++) {
    umbral -= weights[i]
    if (umbral <= 0) return list[i]
  }
  return list[list.length - 1]
}

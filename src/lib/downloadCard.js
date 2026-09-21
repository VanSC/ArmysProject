import { toPng } from 'html-to-image'

const slug = (s) =>
  (s || 'photocard')
    .toString()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()

/** Espera a que todas las imágenes del nodo estén cargadas. */
async function waitForImages(node) {
  const imgs = Array.from(node.querySelectorAll('img'))
  await Promise.all(
    imgs.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((res) => {
            img.onload = res
            img.onerror = res
          })
    )
  )
  if (document.fonts?.ready) await document.fonts.ready
}

export async function downloadCard(node, name) {
  if (!node) return
  await waitForImages(node)

  const dataUrl = await toPng(node, {
    pixelRatio: 3,
    cacheBust: true,
    backgroundColor: '#1E1416',
  })

  const link = document.createElement('a')
  link.download = `photocard-${slug(name)}.png`
  link.href = dataUrl
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default () => {
  const div = document.createElement('div')

  div.style.cssText = "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;"

  document.body.appendChild(div)

  const scrollbarWidth = div.offsetWidth - div.clientWidth

  document.body.removeChild(div)

  return scrollbarWidth
}

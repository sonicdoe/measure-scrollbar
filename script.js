import measureScrollbar from '../index.js'

const scrollbarWidth = measureScrollbar()

document.getElementById('value').textContent = `${scrollbarWidth}px`

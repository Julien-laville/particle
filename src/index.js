const emitters = []
const c = document.getElementById('c')

window.SCREEN_WIDTH = window.innerWidth
window.SCREEN_HEIGHT = window.innerHeight

c.width = SCREEN_WIDTH
c.height = SCREEN_HEIGHT

window.ctx = c.getContext('2d')


import Background from './backgroud'
const background = new Background()

import Party from './party'
const party = new Party()

window.dt = 0;
let lastU = Date.now()

function paint() {
  dt = Date.now() - lastU
  lastU = Date.now()

  c.width += 0
  background.draw()
  party.draw()
  requestAnimationFrame(paint)
}
paint()

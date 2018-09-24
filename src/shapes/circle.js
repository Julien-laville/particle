export default class Circle {
  d(pos) {
    ctx.beginPath()
    ctx.fillStyle = '#000'
    ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2)
    ctx.fill()
  }
}
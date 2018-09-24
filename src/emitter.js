export default class Emitter {
  constructor(pos) {
    this.pos = pos
    this.particles = []
  }

  add(p) {
    this.particles.push(p)
  }

  d() {
    for(let i = 0; i < this.particles.length; i ++) {
      this.particles[i].d()
    }
  }

  k() {
    for(let i = 0; i < this.particles.length; i ++) {
      this.particles[i].k()
    }
  }
}

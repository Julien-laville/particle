import Particle from "./particle";
import V2d from "./libs/v2d";

export default class Emitter {
  constructor(pos, n) {
    this.pos = pos
    this.particles = []
    for(var i = 0; i < n; i ++) {
      let a = Math.random() * 2 * Math.PI
      let speed = new V2d(Math.cos(a), Math.sin(a))
      this.particles.push(new Particle(this.pos, speed, 1441))
    }
  }
  draw() {
    for(let i = 0; i < this.particles.length; i ++) {
      this.particles[i].draw()
    }
  }
}
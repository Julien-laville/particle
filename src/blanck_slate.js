import Emitter from "./emitter";
import V2d from "./libs/v2d";
import Particle from "./particle";
import Circle from "./shapes/circle"

export default class BlanckSlate {
  constructor() {
    this.emitter = new Emitter(new V2d(0,0))
    for(let i = 0; i < 20; i ++) {
      let a = Math.random() * 2 * Math.PI
      let speed = new V2d(Math.cos(a), Math.sin(a))
      let shape = new Circle()
      let p = new Particle(this.emitter.pos, speed, shape, 3000)
      this.emitter.add(p)
    }
  }
}

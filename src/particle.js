import V2d from "./libs/v2d";

export default class Particle {
  constructor(pos, speed, shape, lifeSpan) {
    this.shape = shape

    this.initialPos = pos.clone()
    this.pos = pos.clone()
    this.speed = speed
    this.lifeSpan = lifeSpan
    this.saveLifeSpan = lifeSpan
    this.delay = Math.random() * this.lifeSpan
    this.alive = false
  }

  d() {
    if(true === this.alive) {
      this.shape.d(this.pos)
    }
  }

  k() {
    if(true === this.alive) {
      this.pos.add(this.speed)
      this.lifeSpan -= dt
    }
    if(this.lifeSpan < 0) {
      this.lifeSpan = this.saveLifeSpan
      this.pos.setV(this.initialPos)
    }
    if(false === this.alive) {
      if(this.delay < 0) {
        this.alive = true
      } else {
        this.delay -= dt
      }
    }
  }
}
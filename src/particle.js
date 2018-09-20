import V2d from "./libs/v2d";

export default class Particle {
  constructor(pos, speed, lifeSpan) {
    this.initialPos = pos.clone()
    this.pos = pos.clone()
    this.speed = speed
    this.lifeSpan = lifeSpan
    this.saveLifeSpan = lifeSpan
    this.delay = Math.random() * this.lifeSpan
    this.alive = false
  }

  draw() {
    this.k()
    if(true === this.alive) {
      ctx.beginPath()
      ctx.arc(this.pos.x, this.pos.y, 5, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'
      ctx.fill()
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
    info.innerHTML = this.lifeSpan
    if(false === this.alive) {
      if(this.delay < 0) {
        this.alive = true
      } else {
        this.delay -= dt
      }
    }
  }
}
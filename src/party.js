export default class Party {
  constructor() {
    this.emitters = []
  }

  add(emitter) {
    this.emitters.push(emitter)
  }

  d() {
    for(let i = 0; i < this.emitters.length; i++) {
      this.emitters[i].d()
    }
  }

  k() {
    for(let i = 0; i < this.emitters.length; i++) {
      this.emitters[i].k()
    }
  }
}

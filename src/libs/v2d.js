export default class V2d {
  constructor(x, y) {
    this.x = x;this.y = y
  }

  clone() {
    return new V2d(this.x, this.y)
  }

  set(x, y) {
    this.x = x;this.y = y
  }

  setV(v) {
    this.x = v.x;this.y = v.y
  }

  add(v) {
    this.x += v.x
    this.y += v.y
  }

}

import Emitter from "./emitter";
import V2d from "./libs/v2d";

export default class Party {
  constructor() {
    this.emitters = [new Emitter(new V2d(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2), 15)]
  }
  draw() {
    for(let i = 0; i < this.emitters.length; i++) {
      this.emitters[i].draw()
    }
  }
}

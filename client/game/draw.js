const config = require('../../shared/config');

class Draw {
  constructor(ctx) {
    this.loadedSprites = new Map();
    this.ctx = ctx;
  }

  static wrap(func) {
    this.ctx.save();
    func();
    this.ctx.restore();
  }

  addSprite(sprite) {
    const img = new Image();
    img.src = sprite;
    img.onload = () => this.loadedSprites.set(sprite, img);
  }

  clear() {
    this.ctx.save();
    this.ctx.clearRect(0, 0, config.WIDTH, config.HEIGHT);
    this.ctx.fillColor = "black";
    this.ctx.fillRect(0, 0, config.WIDTH, config.HEIGHT);
    this.ctx.restore();
  }

  drawEntity(ent) {
    this.ctx.save();
    if (this.loadedSprites.has(ent.sprite)) {
        const sprite = this.loadedSprites.get(ent.sprite);
      this.ctx.drawImage(sprite, ent.position.x, ent.position.y, ent.width, ent.height);
    } else {
      this.ctx.fillColor = "cyan";
      this.ctx.fillRect(ent.position.x, ent.position.y, ent.width, ent.height);
    }
    this.ctx.restore();
  }
}

module.exports = Draw;

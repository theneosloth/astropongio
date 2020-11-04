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
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, config.WIDTH, config.HEIGHT);
    this.ctx.restore();
  }

  drawEntity(ent, hitbox = true) {
    this.ctx.save();
    this.ctx.translate(ent.position.x, ent.position.y);

    // Red bounding box
    if (hitbox) {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(-ent.width / 2, -ent.height / 2, ent.width, ent.height);
    }

    this.ctx.rotate((Math.PI / 180) * (ent.rotation));

    if (this.loadedSprites.has(ent.sprite)) {
      const sprite = this.loadedSprites.get(ent.sprite);
      this.ctx.drawImage(sprite, -ent.width / 2, -ent.height / 2, ent.width, ent.height);
    } else {
      this.ctx.fillStyle = 'cyan';
      this.ctx.fillRect(0, 0, ent.width, ent.height);
      this.addSprite(ent.sprite);
    }

    // Center
    if (hitbox) {
      this.ctx.fillStyle = 'green';
      this.ctx.fillRect(-3, -3, 6, 6);
    }
    this.ctx.restore();
  }
}

module.exports = Draw;

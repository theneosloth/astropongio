class Entity {
  constructor(id, position, sprite, width, height) {
    this.id = id;
    this.position = position;
    this.width = width;
    this.height = height;
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.sprite = sprite;
    this.rotation = 0;
  }

  update(dt) {
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
  }
}

module.exports = Entity;

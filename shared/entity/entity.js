class Entity {
  // [x,y] pairs
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

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

module.exports = Entity;

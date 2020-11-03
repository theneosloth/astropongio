class Entity {
  // [x,y] pairs
  constructor(position, sprite, width, height) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.ready = false;
    this.sprite = sprite;
  }
}

module.exports = Entity;

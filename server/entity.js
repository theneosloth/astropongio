class Entity {
  // [x,y] pairs
  constructor(position, sprite, width, height) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.ready = false;
    this.sprite = new Image();
    this.sprite.src = sprite;
    this.sprite.onload = () => { this.ready = true; };
  }

  draw(context) {
    if (this.ready) {
      context.drawImage(this.sprite, this.position.x, this.position.y, this.width, this.height);
    } else {
      context.fillStyle = "black";
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
}

module.exports = Entity;

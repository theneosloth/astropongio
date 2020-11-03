class Vector {
  constructor(x, y) {
    if (x === undefined) {
      this.x = 0;
    } else {
      this.x = x;
    }
    if (y === undefined) {
      this.y = 0;
    } else {
      this.y = y;
    }
  }
}

module.exports = Vector;

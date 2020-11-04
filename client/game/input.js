class Input {
  constructor() {
    this.keys = {
      up: false, down: false, left: false, right: false,
    };

    document.addEventListener('keydown', (event) => {
      this.handleKey(event, true);
    });

    document.addEventListener('keyup', (event) => {
      this.handleKey(event, false);
    });
  }

  handleKey(event, enable) {
    switch (event.keyCode) {
      case 68: // d
        this.keys.right = enable;
        break;
      case 83: // s
        this.keys.down = enable;
        break;
      case 65: // a
        this.keys.left = enable;
        break;
      case 87: // w
        this.keys.up = enable;
        break;
      default:
        break;
    }
  }
}

module.exports = Input;

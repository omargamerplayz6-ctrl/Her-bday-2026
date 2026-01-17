class Tree {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.branches = [];
    this.seed(canvas.width / 2, canvas.height);
  }

  seed(x, y) {
    this.branches.push({x, y, length: 0, angle: -Math.PI/2, depth: 0});
  }

  canGrow() {
    return this.branches.some(b => b.length < 100);
  }

  grow() {
    this.branches.forEach(b => {
      if (b.length < 100) {
        b.length += 1;
      }
    });
  }

  flower() {
    this.branches.forEach(b => {
      if (b.length >= 100) {
        var endX = b.x + Math.cos(b.angle) * b.length;
        var endY = b.y + Math.sin(b.angle) * b.length;
        this.ctx.fillStyle = 'rgba(255,120,180,0.8)';
        this.ctx.beginPath();
        this.ctx.arc(endX, endY, 5, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeStyle = 'green';
    this.ctx.lineWidth = 2;
    this.branches.forEach(b => {
      this.ctx.beginPath();
      this.ctx.moveTo(b.x, b.y);
      var endX = b.x + Math.cos(b.angle) * b.length;
      var endY = b.y + Math.sin(b.angle) * b.length;
      this.ctx.lineTo(endX, endY);
      this.ctx.stroke();
    });
    this.flower();
  }
}

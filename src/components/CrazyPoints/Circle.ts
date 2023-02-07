class Circle {
  x;
  y;
  hypotenuse = 0;
  private radius;
  private color = "rgba(156,217,249";
  private opacity = 0;
  private dx = 0;
  private dy = 0;
  private ctx;
  constructor(
    x: number,
    y: number,
    radius: number,
    ctx: CanvasRenderingContext2D | null
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ctx = ctx;
    this.dx = Math.random() * 4 + 1;
    this.dx *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    this.dy = Math.random() * 4 + 1;
    this.dy *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  }

  getColor() {
    return `${this.color},${this.opacity}`;
  }

  getOpacity() {
    return this.opacity;
  }

  changeOpacity(opacity: number) {
    this.opacity = opacity;
  }

  addHypotenuse(hypotenuse: number) {
    this.hypotenuse = hypotenuse;
  }

  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if (
      this.ctx &&
      (this.x + this.radius > this.ctx?.canvas.width ||
        this.x - this.radius < 0)
    ) {
      this.dx = -this.dx;
    }

    if (
      this.ctx &&
      (this.y + this.radius > this.ctx?.canvas.height ||
        this.y - this.radius < 0)
    ) {
      this.dy = -this.dy;
    }
  }

  draw() {
    if (!this.ctx) return;
    this.ctx.beginPath();
    this.ctx.fillStyle = this.getColor();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}
export default Circle;

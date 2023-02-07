import Circle from "./Circle";

class Line {
  from;
  to;
  private color = "rgba(156,217,249";
  private opacity = 0;
  private ctx;
  constructor(from: Circle, to: Circle, ctx: CanvasRenderingContext2D | null) {
    this.from = from;
    this.to = to;
    this.ctx = ctx;
  }

  getColor() {
    return `${this.color},${this.opacity}`;
  }

  changeOpacity(opacity: number) {
    this.opacity = opacity;
  }

  draw() {
    if (!this.ctx) return;
    this.ctx.beginPath();
    this.ctx.moveTo(this.from.x, this.from.y);
    this.ctx.lineTo(this.to.x, this.to.y);
    this.ctx.strokeStyle = this.getColor();
    this.ctx.stroke();
  }
}
export default Line;

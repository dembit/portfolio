import Circle from "./Circle";
import Line from "./Line";

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
};

class CrazyPoints {
  private countCloseLine = 8;
  private offsetX = 0;
  private offsetY = 0;
  private border = 20;
  private width;
  private height;
  private count;
  private ctx;
  private visibleCircle = [] as Circle[];
  private circls = [] as Circle[];
  constructor(count: number, ctx: CanvasRenderingContext2D | null) {
    let width = window.innerWidth - this.border;
    let height = window.innerHeight - this.border;
    if (ctx) {
      const parent = ctx.canvas.parentElement;
      if (parent) {
        const styles = getComputedStyle(parent);
        width = parseInt(styles.getPropertyValue("width"), 10);
        height = parseInt(styles.getPropertyValue("height"), 10);
      }
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      this.addEventMouseMove(ctx.canvas);
    }
    this.width = width;
    this.height = height;
    this.count = count;
    this.ctx = ctx;
    this.setCircls();
    this.drawCircls();
  }

  addEventMouseMove(canvas: HTMLCanvasElement) {
    canvas.addEventListener("mousemove", (e) => {
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;
      const closedCircls = this.findCloseCirclsByHypotenuse(
        new Circle(this.offsetX, this.offsetY, 0, null)
      );

      this.visibleCircle.forEach((visible) => visible.changeOpacity(0));

      const filterArray = closedCircls.filter((circl, i) => {
        if (i < 10) {
          circl.changeOpacity(1);
          return true;
        }
        return false;
      });
      this.visibleCircle = filterArray;
    });
  }

  animate() {
    this.clear();
    this.animateCircls();
    this.drawCircls();
    this.drawLineBetweenCircls();
  }

  clear() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  setCircls() {
    const cirls = [] as Circle[];
    for (let i = 0; i < this.count; i++) {
      cirls.push(
        new Circle(
          getRandomInt(0, this.width),
          getRandomInt(0, this.height),
          getRandomInt(4, 7),
          this?.ctx
        )
      );
    }
    this.circls = cirls;
  }

  animateCircls() {
    this.circls.forEach((circle) => circle.animate());
  }

  drawCircls() {
    this.circls.forEach((circle) => circle.draw());
  }

  findCloseCirclsByHypotenuse = (point: Circle) => {
    const current = point;
    const arrayWithHypotenuse = this.circls
      .map((circle) => {
        const sideA = Math.abs(current.x - circle.x);
        const sideB = Math.abs(current.y - circle.y);
        circle.addHypotenuse(this.getHypotenuse(sideA, sideB));
        return circle;
      })
      .filter(({ hypotenuse }) => hypotenuse)
      .sort((a, b) => a.hypotenuse - b.hypotenuse);
    return arrayWithHypotenuse;
  };

  drawLineBetweenCircls = () => {
    this.circls.forEach((circle) => {
      const closeCircls = this.findCloseCirclsByHypotenuse(circle);
      closeCircls.forEach((closeCircle, i) => {
        if (i < this.countCloseLine) {
          const line = new Line(circle, closeCircle, this.ctx);
          if (circle.getOpacity()) {
            line.changeOpacity(0.3);
          }
          line.draw();
        }
      });
    });
  };

  getHypotenuse = (sideA: number, sideB: number) => {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  };
}

export default CrazyPoints;

export class Bullet {
  x: number;
  y: number;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.speed = 5; // 위로 이동하는 속도
  }

  update() {
    this.y -= this.speed; // y좌표를 줄이면서 위로 이동
  }

  draw(
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    BULLET_SIZE: number
  ) {
    ctx.drawImage(image, this.x, this.y, BULLET_SIZE, BULLET_SIZE);
  }

  init(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

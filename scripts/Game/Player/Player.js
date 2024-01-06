class ViewBox {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

export class Player {
    constructor(x, y, speed, size) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.techtree = undefined;
        this.viewbox = new ViewBox(this.x - size / 2, this.y - size / 2, size, size);
        this.colonizedplanets = [];
        this.structures = [];
    }
    move(vx, vy) {
        this.x += this.speed * vx;
        this.y += this.speed * vy;

        this.viewbox.x += this.speed * vx;
        this.viewbox.y += this.speed * vy;
    }
}
export class SolarMass {
    constructor(x, y, radius, density, solarEmmisionRate, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.density = density;
        this.solarEmmisionRate = solarEmmisionRate;
        this.color = color;
    }
    draw(ctx, viewBox) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}
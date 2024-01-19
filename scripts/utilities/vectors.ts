export class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(vector: Vector): void {
        this.x += vector.x;
        this.y += vector.y;
    }
    sadd(scalar: number): void {
        this.x += scalar;
        this.y += scalar;
    }
    rsadd(scalar: number): Vector {
        var vector = this.clone();
        vector.sadd(scalar);
        return vector;
    }
    subtract(vector: Vector): void {
        this.x -= vector.x;
        this.y += vector.y;
    }
    scale(scalar: number): void {
        this.x *= scalar;
        this.y *= scalar;
    }
    multiply(vector: Vector): void {
        this.x *= vector.x;
        this.y *= vector.y;
    }
    sdivide(scalar: number): void {
        this.x /= scalar;
        this.y /= scalar;
    }
    divide(vector: Vector): void {
        this.x /= vector.x;
        this.y /= vector.y;
    }
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    clone(): Vector {
        return new Vector(this.x, this.y);
    }
    normalize(): void {
        this.divide(this.clone());
    }
}
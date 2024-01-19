var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    Vector.prototype.sadd = function (scalar) {
        this.x += scalar;
        this.y += scalar;
    };
    Vector.prototype.rsadd = function (scalar) {
        var vector = this.clone();
        vector.sadd(scalar);
        return vector;
    };
    Vector.prototype.subtract = function (vector) {
        this.x -= vector.x;
        this.y += vector.y;
    };
    Vector.prototype.scale = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };
    Vector.prototype.multiply = function (vector) {
        this.x *= vector.x;
        this.y *= vector.y;
    };
    Vector.prototype.sdivide = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
    };
    Vector.prototype.divide = function (vector) {
        this.x /= vector.x;
        this.y /= vector.y;
    };
    Vector.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector.prototype.clone = function () {
        return new Vector(this.x, this.y);
    };
    Vector.prototype.normalize = function () {
        this.divide(this.clone());
    };
    return Vector;
}());
export { Vector };

export var SquareTypes;
(function (SquareTypes) {
    SquareTypes["RockSquare"] = "gray";
    SquareTypes["SoilSquare"] = "brown";
})(SquareTypes || (SquareTypes = {}));
export var GlobalScale = 8;
var Property = /** @class */ (function () {
    function Property() {
    }
    return Property;
}());
export { Property };
var Square = /** @class */ (function () {
    function Square(position, velocity, properties, type) {
        this.position = position;
        this.velocity = velocity;
        this.properties = properties;
        this.scale = 1;
        this.size = this.scale * GlobalScale;
        this.type = type;
    }
    Square.prototype.draw = function (ctx) {
        ctx.fillStyle = this.type;
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    };
    return Square;
}());
export { Square };

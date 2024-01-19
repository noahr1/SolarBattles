import { Vector } from "../../utilities/vectors.js";
import { Square, SquareTypes, Property } from "../squares/square.js";
var Planet = /** @class */ (function () {
    function Planet(position, radius) {
        this.position = position;
        this.radius = radius;
        this.centerpos = this.position.rsadd(this.radius);
        this.squares = [];
    }
    Planet.prototype.makeRandomPlanet = function () {
        var diameter = this.radius * 2;
        for (var x = 0; x < diameter; x++) {
            for (var y = 0; y < diameter; y++) {
                var dist = Math.sqrt(Math.pow(this.centerpos.x - x, 2) + Math.pow(this.centerpos.y - y, 2));
                if (dist <= this.radius) {
                    this.squares.push(new Square(new Vector(x, y), new Vector(0, 0), [new Property()], SquareTypes.RockSquare));
                }
            }
        }
        return this;
    };
    Planet.prototype.draw = function (ctx) {
        for (var _i = 0, _a = this.squares; _i < _a.length; _i++) {
            var square = _a[_i];
            square.draw(ctx);
        }
    };
    return Planet;
}());
export { Planet };

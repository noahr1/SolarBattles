import { Vector } from "../../utilities/vectors";
import { Square, SquareTypes, Property } from "../squares/square";

export class Planet {
    position: Vector;
    radius: number;
    centerpos: Vector;
    squares: Array<Square>;
    constructor(position: Vector, radius: number) {
        this.position = position;
        this.radius = radius;
        this.centerpos = this.position.rsadd(this.radius);
        this.squares = [];
    }
    makeRandomPlanet(): Planet {
        var diameter: number = this.radius * 2;
        for(var x = 0; x < diameter; x++) {
            for(var y = 0; y < diameter; y++) {
                var dist = Math.sqrt(Math.pow(this.centerpos.x - x, 2) + Math.pow(this.centerpos.y - y, 2));
                if(dist <= this.radius) {
                    this.squares.push(new Square(new Vector(x, y), new Vector(0, 0), [new Property()], SquareTypes.RockSquare));
                }
            }
        }
        return this;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        for(var square of this.squares) {
            square.draw(ctx);
        }
    }
}
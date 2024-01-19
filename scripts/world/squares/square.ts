import { Vector } from "../../utilities/vectors";

export enum SquareTypes {
    RockSquare = "gray",
    SoilSquare = "brown",
}

export const GlobalScale = 8;

export class Property {

}

export class Square {
    position: Vector;
    velocity: Vector;
    properties: Array<Property>;
    size: number;
    scale: number;
    type: SquareTypes;
    constructor(position: Vector, velocity: Vector, properties: Array<Property>, type: SquareTypes) {
        this.position = position;
        this.velocity = velocity;
        this.properties = properties;
        this.scale = 1;
        this.size = this.scale * GlobalScale;
        this.type = type;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.type;
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}

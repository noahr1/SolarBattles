import { Vector } from "../../utilities/vectors";
import { Planet } from "../../world/planet/planet";

export class Player {
    position: Vector;
    dimension: Dimension;
    viewBox: ViewBox;
    techTree: TechTree;
    colonizedPlanets: Array<Planet>;
    constructor(position: Vector, dimension: Dimension, techTree: TechTree) {
        this.position = position;
        this.viewBox = new ViewBox(this.position, dimension.width, dimension.height);
        this.techTree = techTree;
        this.colonizedPlanets = [];
    }
}

class Dimension {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

class ViewBox {
    position: Vector;
    width: number;
    height: number;
    constructor(position: Vector, width: number, height: number) {
        this.position = position;
        this.width = width;
        this.height = height; 
    }
}

class TechTree {
    constructor() {

    }
}
import { SquareRegistry } from "../Square/Square.js";

function getAugmentCenterDist(x, y, astroid) {
    const x2 = astroid.x + (astroid.radius);
    const y2 = astroid.y + (astroid.radius);
    const x1 = astroid.x + x;
    const y1 = astroid.y + y;
    const dist = Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    //const radius = astroid.radius + (Math.floor(Math.random() * 6) - 1) * 8;
    if(astroid.radius >= dist) {
        return true;
    }else {
        return false;
    }
}

function getDist(x, y, astroid) {
    const x2 = astroid.x + (astroid.radius);
    const y2 = astroid.y + (astroid.radius);
    const x1 = astroid.x + x;
    const y1 = astroid.y + y;
    const dist = Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    return dist;
}

function getSquare(x, y, astroid, register) {
    var dist = getDist(x, y, astroid);

    const RockSquare = register.getSquare(1);
    astroid.squares.push(new RockSquare(astroid.x + x * 8, astroid.y + y * 8, 64, {"stone": 51, "silica": 49}));
    astroid.mass += 64;
}

export class Astroid {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.squares = [];
        this.mass = 0;
        this.scale = 1;
        this.vx = 0;
        this.vy = 0;
        this.fx = 0;
        this.fy = 0;
    }
    draw(ctx, viewBox) {
        for(var square of this.squares) {
            square.draw(ctx);
        }
    }
    update(dt) {
        if(this.squares.length > 0) {
            let ax = this.fx / this.mass;
            let ay = this.fy / this.mass;

            this.vx += ax * dt;
            this.vy += ay * dt;

            this.x += this.vx * dt;
            this.y += this.vy * dt;
        }
        for(var square of this.squares) {
            square.x += this.vx * dt;
            square.y += this.vy * dt;
            square.scale = this.scale;
        }
    }
    makeRandAstroid() {
        this.squares = [];
        var diameter = this.radius * 2;
        for(var h = 0; h < diameter; h++) {
            for(var w = 0; w < diameter; w++) {
                if(getAugmentCenterDist(w, h, this)) {
                    getSquare(w, h, this, SquareRegistry);
                }
            }
        }
        return this;
    }
}
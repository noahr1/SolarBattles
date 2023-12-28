//imports
import { SquareRegistry } from "../Square/Square.js";
import { perlin } from "../../Utils/Perlin.js";

function getDistCenter(x, y, planet) {
    const x2 = planet.x + planet.radius;
    const y2 = planet.y + planet.radius;
    const x1 = planet.x + x;
    const y1 = planet.y + y;
    const dist = Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    if(planet.radius >= dist) {
        return true;
    }else {
        return false;
    }
}

function getDist(x, y, planet) {
    const x2 = planet.x + planet.radius;
    const y2 = planet.y + planet.radius;
    const x1 = planet.x + x;
    const y1 = planet.y + y;
    const dist = Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    return dist;
}

function getBlock(w, h, planet, register) {
    var dist = getDist(w, h, planet);
    perlin.seed();

    //Square Implementations
    const RockSquare = register.getSquare(1);
    const GrassSquare = register.getSquare(2);
    const SoilSquare = register.getSquare(3);
    const WaterSquare = register.getSquare(4);
    const OilSquare = register.getSquare(5);

    var seed = Math.random() * 250;
    var frequency = 2.35;

    //Square Conditionals
    if(dist >= planet.radius - 1) {
        planet.squares.push(new GrassSquare(planet.x + w * 8, planet.y + h * 8, 5, 15, 15));
    }else if(dist >= planet.radius - 4) {
        planet.squares.push(new SoilSquare(planet.x + w * 8, planet.y + h * 8, 5));
    }else {
        if(perlin.get((w * frequency) + seed, (h * frequency) + seed) <= 0.35){
            planet.squares.push(new RockSquare(planet.x + w * 8, planet.y + h * 8, 5, {"stone": 51, "silica": 49}));
        }else {
            planet.squares.push(new WaterSquare(planet.x + w * 8, planet.y + h * 8, 5, 15));
        }
    }
}

export class Planet {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.scale = 1;
        this.radius = radius;
        this.squares = [];
    }
    draw(ctx, viewBox) {
        for(var square of this.squares) {
            //if(square.x >= viewBox.x && square.x <= viewBox.x + viewBox.width 
            //&& square.y >= viewBox.y && square.x <= viewBox.y + viewBox.height) {
                square.draw(ctx);
            //}
        }
    }
    update() {
        for(var square of this.squares) {
            square.x += this.vx;
            square.y += this.vy;
            square.scale = this.scale;
        }
    }
    static makeRandPlanet(planet) {
        planet.squares = [];
        var planetD = planet.radius * 2;
        for(var h = 0; h < planetD; h++) {
            for(var w = 0; w < planetD; w++) {
                if(getDistCenter(w, h, planet)) {
                    getBlock(w, h, planet, SquareRegistry);
                }
            }
        }
    }
}
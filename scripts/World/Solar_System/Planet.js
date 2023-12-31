//imports
import { SquareRegistry } from "../Square/Square.js";
import { perlin } from "../../Utils/Perlin.js";

function getDistCenter(x, y, planet) {
    const x2 = planet.x + (planet.radius);
    const y2 = planet.y + (planet.radius);
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
    const x2 = planet.x + (planet.radius);
    const y2 = planet.y + (planet.radius);
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

    var frequency = 13.5;
    var seed = (Math.random() * frequency * 15.5) * Math.E;

    //Square Conditionals
    if(dist >= planet.radius - 1) {
        planet.squares.push(new GrassSquare(planet.x + w * 8, planet.y + h * 8, 64, 15, 15));
        planet.mass += 64;
    }else if(dist >= planet.radius - 4) {
        planet.squares.push(new SoilSquare(planet.x + w * 8, planet.y + h * 8, 64));
        planet.mass += 64;
    }else {
        if(perlin.get((w * frequency) + seed, (h * frequency) + seed) <= 0.28){
            planet.squares.push(new RockSquare(planet.x + w * 8, planet.y + h * 8, 64, {"stone": 51, "silica": 49}));
            planet.mass += 64;
        }else {
            var volume = Math.floor(Math.random() * 64) + 1;
            planet.squares.push(new WaterSquare(planet.x + w * 8, planet.y + h * 8, 64, volume));
            planet.mass += volume;
        }
    }
}

export class Planet {
    constructor(x, y, radius, vR) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vR = vR;
        this.rotation = 0;
        this.vx = 0;
        this.vy = 0;
        this.ay = 0;
        this.fx = 0;
        this.fy = 0;
        this.scale = 1;
        this.mass = 0;
        this.squares = [];
    }
    draw(ctx, viewBox) {
        //ctx.save();
        //ctx.translate(this.x + (this.radius * 8), this.y + (this.radius * 8));
        //ctx.rotate((this.rotation * Math.PI) / 180);
        for(var square of this.squares) {
            //if(square.x >= viewBox.x && square.x <= viewBox.x + viewBox.width 
            //&& square.y >= viewBox.y && square.x <= viewBox.y + viewBox.height) {
                square.draw(ctx);
            //}
        }
        //ctx.translate(-(this.x + (this.radius * 8)), -(this.y + (this.radius * 8)));
        //ctx.restore();
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
    makeRandPlanet() {
        this.squares = [];
        var planetD = this.radius * 2;
        for(var h = 0; h < planetD; h++) {
            for(var w = 0; w < planetD; w++) {
                if(getDistCenter(w, h, this)) {
                    getBlock(w, h, this, SquareRegistry);
                }
            }
        }
        return this;
    }
}
//imports
import { SquareRegistry } from "../Square/Square.js";

function determineBlock(h, w, planet) {
    const x2 = planet.x + planet.radius;
    const y2 = planet.y + planet.radius;
    const x1 = planet.x + w;
    const y1 = planet.y + h;
    const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if(dist <= Math.floor(planet.radius / 2)) {
        return "1";
    }else if(dist <= Math.floor(planet.radius / 1.5)){
        return "2";
    }else if(dist <= planet.radius - 1){
        return "3";
    }
}

class Planet {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.blocks = [];
    }
    static makeRandPlanet(planet) {
        for(var h = 0; h < planet.radius * 2; h++) {
            let planet_width = Math.floor(2 * (planet.radius * Math.sin(h/2)));
            let initial_width = planet.radius - planet_width / 2;
            for(var w = initial_width; w < planet_width + initial_width; w++) {
                const determinedBlock = determineBlock(h, w, planet);
                const RockSquare = SquareRegistry.getSquare(1);
                if(determinedBlock > 0) {
                    planet.blocks.push(new RockSquare(w, h, 5, "solid", {"stone": 51, "silica": 49}));
                }
            }
        }
    }
}


var planet1 = new Planet(15, 15, 45);
Planet.makeRandPlanet(planet1);
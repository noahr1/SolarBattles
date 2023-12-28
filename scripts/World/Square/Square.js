class Square {
    constructor(x, y, mass) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.scale = 1;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getListIndex(list) {
        return list.indexOf(this);
    }
    setX(newX) {
        this.x = newX;
    }
    setY(newY) {
        this.y = newY;
    }
    setMass(newMass) {
        this.mass = newMass;
    }
    setMState(newMState) {
        this.matterState = newMState;
    }
}

class SquareRegister {
    constructor() {
        this.squareTypes = [];
    }
    addSquare(listItem) {
        if(typeof listItem == "function") {
            this.squareTypes.push(listItem);
            return this.squareTypes.length - 1;
        }
    }
    removeSquare(index) {
        if(index > -1) {
            this.squareTypes.splice(index, 1);
        }
    }
    getSquare(index) {
        return this.squareTypes[index];
    }
}

const SquareRegistry = new SquareRegister();

Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
}

class RockSquare extends Square {
    constructor(x, y, mass, mineralContent) {
        super(x, y, mass);
        this.mineralContent = mineralContent;
    }
    getMineralContent() {
        return this.mineralContent;
    }
    setMineralContent(newMineralContent) {
        this.mineralContent = newMineralContent;
    }
    draw(ctx) {
        ctx.strokeRect(this.x, this.y, 8, 8);
        ctx.fillStyle = "gray";
        ctx.fillRect(this.x, this.y, 8, 8);
    }
}

class GrassSquare extends Square {
    constructor(x, y, mass, nutrients, moisture) {
        super(x, y, mass);
        this.nutrients = nutrients;
        this.moisture = moisture;
        this.health = 100;
    }
    getNutrients() {
        return this.nutrients;
    }
    setNutrients(nutrients) {
        this.nutrients = nutrients;
    }
    getMoisture() {
        return this.moisture;
    }
    setMoisture(moisture) {
        this.moisture = moisture;
    }
    getHealth() {
        return this.health;
    }
    setHealth(health) {
        this.health = health;
    }
    calcHealth() {
        var helathFactor = this.nutrients + this.moisture * 0.75;
        var deductedHealth = (helathFactor >= 15) ? 15 - helathFactor : -(15 - helathFactor); 
        this.health += deductedHealth;
        this.health.clamp(0, 100);
    }
    draw(ctx) {
        ctx.strokeRect(this.x, this.y, 8, 8);
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, 8, 8);
    }
}

class SoilSquare extends Square {
    constructor(x, y, mass) {
        super(x, y, mass)
    }
    draw(ctx) {
        ctx.strokeRect(this.x, this.y, 8, 8);
        ctx.fillStyle = "rgb(131,101,57)";
        ctx.fillRect(this.x, this.y, 8, 8);
    }
}

class WaterSquare extends Square {
    constructor(x, y, mass, volume) {
        super(x, y, mass);
        this.volume = volume;
    }
    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 8, 8);
    }
}

class OilSquare extends Square {
    constructor(x, y, mass, volume) {
        super(x, y, mass);
        this.volume = volume;
    }
    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, 8, 8);
    }
}

SquareRegistry.addSquare(Square);
SquareRegistry.addSquare(RockSquare);
SquareRegistry.addSquare(GrassSquare);
SquareRegistry.addSquare(SoilSquare);
SquareRegistry.addSquare(WaterSquare);
SquareRegistry.addSquare(OilSquare);

export { SquareRegistry };
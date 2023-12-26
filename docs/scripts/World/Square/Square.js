class Square {
    constructor(x, y, mass, mS) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.matterState = mS;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getMass() {
        return this.mass;
    }
    getMState() {
        return this.matterState;
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

class RockSquare extends Square {
    constructor(x, y, mass, mS, mineralContent) {
        super(x, y, mass, mS);
        this.mineralContent = mineralContent;
    }
    getMineralContent() {
        return this.mineralContent;
    }
    setMineralContent(newMineralContent) {
        this.mineralContent = newMineralContent;
    }
    draw(ctx) {
        ctx.fillRect(this.x, this.y, 8, 8);
    }
}

SquareRegistry.addSquare(Square);
SquareRegistry.addSquare(RockSquare);

module.exports = SquareRegistry;
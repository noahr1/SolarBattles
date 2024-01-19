var Player = /** @class */ (function () {
    function Player(position, dimension, techTree) {
        this.position = position;
        this.viewBox = new ViewBox(this.position, dimension.width, dimension.height);
        this.techTree = techTree;
        this.colonizedPlanets = [];
    }
    return Player;
}());
export { Player };
var Dimension = /** @class */ (function () {
    function Dimension(width, height) {
        this.width = width;
        this.height = height;
    }
    return Dimension;
}());
var ViewBox = /** @class */ (function () {
    function ViewBox(position, width, height) {
        this.position = position;
        this.width = width;
        this.height = height;
    }
    return ViewBox;
}());
var TechTree = /** @class */ (function () {
    function TechTree() {
    }
    return TechTree;
}());

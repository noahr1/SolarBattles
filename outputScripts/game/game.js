var GameObject = /** @class */ (function () {
    function GameObject() {
        this.players = [];
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.update;
        this.render;
        this.animation = -1;
    }
    GameObject.prototype.start = function (init) {
        init();
        if (this.animation == -1) {
            this.animation = window.requestAnimationFrame(this.tick);
            console.log("heyo");
        }
    };
    GameObject.prototype.addPlayer = function (player) {
        GameObject.players.push(player);
    };
    GameObject.prototype.setUpdate = function (callback) {
        GameObject.update = callback;
    };
    GameObject.prototype.setRender = function (callback) {
        GameObject.render = callback;
    };
    GameObject.prototype.tick = function (elapsed) {
        GameObject.animation = window.requestAnimationFrame(GameObject.prototype.tick);
        GameObject.update();
        GameObject.render();
    };
    GameObject.prototype.stop = function () {
        window.cancelAnimationFrame(this.animation);
        GameObject.animation = -1;
    };
    return GameObject;
}());
export { GameObject };

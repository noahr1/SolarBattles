import { GameObject } from "./game/game.js";
var game = new GameObject();
var renderer = document.getElementById("renderer");
;
var ctx = renderer.getContext("2d");
function init() {
}
function render() {
    ctx.clearRect(0, 0, renderer.width, renderer.height);
    ctx.strokeRect(0, 0, renderer.width, renderer.height);
}
function update() {
}
game.setRender(render);
game.setUpdate(update);
game.start(init);

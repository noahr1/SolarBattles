import { GameObject } from "./game/game";

var game = new GameObject();
var renderer = document.getElementById("renderer") as HTMLCanvasElement;;
var ctx = renderer.getContext("2d");

function init() {

}

function render() {

}

function update() {

}

game.setRender(render);
game.setUpdate(update);
game.start(init);
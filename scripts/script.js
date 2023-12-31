import "./World/Square/Square.js";
import "./World/Square/Structure.js";
import { Planet } from "./World/Solar_System/Planet.js";
import { SquareRegistry } from "./World/Square/Square.js";
import { SolarMass } from "./World/Solar_System/SolarMass.js";
import { Astroid } from "./World/Solar_System/Astroid.js";

var renderer = document.getElementById("renderer");
var ctx = renderer.getContext("2d");
var running = true;

var planet = new Planet(100, 100, 24, 1)
    .makeRandPlanet();

var astroid = new Astroid(450, 500, 10)
    .makeRandAstroid();
var sun = new SolarMass(650, 300, 150, 5, 35, "red");

function init() {
    //game instance setup
    //renderer.style.width = `${document.body.clientWidth}px`;
    //renderer.style.height = `${document.body.clientHeight}px`;
    renderer.width = Math.floor(document.body.clientWidth * 0.75);
    renderer.height = Math.floor(document.body.clientHeight * 0.75);
    ctx.transform(1, 0, 0, -1, 0, renderer.height);

    console.log(planet);
    console.log(astroid);
    console.log(SquareRegistry);
    requestAnimationFrame(tick);
}

function update() {
    planet.update(1);
}

function render() {
    var viewBox = {x: 0, y: 0, width: renderer.width, height: renderer.height};
    ctx.strokeRect(0, 0, renderer.width, renderer.height);
    planet.draw(ctx, viewBox);
    sun.draw(ctx, viewBox);
    astroid.draw(ctx, viewBox);
}

//event listeners
window.addEventListener("keydown", (e) => {

});

window.addEventListener("keyup", (e) => {
    
});

renderer.addEventListener("mousemove", (e) => {

});

renderer.addEventListener("wheel", (e) => {
    
});

//window resize handler
function resize() {
    //renderer.style.width = `${document.body.clientWidth}px`;
    //renderer.style.height = `${document.body.clientHeight}px`;
    renderer.width = Math.floor(document.body.clientWidth * 0.75);
    renderer.height = Math.floor(document.body.clientHeight * 0.75);

    ctx.transform(1, 0, 0, -1, 0, renderer.height);
}

window.addEventListener("resize", resize);

function tick() {
    ctx.clearRect(0, 0, renderer.width, renderer.height);
    update();
    render();
    if(running) {
        requestAnimationFrame(tick);
    }
}

init();
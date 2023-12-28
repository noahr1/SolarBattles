import "./World/Square/Square.js";
import { Planet } from "./World/Solar_System/Planet.js";
import { SquareRegistry } from "./World/Square/Square.js";

var renderer = document.getElementById("renderer");
var ctx = renderer.getContext("2d");
var running = true;

var planet = new Planet(100, 100, 24);

function init() {
    //game instance setup
    //renderer.style.width = `${document.body.clientWidth}px`;
    //renderer.style.height = `${document.body.clientHeight}px`;
    const scale = window.devicePixelRatio;
    renderer.width = Math.floor(document.body.clientWidth * scale);
    renderer.height = Math.floor(document.body.clientHeight * scale);
    ctx.transform(1, 0, 0, -1, 0, renderer.height);

    Planet.makeRandPlanet(planet);
    console.log(planet);
    console.log(SquareRegistry);
    requestAnimationFrame(tick);
}

function update() {
    planet.update();
}

function render() {
    ctx.strokeRect(0, 0, renderer.width, renderer.height);
    planet.draw(ctx, {x: 50, y: 50, width: 450, height: 150});
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
    const scale = window.devicePixelRatio;
    renderer.width = Math.floor((document.body.clientWidth * 0.75) * scale);
    renderer.height = Math.floor((document.body.clientHeight * 0.75) * scale);

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
import "./Utils/utils.js";

var renderer = document.getElementById("renderer");
var ctx = renderer.getContext("2d");
var running = true;
export var gSize = 8;

function init() {
    //game instance setup
    //renderer.style.width = `${document.body.clientWidth}px`;
    //renderer.style.height = `${document.body.clientHeight}px`;
    renderer.width = Math.floor(document.body.clientWidth * 0.75);
    renderer.height = Math.floor(document.body.clientHeight * 0.75);
    ctx.transform(1, 0, 0, -1, 0, renderer.height);


    requestAnimationFrame(tick);
}

function update() {
    
}

function render() {

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
import "./World/Square/Square.js";

var renderer = document.getElementById("renderer");
var ctx = renderer.getContext("2d");
var running = true;

function init() {
    //game instance setup
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

function tick() {
    ctx.clearRect(0, 0, renderer.width, renderer.height);
    update();
    render();
    if(running) {
        requestAnimationFrame(tick);
    }
}

init();
var Directions = {
    "north": 0,
    "south": 180,
    "west": 90,
    "east": 270
};

var Model = {
    width: 8,
    height: 17,
    states: {
        "idle": {
            "model": resourceLoader("../../../assets/structures/example.png")
        }
    }
};

var StructureBinaryData = {
    "direction": "north",
    "status": "idle",
    "recipes": [],
    "name": ""
};

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

class Structure {
    constructor(x, y, model, sbd, gui=null) {
        this.x = x;
        this.y = y;
        this.model = model;
        this.sbd = sbd;
        this.gui = gui;
    }
    tick() {
        
    }
    right_click() {
        if(this.gui != null) {
            this.gui.setVisible(true);
        }
    }
    close_gui() {
        if(this.gui != null) {
            this.gui.setVisible(false);
        }
    }
    draw(ctx) {
        //save the canvas before meddling
        ctx.save();
        ctx.translate(this.x + this.model.width / 2, this.y + this.model.height / 2);
        ctx.rotate(degreesToRadians(Directions[this.sbd["direction"]]));
        ctx.translate(-this.x + this.model.width / 2, this.y + this.model.height / 2);
        //draw the structure
        ctx.drawImage(this.model.states[this.sbd["status"]][this.sbd["direction"]], this.x, this.y);
        //restore the saved canvas
        ctx.restore();
    }
}
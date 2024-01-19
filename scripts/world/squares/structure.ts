import { GraphicGui } from "../../game/gui/gui";

var Directions = {
    "north": 0,
    "south": 180,
    "west": 90,
    "east": 270
};

/*{
    "states": {
        "idle": {
            "model": "ModelA"
        },
        "active": {
            "model": "ModelB"
        }
    },
    "textures": {
        "ModelA": path to texture,
        "ModelB": path to texture
    }
}*/

function blankSBD() {
    return {
        "direction": "north",
        "status": "idle",
        "recipes": [],
        "name": ""
    }
}

function degreesToRadians(degrees: number) {
    return degrees * Math.PI / 180;
}

function ModelParsing(json: string) {
    
}

class Structure {
    x: number;
    y: number;
    model: string;
    sbd: object;
    gui: GraphicGui;
    constructor(x: number, y: number, model: string, sbd: object, gui:GraphicGui=null) {
        this.x = x;
        this.y = y;
        this.model = model;
        this.sbd = sbd;
        this.gui = gui!;
    }
    draw(ctx: CanvasRenderingContext2D) {
        //save the canvas before meddling
        //ctx.save();
        //ctx.translate(this.x + this.model.width / 2, this.y + this.model.height / 2);
        //ctx.rotate(degreesToRadians(Directions[this.sbd["direction"]]));
        //ctx.translate(-this.x + this.model.width / 2, -this.y + this.model.height / 2);
        //draw the structure
        //ctx.drawImage(this.model.states[this.sbd["status"]]["model"], this.x, this.y);
        //restore the saved canvas
        //ctx.restore();
    }
}

class Weapon extends Structure {
    constructor(x, y, model, sbd, gui=null) {
        super(x, y, model, sbd, gui);
    }
}
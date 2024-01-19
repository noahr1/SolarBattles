var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    };
}
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
function ModelParsing(json) {
}
var Structure = /** @class */ (function () {
    function Structure(x, y, model, sbd, gui) {
        if (gui === void 0) { gui = null; }
        this.x = x;
        this.y = y;
        this.model = model;
        this.sbd = sbd;
        this.gui = gui;
    }
    Structure.prototype.draw = function (ctx) {
        //save the canvas before meddling
        //ctx.save();
        //ctx.translate(this.x + this.model.width / 2, this.y + this.model.height / 2);
        //ctx.rotate(degreesToRadians(Directions[this.sbd["direction"]]));
        //ctx.translate(-this.x + this.model.width / 2, -this.y + this.model.height / 2);
        //draw the structure
        //ctx.drawImage(this.model.states[this.sbd["status"]]["model"], this.x, this.y);
        //restore the saved canvas
        //ctx.restore();
    };
    return Structure;
}());
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(x, y, model, sbd, gui) {
        if (gui === void 0) { gui = null; }
        return _super.call(this, x, y, model, sbd, gui) || this;
    }
    return Weapon;
}(Structure));
export {};

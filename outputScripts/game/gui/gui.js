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
import { Vector } from "../../utilities/vectors";
var GraphicStates;
(function (GraphicStates) {
    GraphicStates[GraphicStates["open"] = 0] = "open";
    GraphicStates[GraphicStates["closed"] = 1] = "closed";
    GraphicStates[GraphicStates["pinned"] = 2] = "pinned";
})(GraphicStates || (GraphicStates = {}));
;
;
var HoverableTooltip = /** @class */ (function () {
    function HoverableTooltip() {
    }
    return HoverableTooltip;
}());
var GraphicComponent = /** @class */ (function () {
    function GraphicComponent(position, width, height, state, isScreen) {
        var _this = this;
        this.position = position;
        this.width = width;
        this.height = height;
        this.state = state;
        this.content = [];
        this.isScreen = isScreen;
        //creation of pin button and close button
        if (!this.isScreen) {
            this.addButton(new Vector(this.position.x + (this.width - 20), this.position.y + this.height), {
                text: "x",
                backgroundImage: "",
                width: "20px",
                height: "20px",
                border: "solid 1px black",
                backgroundColor: "gray"
            }, function () {
                _this.state = GraphicStates.closed;
                _this.updateComponent();
            });
            this.addButton(new Vector(this.position.x + (this.width - 40), this.position.y + this.height), {
                text: "",
                backgroundImage: "url(../../../resources/assets/guis/graphic_componenet_pin.png)",
                width: "20px",
                height: "20px",
                border: "solid 1px black",
                backgroundColor: "gray"
            }, function () {
                _this.state = (_this.state === GraphicStates.open) ? GraphicStates.pinned : GraphicStates.open;
                _this.updateComponent();
            });
        }
    }
    GraphicComponent.prototype.addButton = function (position, properties, callback) {
        var button = document.createElement("button");
        if (properties.text !== "") {
            button.appendChild(document.createTextNode(properties.text));
        }
        else if (properties.backgroundImage !== null) {
            button.style.backgroundImage = properties.backgroundImage;
        }
        if (properties.border !== "") {
            button.style.border = properties.border;
        }
        if (properties.backgroundColor !== "") {
            button.style.backgroundColor = properties.backgroundColor;
        }
        if (properties.width !== "") {
            button.style.width = properties.width;
        }
        if (properties.height !== "") {
            button.style.height = properties.height;
        }
        button.onclick = callback;
        this.content.push(button);
        return this;
    };
    GraphicComponent.prototype.addText = function () {
    };
    GraphicComponent.prototype.addLine = function () {
    };
    GraphicComponent.prototype.updateComponent = function () {
        if (this.state == GraphicStates.closed) {
            this.content.forEach(function (element) { return element.style.display = "none"; });
        }
        else if (this.state == GraphicStates.open) {
            this.content.forEach(function (element) { return element.style.display = "block"; });
        }
        else {
        }
    };
    return GraphicComponent;
}());
var GraphicGui = /** @class */ (function (_super) {
    __extends(GraphicGui, _super);
    function GraphicGui(positions, width, height, state) {
        return _super.call(this, positions, width, height, state, false) || this;
    }
    GraphicGui.prototype.setVisible = function (visibility) {
        if (visibility) {
            this.state = GraphicStates.open;
        }
        else {
            this.state = GraphicStates.closed;
        }
    };
    GraphicGui.prototype.addSlot = function () {
    };
    GraphicGui.prototype.addProgress = function () {
    };
    return GraphicGui;
}(GraphicComponent));
export { GraphicGui };
var GameScreen = /** @class */ (function () {
    function GameScreen() {
    }
    return GameScreen;
}());

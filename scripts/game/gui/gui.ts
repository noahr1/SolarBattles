import { Vector } from "../../utilities/vectors";

enum GraphicStates {
    open = 0,
    closed = 1,
    pinned = 2
};

interface ButtonProperties {
    text: string;
    backgroundImage: string;
    width: string;
    height: string;
    border: string;
    backgroundColor: string;
};

class HoverableTooltip {
    constructor() {
        
    }
}

class GraphicComponent {
    position: Vector;
    width: number;
    height: number;
    state: GraphicStates;
    content: Array<HTMLElement>;
    isScreen: boolean;
    constructor(position: Vector, width: number, height: number, state: GraphicStates, isScreen: boolean) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.state = state;
        this.content = [];
        this.isScreen = isScreen;

        //creation of pin button and close button
        if(!this.isScreen) {
            this.addButton(new Vector(this.position.x + (this.width - 20), this.position.y + this.height), {
                text: "x",
                backgroundImage: "",
                width: "20px",
                height: "20px",
                border: "solid 1px black",
                backgroundColor: "gray"
            }, () => {
                this.state = GraphicStates.closed;
                this.updateComponent();
            });
            this.addButton(new Vector(this.position.x + (this.width - 40), this.position.y + this.height), {
                text: "",
                backgroundImage: "url(../../../resources/assets/guis/graphic_componenet_pin.png)",
                width: "20px",
                height: "20px",
                border: "solid 1px black",
                backgroundColor: "gray"
            }, () => {
                this.state = (this.state === GraphicStates.open) ? GraphicStates.pinned : GraphicStates.open;
                this.updateComponent();
            });
        }
    }
    addButton(position: Vector, properties: ButtonProperties, callback: ((this: GlobalEventHandlers, ev: MouseEvent) => any)): GraphicComponent {
        let button = document.createElement("button");
        if(properties.text !== "") {
            button.appendChild(document.createTextNode(properties.text));
        }else if(properties.backgroundImage !== null){
            button.style.backgroundImage = properties.backgroundImage;
        }
        if(properties.border !== "") {
            button.style.border = properties.border;
        }
        if(properties.backgroundColor !== "") {
            button.style.backgroundColor = properties.backgroundColor;
        }
        if(properties.width !== "") {
            button.style.width = properties.width;
        }
        if(properties.height !== "") {
            button.style.height = properties.height;
        }
        button.onclick = callback;
        this.content.push(button);
        return this;
    }
    addText() {

    }
    addLine() {

    }
    updateComponent(): void {
        if(this.state == GraphicStates.closed) {
            this.content.forEach(element => element.style.display = "none");
        }else if(this.state == GraphicStates.open) {
            this.content.forEach(element => element.style.display = "block");
        }else {

        }
        
    }
}

export class GraphicGui extends GraphicComponent{
    constructor(positions: Vector, width: number, height: number, state: GraphicStates) {
        super(positions, width, height, state, false);
    }
    setVisible(visibility: boolean) {
        if(visibility) {
            this.state = GraphicStates.open;
        }else {
            this.state = GraphicStates.closed;
        }
    }
    addSlot() {

    }
    addProgress() {

    }
}

class GameScreen {
    constructor() {
        
    }
}
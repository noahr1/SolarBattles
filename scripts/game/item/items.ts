import { Vector } from "../../utilities/vectors";

export class Item {
    position: Vector;
    texture: CanvasImageSource;
    constructor(position: Vector, texture: CanvasImageSource) {
        this.position = position;
        this.texture = texture;
    }
    getTexture(): CanvasImageSource {
        return this.texture;
    }
}

class MaterialItem extends Item{
    constructor(position: Vector, texture: CanvasImageSource) {
        super(position, texture);
    }
}

class ComponentItem extends Item{
    constructor(position: Vector, texture: CanvasImageSource) {
        super(position, texture);
    }
}

class MechanismItem extends Item{
    constructor(position: Vector, texture: CanvasImageSource) {
        super(position, texture);
    }
}

class StructureItem extends Item{
    constructor(position: Vector, texture: CanvasImageSource) {
        super(position, texture);
    }
}

class ToolItem extends Item {
    constructor(position: Vector, texture: CanvasImageSource) {
        super(position, texture);
    }
}
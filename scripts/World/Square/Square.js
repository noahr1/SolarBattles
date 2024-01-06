import { gSize } from "../../script.js";
import { Register } from "./register.js";

var PropertyRegistry = new Register()
    .add("mass")
    .add("color")
    .add("nutrients")
    .add("volume");

class Property {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}

class Properties {
    constructor() {
        this.properties = [];
    }
    addProperty(property) {
        this.properties.push(property);
    }
    createProperty(key, value) {
        this.properties.push(new Property(key, value));
    }
    addMultiProperties(properties) {
        for(var property of properties) {
            this.properties.push(property);
        }
    }
    cloneProperty(key, clone) {
        var property = this.getProperty(key);
        clone.property = property;
    }
    cloneProperties(clone) {
        clone.properties = this.properties;
    }
    copyProperty(key) {
        var property = this.getProperty(key);
        return property;
    }
    copyProperties() {
        return this.properties;
    }
    getLength() {
        return this.properties.length;
    }
    getProperty(key) {
        for(var property of this.properties) {
            if(property.key == key){
                return property.value;
            }
        }
    }
}

class Square {
    constructor(x, y, properties=[]) {
        this.x = x;
        this.y = y;
        this.scale = 1;
        this.size = gSize * this.scale;
        this.cx = x + this.size / 2;
        this.cy = y + this.size / 2;
        this.vx = 0;
        this.vy = 0;
        this.fx = 0;
        this.fy = 0;
        this.properties = properties;
    }
    update() {
        var ax = 0, ay = 0;
        if(this.properties.getLength()) {
            ax = fx / this.properties.getProperty("mass");
            ay = fy / this.properties.getProperty("mass");
        }

        this.vx += ax;
        this.vy += ay;

        this.x += this.vx;
        this.y += this.vy;

        this.size *= this.scale;
    }
    applyForce(fx, fy) {
        this.fx += fx;
        this.fy += fy;
    }
    draw(ctx) {
        ctx.fillStyle = this.properties.getProperty("color");
        ctx.fillRect(this.x, this.y , this.size, this.size);
    }
}


export { Square };
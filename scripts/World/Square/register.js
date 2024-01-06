export class Register {
    constructor() {
        this.list = [];
    }
    add(listItem) {
        this.list.push(listItem);
        return this;
    }
    remove(index) {
        this.list.splice(index, 1);
    }
    get(index) {
        return this.list[index];
    }
}
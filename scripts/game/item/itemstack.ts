import { Vector } from "../../utilities/vectors";
import { Item } from "./items";

export const maxStack = 64;

export class ItemStack {
    item: Item;
    count: number;
    position: Vector;
    constructor(item: Item, count: number, position: Vector) {
        this.item = item;
        this.count = count;
        this.position = position;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        //draw the item in stack
        ctx.drawImage(this.item.getTexture(), this.position.x, this.position.y, 16, 16);

        //draw the item count
        ctx.fillText(this.count.toString(), this.position.x + 8, this.position.y);
    }
    merge(itemstack: ItemStack): Boolean {
        if(this.item == itemstack.item) {
            if(itemstack.count + this.count < maxStack) {
                this.count += itemstack.count;
                return true;
            }else {
                return false;
            }
        }else {
            return false;
        }
    }
    //needs to be updated
    divide(stacks: Array<ItemStack>, cursorStack: ItemStack): Array<ItemStack> {
        let Stacks = stacks;
        for(var s = 0; s < stacks.length; s++) {
            if(stacks[s].item !== cursorStack.item) {
                Stacks.splice(s, 1);
            }
        }
        let perslot = Math.floor(cursorStack.count / Stacks.length);
        for(let stack of Stacks) {
            let returnCount = stack.add(perslot);
            cursorStack.count -= (perslot - returnCount);
        }
        return Stacks;
    }
    split(count: number, position: Vector): ItemStack {
        var newstack:ItemStack;
        if(this.count > count) {
            this.count -= count;
            newstack = new ItemStack(this.item, count, position);
        }
        return newstack;
    }
    add(count: number): number {
        this.count = (count + this.count > maxStack) ? this.count = maxStack : this.count += count;
        return (count > maxStack) ? count - maxStack : 0;
    }
    remove(count: number): Boolean {
        if(count >= this.count) {
            return true;
        }else {
            this.count -= count;
            return false;
        }
    }
    get(): Item {
        return this.item;
    }
}
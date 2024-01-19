export var maxStack = 64;
var ItemStack = /** @class */ (function () {
    function ItemStack(item, count, position) {
        this.item = item;
        this.count = count;
        this.position = position;
    }
    ItemStack.prototype.draw = function (ctx) {
        //draw the item in stack
        ctx.drawImage(this.item.getTexture(), this.position.x, this.position.y, 16, 16);
        //draw the item count
        ctx.fillText(this.count.toString(), this.position.x + 8, this.position.y);
    };
    ItemStack.prototype.merge = function (itemstack) {
        if (this.item == itemstack.item) {
            if (itemstack.count + this.count < maxStack) {
                this.count += itemstack.count;
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    //needs to be updated
    ItemStack.prototype.divide = function (stacks, cursorStack) {
        var Stacks = stacks;
        for (var s = 0; s < stacks.length; s++) {
            if (stacks[s].item !== cursorStack.item) {
                Stacks.splice(s, 1);
            }
        }
        var perslot = Math.floor(cursorStack.count / Stacks.length);
        for (var _i = 0, Stacks_1 = Stacks; _i < Stacks_1.length; _i++) {
            var stack = Stacks_1[_i];
            var returnCount = stack.add(perslot);
            cursorStack.count -= (perslot - returnCount);
        }
        return Stacks;
    };
    ItemStack.prototype.split = function (count, position) {
        var newstack;
        if (this.count > count) {
            this.count -= count;
            newstack = new ItemStack(this.item, count, position);
        }
        return newstack;
    };
    ItemStack.prototype.add = function (count) {
        this.count = (count + this.count > maxStack) ? this.count = maxStack : this.count += count;
        return (count > maxStack) ? count - maxStack : 0;
    };
    ItemStack.prototype.remove = function (count) {
        if (count >= this.count) {
            return true;
        }
        else {
            this.count -= count;
            return false;
        }
    };
    ItemStack.prototype.get = function () {
        return this.item;
    };
    return ItemStack;
}());
export { ItemStack };

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
var Item = /** @class */ (function () {
    function Item(position, texture) {
        this.position = position;
        this.texture = texture;
    }
    Item.prototype.getTexture = function () {
        return this.texture;
    };
    return Item;
}());
export { Item };
var MaterialItem = /** @class */ (function (_super) {
    __extends(MaterialItem, _super);
    function MaterialItem(position, texture) {
        return _super.call(this, position, texture) || this;
    }
    return MaterialItem;
}(Item));
var ComponentItem = /** @class */ (function (_super) {
    __extends(ComponentItem, _super);
    function ComponentItem(position, texture) {
        return _super.call(this, position, texture) || this;
    }
    return ComponentItem;
}(Item));
var MechanismItem = /** @class */ (function (_super) {
    __extends(MechanismItem, _super);
    function MechanismItem(position, texture) {
        return _super.call(this, position, texture) || this;
    }
    return MechanismItem;
}(Item));
var StructureItem = /** @class */ (function (_super) {
    __extends(StructureItem, _super);
    function StructureItem(position, texture) {
        return _super.call(this, position, texture) || this;
    }
    return StructureItem;
}(Item));
var ToolItem = /** @class */ (function (_super) {
    __extends(ToolItem, _super);
    function ToolItem(position, texture) {
        return _super.call(this, position, texture) || this;
    }
    return ToolItem;
}(Item));

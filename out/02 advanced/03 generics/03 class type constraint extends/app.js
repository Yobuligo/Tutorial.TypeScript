"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../../GlobalFunctions");
/**
 * This class is responsible for containing a node
 * The node must be of type 'INode'.
 * In addition it should be possible to have type safe access to additional node messages.
 * Therefore the generic type 'T' is introduced.
 * By using 'extends INode' it is defined that the type must be of type INode
 */
var NodeContainer = /** @class */ (function () {
    function NodeContainer(node) {
        this.node = node;
    }
    return NodeContainer;
}());
/**
 * This class represents a node and it is printable
 */
var Node = /** @class */ (function () {
    function Node(name) {
        this.name = name;
    }
    Node.prototype.print = function () {
        (0, GlobalFunctions_1.println)("Name of the node is '".concat(this.name, "'"));
    };
    return Node;
}());
// the node container only takes objects of type 'INode'
var nodeContainer = new NodeContainer(new Node("Root"));
// the contained node is a node but also printable, thanks to generics we can call 'print' type safe
nodeContainer.node.print();
//# sourceMappingURL=app.js.map
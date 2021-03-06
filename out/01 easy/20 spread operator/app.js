"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
// Copy all values from one array in another
let values = ["one", "two", "three"];
let values2 = [...values];
(0, GlobalFunctions_1.println)(values2);
// provides the possibility to hand over elements as varargs to e.g. a constructor
class List {
    constructor(...elements) {
        this.elements = [];
        this.elements = elements;
    }
    printList() {
        (0, GlobalFunctions_1.println)(this.elements);
    }
}
// hand over single value
let list = new List(1);
list.printList();
// hand over several single values
list = new List(1, 2, 3, 4, 5);
list.printList();
// hand over an array to a spread operator which was defined before
const elements = [11, 12, 13, 14, 15];
list = new List(...elements);
list.printList();
// hand over an array to a spread operator
list = new List(...[11, 12, 13, 14, 15]);
list.printList();
//# sourceMappingURL=app.js.map
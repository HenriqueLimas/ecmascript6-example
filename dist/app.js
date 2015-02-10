"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Person = _interopRequire(require("./modules/person"));

var lukeSkywalker = new Person("Luke", "Skywalker");

console.log("First name", lukeSkywalker.firstName);
console.log("Last name", lukeSkywalker.lastName);
console.log("Full name", lukeSkywalker.fullName);
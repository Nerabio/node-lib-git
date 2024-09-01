"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.sayHello = function (name) {
        return "Hey ".concat(name, ", say hello to TypeScript.");
    };
    return App;
}());
exports.App = App;

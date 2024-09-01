"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
module.exports = function () {
    return {
        init: () => {
            console.log('I am MODULE init()');
        }
    };
};
class Config {
    init() {
        console.log('I am Config init()');
    }
}
exports.Config = Config;

// module.exports = function(){
//     return {
//         init: () => {
//             console.log('I am MODULE init()');
//         }
//     }
// }
// export class Config {
//     init(): void {
//         console.log('I am Config init()');
//     }
// }
var cl = require('./ContactChecker');
var loggg = function () {
    console.log('I am MODULE');
};
module.exports = { loggg: loggg, cl: cl };

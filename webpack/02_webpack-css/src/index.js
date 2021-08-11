// 使用 ES6 导出的模块
import { sum } from "./js/math";
// 使用 CommonJS 导出的模块
const {priceFormat} = require('./js/format');

import "./js/element";

console.log(sum(20,30));
console.log(priceFormat());
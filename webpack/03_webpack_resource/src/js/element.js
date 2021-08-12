// import "css-loader!../css/style.css"
import "../css/style.css"
import "../css/title.less"
import "../css/image.css"

import firstImage from "../img/1.jpg"

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊，李银河";

// 设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

// 设置img元素的src
const imgEl = document.createElement('img');
imgEl.src = firstImage;

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
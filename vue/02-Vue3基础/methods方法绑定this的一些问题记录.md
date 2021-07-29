官方文档写道：不应该是用箭头函数来定义 method 函数(例如： plus: () => this.a++)。<br>
理由是：箭头函数绑定了父级作用域的上下文，所以 this 将不会照期望指向组件实例， this.a 将是 undefined。
### 问题一：为什么不能使用箭头函数
如果我们使用了箭头函数，那么引用的this就是window对象，而window对象中，我们无法获取到data返回对象中的数据；<br>
this为window对象的原因：箭头函数中的this会在自己的上层作用域中来查找this，最终刚好找到的是 script 作用域中的this，所以就是window。
<br><br>
结论：在箭头函数中是不绑定 this 的
### 问题二：不适用箭头函数的情况下，this到底指向的是什么？
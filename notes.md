### 虚拟DOM
#### 没有虚拟dom时react的渲染方式： 
1. 创建state数据
2. JSX格式的template模板
3. 利用数据和模板渲染出真实的DOM，
    比如 `<div id="dd"><span>hello,xiang</span></div>`
4. 当state发生改变时，
5. 用新的数据和模板构造一个dom片段，htmlFragment
5. 对比fragment和已经渲染出的DOM中的区别。
6. 将有差异的地方重新进行替换和渲染。
#### 有虚拟dom时react的渲染方式： 
1. 创建state数据
2. JSX格式的template模板
3. 利用数据和模板构造一个虚拟DOM（一个JS对象），例如 `['div',{id: 'dd'},['span',{},'hello,xiang']]`
4. 根据该对象渲染出真实的DOM，
     `<div><span>hello,xiang</span></div>`
4. 当state发生改变时，
5. 用新的数据和模板构造一个新虚拟DOM，`['div',{id: 'dd'},['span',{},'hello,fenfen']]` （此处性能提升）
5. 对比新的虚拟DOM和原始的虚拟DOM的区别，找到span中的内容不同
6. 直接操作DOM改变span中的内容（此处性能大幅度提升）
#### React-Native相关
为什么react可以做原生app的应用，因为有了虚拟DOM后，浏览器端根据这个JS对象生成dom片段，在原生的app端可以根据这个JS对象生成app所需要的对应的html内容。所以可以跨端开发。
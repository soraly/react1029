### 虚拟DOM
#### 没有虚拟dom时react的渲染方式： 
1. 创建state数据
2. JSX格式的template模板
3. 利用数据和模板渲染出真实的DOM，
    比如 `<div id="dd"><span>hello,xiang</span></div>`
4. 当state发生改变时，
5. 用新的数据和模板构造一个dom片段，htmlFragment
5. 对比fragment和已经渲染出的DOM中的区别。（比较耗时）
6. 将有差异的地方重新进行替换和渲染。
#### 有虚拟dom时react的渲染方式： 
1. 创建state数据
2. JSX格式的template模板
3. 利用数据和模板构造一个虚拟DOM（一个JS对象），例如 `['div',{id: 'dd'},['span',{},'hello,xiang']]`
4. 根据该对象渲染出真实的DOM，
     `<div id="dd"><span>hello,xiang</span></div>`
4. 当state发生改变时，
5. 用新的数据和模板构造一个新虚拟DOM，`['div',{id: 'dd'},['span',{},'hello,fenfen']]` （此处性能提升）
5. 对比新的虚拟DOM和原始的虚拟DOM的区别，找到span中的内容不同（此处性能大幅度提升）
6. 直接操作DOM改变span中的内容
#### React-Native相关
为什么react可以做原生app的应用，因为有了虚拟DOM后，浏览器端根据这个JS对象生成dom片段，在原生的app端可以根据这个JS对象生成app所需要的对应的html内容。所以可以跨端开发。
#### react虚拟DOM，diff算法包括但不限于：
1. 同层比对：先比较2个虚拟dom最外层的元素，如果不相等就直接替换。虽然可能下层有些相同的dom也被替换了，但是这样替换简单粗暴，比较的效率比较高。
2. setState使用异步函数：如果连续有三个setState语句，同步执行会导致渲染三遍，异步的话，就可以合并三个setState语句，然后只更新一次dom。
3. key不建议用index。比如视图是根据数据渲染的，比如三个li根据[1,2,3]来渲染，如果删除第二个元素后，3的key值也会发生变化。这样2个虚拟dom的对象进行对比时就会误以为3也发生了变化从而进行重新渲染。

#### 生命周期
生命周期函数是指在某一个时刻组件会自动调用执行的函数
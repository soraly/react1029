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
1. 生命周期函数是指在某一个时刻组件会自动调用执行的函数
2. 提过性能的方式：父组件的render函数执行时子组件render也会执行，比较浪费资源，可以利用shouldComponentUpdate来禁止子组件的更新。
3. ajax一般放在componentDidMount函数里面，因为这个函数只执行一遍

###UI组件和容器组件
UI组件负责页面的渲染，容器组件负责页面的逻辑

#### 无状态组件
1. 只有render函数的组件，只负责页面渲染。
2. 如果能用无状态组件，就尽量用无状态。因为这种组件只有render函数，没有各种生命周期函数，渲染起来比较快。

### reducer
reducer输出一个纯函数，指给固定的输入，就有固定的输出，而且不会有任何副作用（对输入参数不会修改）。有ajax。setTimeout newDate这些就不行

### redux中间件
中间件存在于action和store之间
redux_thunk就是升级了dispatch方法，本来dispacth只能接收一个对象，用了thunk后不仅可以接收对象，还可以接收一个函数并去执行他
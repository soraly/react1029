import React from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { createStore } from 'redux'
import reducer from './thinkReact/recucer'
import { getInputChangeAction } from './thinkReact/createAction'

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
setTimeout(()=>{
    console.log('sss')
    store.dispatch({type: 'checkbox_change'})
},3000)

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

// 通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：
// 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
// 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
// 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。

//搜索词和复选框的值应该是 state，因为他们会随时间发生改变而且无法由其他数据计算而来。

//如何找到state
//1. Identify every component that renders something based on that state.
//2. Find a common owner component(a single component above all the component that needs the state in the hierarchy（层级）)
//3. Either the common owner or anthor component higher up in the hierarchy should own the state.
//4. If you can't find a component where it make sense to own the state, create a new component solely for holding the
//   state and add it somewhere in the hierarchy above the common owner component. 

class FilterableProductTable extends React.Component {
    constructor() {
        super()
        this.state = { filterText: '', inStockOnly: false }
    }
    handleTextChange(value) {
        this.setState({ filterText: value })
    }
    handleStockChange(value) {
        this.setState({ inStockOnly: value })
    }
    render() {
        return (
            <div>
                <Searchbar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onTextChange={this.handleTextChange.bind(this)}
                    onStockChange={this.handleStockChange.bind(this)}
                />
                <ProductTable
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    products={PRODUCTS}></ProductTable>
            </div>
        )
    }
}
class Searchbar extends React.Component {
    constructor() {
        super();
        this.state = store.getState();
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleTextChange(event) {
        const action = getInputChangeAction(event.target.value);
        console.log(action, 'action')
        store.dispatch(action)
    }
    handleStockChange(event) {
        if (this.props.onStockChange) {
            this.props.onStockChange(event.target.checked)
        }
    }
    render() {
        return (
            <div style={{ width: 300, marginTop: 20 }}>
                <form action="">
                    <Input type="text" placeholder="search sth" value={this.state.filterText} onChange={this.handleTextChange} />
                    <p style={{ margin: 0 }}>
                        <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleStockChange.bind(this)} /> {' '}Only show products in stock
                    </p>
                </form>
            </div>
        )
    }
}
class ProductTable extends React.Component {
    render() {
        var lastCategory = '', list = [];
        this.props.products.forEach((product, index) => {
            if (lastCategory != product.category) {
                list.push(<ProductCategoryRow key={product.category} category={product.category} />)
                lastCategory = product.category
            }

            if (this.props.inStockOnly && !product.stocked) { return }
            !!~product.name.indexOf(this.props.filterText) && list.push(<ProductRow key={product.name} product={product} />)
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        )
    }
}
class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan='2'>{this.props.category}</th>
            </tr>
        )
    }
}
class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <tr>
                <th className={!product.stocked ? 'red' : ''}>{product.name}</th>
                <th>{this.props.product.price}</th>
            </tr>
        )
    }
}


export default FilterableProductTable

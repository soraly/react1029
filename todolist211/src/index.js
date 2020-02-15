import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


function getArgs (func) {
    // First match everything inside the function argument parens.
    const args = ('function '+func.toString()).match(/function.*?\(([^)]*)\)/)[1]
    // Split the arguments string into an array comma delimited.
    return args
      .split(',')
      .map(function (arg) {
        // Ensure no inline comments are parsed and trim the whitespace.
        return arg.replace(/\/\*.*\*\//, '').trim()
      })
      .filter(function (arg) {
        // Ensure no undefined values are added.
        return arg
      })
  }
  
  function testable(target,name, descriptor){
    const originFunction = descriptor.value;
  
    const originFunctionArguments = getArgs(originFunction);
    descriptor.value = function () {
      let newFunctionAruments = []
      originFunctionArguments.map(argument => {
        if (argument[0] === argument[0].toUpperCase()) {
          let bean = void 0
          if (argument == 'Link') {
            bean = 'this is link func'
          } else {
            bean = 'this is age func'
          }
          bean && newFunctionAruments.push(bean)
        }
      })
      if (arguments.length) {
        newFunctionAruments = [...newFunctionAruments, ...Array.from(arguments)]
      }
      return originFunction.apply(this, newFunctionAruments)
    }
    
    return descriptor
  
  }
  
  class Lzx {
    constructor(){
      this.sayHello('xixi')
    }
  
    @testable
    sayHello(Link,Age,other){
      
    }
  }
  var xiang = new Lzx()
import React from 'react';
import logo from './logo.svg';
import './App.css';


function getArgs (func) {
  console.log('function '+func.toString(),'func')
  // First match everything inside the function argument parens.
  const args = ('function '+func.toString()).match(/function.*?\(([^)]*)\)/)[1]
  // Split the arguments string into an array comma delimited.
  console.log(args,'args')
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
  console.log(originFunctionArguments,'originFunctionArguments')
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
    console.log(newFunctionAruments,'newFunctionAruments')
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
    console.log(Link,Age,'Link,age');
    console.log(other,'other')
  }
}
var xiang = new Lzx()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

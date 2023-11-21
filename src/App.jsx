import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      count:0
    }
  }
  increment = ()=>{
    this.setState({count: this.state.count + 1})
  }
  decrement = ()=>{
    if(this.state.count>0){
      this.setState({count: this.state.count - 1})
    }
    console.log("-1")
  }
  reset=()=>{
    
    this.setState({count:this.state.count=0})
  }

  render(){
    return(
      <>
        <h1>Counter App</h1>
        <p>{this.state.count}</p>
        <div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.reset}>Reset</button>
        </div>
      </>
    )
  }

}


export default App

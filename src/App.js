import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

 class App extends Component {
   constructor (props){
     super(props)
     this.state={
      fullName:"Chiraz GOUISSEM",
      bio: "Chiraz",
      imgSrc:"/ch.jpg",
      profession:"Process Engineer",
      show: false,
      time: 0
     }
   }
    showProfile=()=>{
    this.setState({show:!this.state.show,
    time: 0}) 
}
componentDidMount() {
setInterval(() => {this.setState({time: this.state.time+1})},1000)
}

  render() {
    return (
      <div className="App">
        {this.state.show? <><h1>Hello my name is {this.state.fullName}</h1> 
        <h1>My bio: {this.state.bio}</h1>
        <img src={this.state.imgSrc} alt="my photo"></img>
        <h1>I'm a {this.state.profession}</h1>
        <h1>{this.state.time} s</h1></> : null}
        <button onClick={ () => this.showProfile()}>Click here</button>
      </div>
    )
  }
}

export default App;

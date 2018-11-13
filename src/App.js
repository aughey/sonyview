import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: "xxx.",
      start: 84,
      end: 114,
      count: 0
    }
  }
  refresh = () => {
    this.setState({count: this.state.count+1})
  }

  changeBase = (e) => {
    this.setState({base: e.target.value})
  }
  render() {
    var imgs = [];
    for(var i=this.state.start;i<this.state.end;++i) {
      var addr = this.state.base + i
      var url = "http://" + addr + "/oneshotimage.jpg?count=" + this.state.count
        imgs.push(
          (<img width={320} height={240} alt=""  key={addr} src={url}/>)
        )
    }
    return (
      <div className="App">
        <div>
          <h1>Sony Cameras</h1>
          Base: <input value={this.state.base} onChange={this.changeBase}/>, Start: {this.state.start}, End: {this.state.end}
          <button onClick={this.refresh}>Refresh</button>
        </div>
        {imgs}
      </div>
    );
  }
}

export default App;

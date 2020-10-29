import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    value: ''
  }

  handleChange = e => {
    const input = e.target.value
    if(isNaN(input)) return;

    this.setState({
      value: input
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Weight Converter</h1>
        <input
          type="text" 
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Pounds"
        />
        <div className="output">
          <Card name="Gram" value={this.state.value} />
          <Card name="Kilogram" value={this.state.value} />
          <Card name="Ounce" value={this.state.value} />
        </div>
      </div>
    )
  }
}

function Card(props) {
  let result = 0;
  switch (props.name) {
    case "Gram":     
      result = props.value / 0.0022046
      break
    
    case "Kilogram":
      result = props.value / 2.2046
      break
      
    case "Ounce":
      result = props.value * 16
      break
    
    default: 
      break;
  }

  return(
    <div className={`card ${props.name}`}>
      <h3>{props.name}:</h3>
      <span>{result}</span>
    </div>
  )
}

export default App;

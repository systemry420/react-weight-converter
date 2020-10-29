import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
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
        />
      </div>
    )
  }
}

export default App;

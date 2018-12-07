import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.getGraphData();
  }
  async getGraphData () {
    const response = await fetch('http://localhost:9900/graphql', {
      method: 'POST',
      headers: {'content': 'application/json'},
      body: JSON.stringify({query: '{ message }'})
    });
    //const responseBody = await response.json();
    //console.log(responseBody);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
}

export default App;

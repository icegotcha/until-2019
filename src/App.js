import React, {Component} from 'react';
import './Styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="stars-layer1"/>
          <div className="stars-layer2"/>
          <div className="stars-layer3"/>
        </header>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import Timer from './Components/Timer.jsx';
import Fireworks from './Components/Fireworks.jsx';
import './Styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="stars-layer1"/>
          <div className="stars-layer2"/>
          <div className="stars-layer3"/>
          <Fireworks/>
          <Timer/>
          <div className="until2019">Until 2019</div>
        </header>
      </div>
    );
  }
}

export default App;

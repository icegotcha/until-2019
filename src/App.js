import React, {Component} from 'react';
import Timer from './Components/Timer.jsx';
import Fireworks from './Components/Fireworks.jsx';
import './Styles/App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeout: false,
    };

    this.setTimeout = this.setTimeout.bind(this);
  }

  setTimeout(timeout) {
    this.setState({timeout})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="stars-layer1"/>
          <div className="stars-layer2"/>
          <div className="stars-layer3"/>
          {/* Hide when timeout */}
          <Timer setTimeout={this.setTimeout}/>
          {/* Show when timeout */}
          <p className={`text-after-timeout ${(this.state.timeout) ? 'show' : ''}`}>Happy New Year !!!</p>
          <Fireworks timeout={this.state.timeout}/>
        </header>
      </div>
    );
  }
}

export default App;

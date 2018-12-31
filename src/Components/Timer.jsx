import React, {Component} from 'react';
import '../Styles/Timer.scss';
import {timeLeft} from "../Scripts/find_diff_time";
import {getLastDigit, getTenDigit} from "../Scripts/digits";

class Timer extends Component {

  constructor(props) {
    super(props);

    const now = (new Date()).getTime();
    const {days, hours, min, sec} = timeLeft(now);
    this.state = {days, hours, min, sec};

    // use this.state
    this.countdown = this.countdown.bind(this);
    this.renderTimer = this.renderTimer.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.countdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countdown() {
    const now = (new Date()).getTime();
    const {days, hours, min, sec} = timeLeft(now);
    this.setState({days, hours, min, sec});
    if (this.isTimeOut()) {
      // from parent
      this.props.setTimeout(true);
    }
  }

  isTimeOut() {
    return this.state.days === 0 && this.state.hours === 0 && this.state.min === 0 && this.state.sec === 0;
  }


  renderTimer() {
    const units = Object.keys(this.state);
    let elements = [];
    units.forEach((u, index) => {
      elements.push(
        <>
          <span className="show">
            {getTenDigit(this.state[u])}
          </span>
          <span className="show">
            {getLastDigit(this.state[u])}
          </span>
          <span className="indicate">{u[0].toUpperCase()}</span>
        </>
      );
      if (index < units.length - 1) {
        elements.push(<span className="separate"> : </span>);
      }
    });
    return elements.reduce((accu, elem) => {
      return accu === null ? [elem] : [...accu, elem]
    }, null)
  }


  render() {
    return (
      <>
        <div id="Timer" className={(this.isTimeOut()) ? 'hide' : ''}>
        <p className="time">{this.renderTimer()}</p>
      </div>
        <div id="Until2019" className={(this.isTimeOut()) ? 'hide' : ''}>Until 2019</div>
      </>
    );
  }
}

export default Timer;

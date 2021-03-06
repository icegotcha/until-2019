import React, {Component} from 'react';
import '../Styles/Fireworks.scss'

class Fireworks extends Component {
  render() {
    return (
      <div className={`start ${this.props.timeout ? 'show' : 'hide'}`}>
        <div className="before"/>
        <div className="after"/>
      </div>
    );
  }
}

export default Fireworks;

import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    return (
    <div style={props.bg} className="card">
      <div className="card-content">
      <h3>{props.nick}</h3>
      <h4>{props.name}</h4>
      <button onClick={evt => props.linkClick(props.id, evt)}>{props.role}</button>
      </div>
    </div>
    );
  }
}

export default Card;
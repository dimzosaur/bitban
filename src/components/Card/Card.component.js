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
      {
        !!props.role ? <button className="role-link" onClick={evt => props.linkClick(props.url, evt)}>{props.role}</button> : null
      }      
      </div>
    </div>
    );
  }
}

export default Card;
import React from 'react';

import Filter from './Filter/Filter.component';
import Card from './Card/Card.component';

const Title = props => <b>{props.children}</b>;

const Board = props => <div className="board">{props.children}</div>;

const BtnVerMas = props => (<div className="btn-wrapper"><button>{props.children}</button></div>);

export {
  Filter,
  Card,
  Title,
  Board,
  BtnVerMas
};
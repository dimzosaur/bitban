import React, { Component } from 'react';
import { Card, Filter, Title, Board, BtnVerMas } from './components/index';
import './app.css';
import data from './static/datas.json';

class App extends Component {
  constructor() {
    super();
    console.log(data);
    this.state = {
      items: data.items,
      title: data.pageTitle,
      viewMoreLabel: data.viewMoreLabel,
      showDropdownFilter: null
    }
    this.onCardLinkClick = this.onCardLinkClick.bind(this);
    this.onFilterSet = this.onFilterSet.bind(this);
  }
  componentWillMount() {
    window.addEventListener('resize', evt => {
      if(window.innerWidth <= 640) 
        this.setState({
          showDropdownFilter: true
        });
      if(window.innerWidth > 640 && this.state.showDropdownFilter) 
        this.setState({
          showDropdownFilter: false
        });
    });
  }
  componentDidMount() {
    if (window.innerWidth <= 640)
      this.setState({        
        showDropdownFilter: true
      })
    else
      this.setState({
        showDropdownFilter: false
      })
  }
  onCardLinkClick(id, evt) {
    console.log(id, evt);
  }
  onFilterSet(val, evt) {

    const filteredItems = data.items.filter(el => (el.nick).toLowerCase().startsWith(val)) || [];

    this.setState({
      items: filteredItems
    });

  }
  render() {

    const { items, viewMoreLabel, title, showDropdownFilter } = this.state;

    const letras = ('abcdefghijklmnñopqrstuvwxyz'.split('')).map(el => ({ value: el, exist: data.items.find(i => (i.nick).toLowerCase().startsWith(el)) }) ) 

    return ( 
    <React.Fragment>
      <Title>{title.toUpperCase()}</Title>
      <Filter
        showDropdownFilter={showDropdownFilter}
        options={letras}
        filterSet={this.onFilterSet} />
      <Board>
        {
          items.map(el => (
            <Card 
              id={el.id}
              role={el.role}
              nick={el.nick}
              name={el.name}
              bg={{backgroundImage: `url(${el.imageURL || ''})`}} 
              linkClick={this.onCardLinkClick}
              />
            )
          )
        }
      </Board>
      <BtnVerMas>{viewMoreLabel.toUpperCase()}</BtnVerMas>
    </React.Fragment>
    )
  }
};

export default App;
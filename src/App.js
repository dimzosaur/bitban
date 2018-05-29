import React, { Component } from 'react';
import './app.css';
import data from './static/datas.json';

const Title = props => <b>{props.children}</b>;
const Board = props => <div class="board">{props.children}</div>;
const BtnVerMas = props => (<div class="btn-wrapper"><button>{props.children}</button></div>);
const Card = props =>  (<div style={props.bg} class="card">
  <div class="card-content">
    <h3>{props.nick}</h3>
    <h4>{props.name}</h4>
    <button onClick={props.onLinkClick}>{props.role}</button>
  </div>
</div>);

const Filtro = props => {
  const renderFilter = () => {
    if (props.showDropdownFilter) {
      return <div>Filtro letras.</div>
    } else {
      return <div>Filtro dropdown.</div>
    }
  }
  return (<React.Fragment>
    {
      renderFilter()
    }
  </React.Fragment>     
  );
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: data.items,
      title: data.pageTitle,
      viewMoreLabel: data.viewMoreLabel,
      showDropdownFilter: false
    }
    this.cardLinkClick = this.cardLinkClick.bind(this);
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
  cardLinkClick(evt) {
    window.location.href = 'www.google.com'
  }
  render() {

    const { items, viewMoreLabel, title, showDropdownFilter } = this.state;

    const letras = 'abcdefghijklmnopqr'.toUpperCase().split('');

    return ( 
    <React.Fragment>
      <Title>{title.toUpperCase()}</Title>
      <Filtro
        showDropdownFilter={showDropdownFilter}
        filterOptions={letras} />
      <Board>
        {
          items.map(el => (
            <Card 
              id={el.id}
              role={el.role}
              nick={el.nick}
              name={el.name}
              bg={{backgroundImage: `url(${el.imageURL || ''})`}} 
              onLinkClick={this.cardLinkClick}
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
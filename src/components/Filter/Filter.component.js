import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;

    return (
    <div className="filter-wrapper">
      {
        props.showDropdownFilter ?
          (
            <select onChange={evt => props.filterSet(evt.currentTarget.value, evt)} className="filter-dropdown">
              {
                props.options.map(el => <option>{el.value}</option>)
              }
              <option value="">VER TODOS</option>
            </select>
          )
          :
          (
            <div className="filter-no-dropdown">
              {
                props.options.map(el => (
                  <div 
                    style={{ flex: 'auto', color: el.exist ? 'white' : '#7b7b7b' }} 
                    onClick={evt => props.filterSet(el.value, evt)}>
                      {el.value.toUpperCase()}
                  </div>
                  )
                )
              }
              <button onClick={evt => props.filterSet('', evt)} >VER TODOS</button>
            </div>
          )    
      }
    </div>     
    );
  }
}

export default Filter;
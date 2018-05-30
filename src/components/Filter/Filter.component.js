import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow () {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const props = this.props;

    // return (
    // <div className="filter-wrapper">
    //   {
    //     props.showDropdownFilter ?
    //       (
    //         <select onChange={evt => props.filterSet(evt.currentTarget.value, evt)} className="filter-dropdown">
    //           {
    //             props.options.map(el => <option>{el.value}</option>)
    //           }
    //           <option value="">VER TODOS</option>
    //         </select>
    //       )
    //       :
    //       (
    //         <div className="filter-no-dropdown">
    //           {
    //             props.options.map(el => (
    //               <div 
    //                 style={{ flex: 'auto', color: el.exist ? 'white' : '#7b7b7b' }} 
    //                 onClick={evt => props.filterSet(el.value, evt)}>
    //                   {el.value.toUpperCase()}
    //               </div>
    //               )
    //             )
    //           }
    //           <button onClick={evt => props.filterSet('', evt)} >VER TODOS</button>
    //         </div>
    //       )    
    //   }
    // </div>     
    // );
    return(<div className="f2" onClick={this.toggleShow}>
    {
      this.state.open ? 
        <div className="filter-content">
          {
            props.options.map(el => <div>{el.value}</div>)
          }
        </div>
        :
        ''
    }
    </div>)
  }
}

export default Filter;
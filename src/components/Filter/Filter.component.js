import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      val: 'Ver todos'
    }
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow () {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const props = this.props;

    return (
      <div className="filter-wrapper">
        {
          props.showDropdownFilter ?
          (
            <div className="filter" onClick={this.toggleShow}>
              <div className="filter-selected" style={{ borderBottom: this.state.open ? '1px solid #00000040' : 'none' }}>
                <div className="filter-val">
                  {
                    this.state.val.toUpperCase()
                  }  
                </div>
                <span className="filter-arrow">
                  <i className="material-icons">
                    {
                      this.state.open ? 'arrow_drop_up' : 'arrow_drop_down'
                    }
                  </i>
                </span>
              </div>
              {
              this.state.open ? 
              // this.state.open = true
              (
              <div className="filter-content">
                {
                  props.options.map(el => (<div 
                      className="filter-dropdown-option"
                      onClick={evt => { this.setState({ val: el.value }); props.filterSet(el.value, evt)} }
                      style={ { color: el.exist ? 'white' : 'darkgrey' } }
                      >
                      <div className="a">
                        {
                          el.value===this.state.val ? <i className="material-icons">check</i> : null
                        }
                      </div>                        
                      <div className="b">
                        { el.value.toUpperCase() }  
                      </div>
                    </div>) 
                  )
                }
                <div className="filter-dropdown-todos" onClick={evt => {this.setState({ val: 'Ver todos'}); props.filterSet('', evt)} }>
                  <div className="a">
                    {
                      this.state.val === 'Ver todos' ? <i className="material-icons">check</i> : null
                    }
                  </div>  
                  <div className="b">
                    Ver todos  
                  </div>
                </div>
              </div>
              )
              :
              // this.state.open = false
              (
               null
              )
            }
          </div>
          )
          :
          // Se renderiza showDropdownFilter == false
          (
            <div className="filter-no-dropdown">
              {
                props.options.map(el => (
                  <div 
                    style={{ flex: 'auto', color: el.exist || el.value===this.state.val ?
                     'white' 
                     : 
                     '#7b7b7b',
                     background: el.value===this.state.val ?
                     '#5fc323' 
                     : 
                     'transparent'
                    }} 
                    onClick={evt => { this.setState({ val: el.value }); props.filterSet(el.value, evt)} }>
                      {el.value.toUpperCase()}
                  </div>
                  )
                )
              }
              <div 
                style={{ background: this.state.val==='Ver todos' ? '#5fc323' : 'transparent' }}  
                onClick={evt => { this.setState({ val: 'Ver todos' }); props.filterSet('', evt)} }>VER TODOS</div>
            </div>
          )    
      }
    </div>     
    );
  }
}

export default Filter;
import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const curOpacity = this.props.opacity
    const newOpacity = (this.props.opacity - 0.1)
    return (
      <div className="color-box" style={{opacity: curOpacity}}>
        {curOpacity <= 0.2 ? null : (<ColorBox opacity={newOpacity}/>)}
      </div>
    )
  }

}


import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import HitSound from '../hitsound.mp3'

class GameBoardCell extends React.Component {

  render(){
    let cellState = this.props.state;
    let classes = ['cell', `cell-is-${cellState.checked ? 'checked' : 'unchecked'}`, `cell-is-${cellState.value}`].join(' ');

    return (
      <button className={classes} onClick={this.props.handleClick.bind(this, cellState) }></button>
    )
  }
}

export default GameBoardCell;

import React from 'react';

import Board from './Board.jsx';
import Game from '../Game.js';
import Sound from '../backgroundsound.mp3';
import HitSound from '../WhipCrack.mp3';
import Splash from '../splash.mp3';

class Interface extends React.Component {

  constructor(props){
    super(props);
    this.game = new Game();
    let { gridSize } = this.props;
    let { started, board } = this.game.createBoard(this.props.gridSize);
    this.state = { board, started, gridSize }
  }

  startGame(){
    let started = true;
    this.setState({started});
  }

  toggleState(index){
    let board = this.state.board;
    board = this.game.toggleCell(index, board);
    this.setState({board});
  }

  checkCell(index){
    let board = this.state.board;
    board = this.game.checkCell(index, board);;
    this.setState({board});
  }

  render(){
    let { started, board } = this.state;
    return (
      <section className="game">
        { !started && <Board boardType="control" handleClick={ this.toggleState.bind(this) } board={ board }></Board> }
        { started && <Board boardType="game" handleClick={ this.checkCell.bind(this) } board={ board }></Board> }

        <button disabled={ started } onClick={ this.startGame.bind(this) }>Start Game</button>
        <audio id="bgmusic" src={Sound}></audio>
        <audio id="hitsound" src={HitSound}></audio>
        <audio id="splash" src={Splash}></audio>
      </section>
    )
  }
}

Interface.defaultProps = {
  gridSize: 4
}


export default Interface;

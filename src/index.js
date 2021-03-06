import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
  render(){
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}
class Board extends React.Component{
  renderSquare(i){
    return <Square value={i}/>
  }
  render(){
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
      </div>
    )
  }
}
class Game extends React.Component{
  render(){
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div>
          {/* <ShoppingList name="Mark"/> */}
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <Game/>,
  document.getElementById('app')
)
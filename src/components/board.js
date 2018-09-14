import React from 'react'
import Square from './square'
import Piece from './piece'

class Board extends React.Component {
  renderSquare(i) {
    const x = i % 9
    const y = Math.floor(i / 9)
    const piece = (this.props.data[y][x] === 0) ?
      null : <Piece 
              piece_data={this.props.data[y][x]} 
              x={x} 
              y={y} 
              turn={this.props.turn}/>
    return (
      <Square key={i}
              x={x} 
              y={y} 
              board_data={this.props.data}
              moveTo={this.props.moveTo}
      >
        {piece}
      </Square>
    )
  }
  render() {
    const squares = []
    for (let i = 0; i < 81; i++) {
      squares.push(this.renderSquare(i))
    }
    return (
      <div style={{
        width: 390, 
        height: 430, 
        display: 'flex', 
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    )
  }
}

export default Board

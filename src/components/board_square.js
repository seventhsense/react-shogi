import React from 'react'
import Square from './square'

class BoardSquare extends React.Component {
  render() {
    const { x, y } = this.props

    return (
      <Square moveTo={this.props.moveTo}>
        {this.props.children}
      </Square>
    )
  }
}

export default BoardSquare

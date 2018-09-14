import React from 'react'
import { DropTarget } from 'react-dnd'
import canMove from './can_move'

const type = 'piece'
const spec = {
  canDrop(props, monitor) {
    const { x, y, board_data } = props
    const { data, fromX, fromY } = monitor.getItem()
    return canMove(x, y, board_data, data, fromX, fromY)
  },
  drop(props, monitor) {
    const { data, fromX, fromY } = monitor.getItem()
    props.moveTo(data, props.x, props.y, fromX, fromY)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class Square extends React.Component {
  renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color
      }}></div>
    )
  }
  render() {
    const { connectDropTarget, isOver, canDrop } = this.props
    return connectDropTarget(
      <div style={{
        width: '10%',
        height: '11.11%',
        border: '0.5px solid black',
        position: 'relative'
      }}>
        {this.props.children}
        {isOver && canDrop && this.renderOverlay('green')}
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
      </div>
    )
  }
}

export default DropTarget(type, spec, collect)(Square)

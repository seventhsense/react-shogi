import React from 'react'
import { DragSource } from 'react-dnd'
import set_image from './set_image'

const type = 'piece'
const spec = {
  canDrag(props) {
    return (props.piece_data.owner === props.turn)
  },
  beginDrag(props) {
    return {
      data: props.piece_data,
      fromX: props.x,
      fromY: props.y
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    canDrag: monitor.canDrag()
  }
}

class Piece extends React.Component {
  render() {
    const { connectDragSource, isDragging, canDrag, piece_data } = this.props
    const img = set_image(piece_data)
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        position: 'absolute',
        cursor: canDrag ? 'pointer' : 'auto',
        bottom: 1,
        left: 5
      }}>
        <img src={img} alt=""/>
      </div>
    )
  }
}

export default DragSource(type, spec, collect)(Piece)

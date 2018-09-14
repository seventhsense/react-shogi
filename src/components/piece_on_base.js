import React from 'react'
import { DragSource } from 'react-dnd'
import set_image from './set_image'

const type = 'piece'
const spec = {
  canDrag(props) {
    return (props.data[0].owner === props.turn)
  },
  beginDrag(props) {
    return {
      data: props.data[0],
      fromX: -1,
      fromY: -1
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

class PieceOnBase extends React.Component {
  render() {
    const { connectDragSource, isDragging, canDrag, data } = this.props
    const piece = data[0]
    const img = set_image(piece)
    return connectDragSource(
      <div style={{
        display: 'inline',
        opacity: isDragging ? 0.5 : 1,
        cursor: canDrag ? 'pointer' : 'auto',
      }}>
        <img src={img} alt=""/>
      </div>
    )
  }
}

export default DragSource(type, spec, collect)(PieceOnBase)

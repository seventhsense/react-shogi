import React from 'react'
import { DragSource } from 'react-dnd'
import set_image from './set_image'

const type = 'piece'
const spec = {
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
    isDragging: monitor.isDragging()
  }
}

class PieceOnBase extends React.Component {
  render() {
    const { connectDragSource, isDragging, data } = this.props
    const piece = data[0]
    const img = set_image(piece)
    return connectDragSource(
      <div style={{display: 'inline'}}>
        <img src={img}/>
      </div>
    )
  }
}

export default DragSource(type, spec, collect)(PieceOnBase)

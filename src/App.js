import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd'
import MultiBackend from 'react-dnd-multi-backend'
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'
import Board from './components/board'
import Base from './components/base'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const [base1, base2] = this.props.base
    const turn = this.props.turn
    return (
      <div>
        <Base name="base2" data={base2} turn={turn}/>
        <Board {...this.props}/>
        <Base name="base1" data={base1} turn={turn}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveTo: (data, x, y, fromX, fromY)=>
      dispatch({
        type: 'MOVE',
        data: data,
        x: x,
        y: y,
        fromX: fromX,
        fromY: fromY
      })
  }
}

App = DragDropContext(MultiBackend(HTML5toTouch))(App)
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App

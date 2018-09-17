import canMove from './components/can_move'

const cpu = store => next => action => {

  next(action)
  const { data, base, turn } = store.getState() 
  const i = turn === 1 ? 0 : 1
  const mine = [].concat(...data).filter(v => v.owner === turn)
  const candidate = mine.concat(base[i])

  let piece
  let x, y
  do {
    piece = candidate[Math.floor(Math.random() * candidate.length)]
    x = Math.floor(Math.random() * 9)
    y = Math.floor(Math.random() * 9)
  } while(!canMove(x, y, data, piece, piece.x, piece.y))

  // const others = [].concat(...data).filter(v => v.owner === 1)
  if (turn === 2) {
    store.dispatch({
          type: 'MOVE',
          data: piece,
          x: x,
          y: y,
          fromX: piece.x,
          fromY: piece.y
        })
  }
}

export default cpu

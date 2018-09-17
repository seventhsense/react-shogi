import canMove from './components/can_move'
import evaluate from './evaluate'
import movable from './movable'

const cpu = store => next => action => {

  next(action)
  const { data, base, turn } = store.getState() 
  const i = turn === 1 ? 0 : 1
  const mine = [].concat(...data).filter(v => v.owner === turn)
  const candidate = mine.concat(base[i])

  let piece
  let x, y
  let moves
  let rnd
  let checker = true
  let value
  do {
    piece = candidate[Math.floor(Math.random() * candidate.length)]
    moves = movable(data, piece)
    if (moves.length === 0) { continue }
    checker = false
    rnd = Math.floor(Math.random() * moves.length)
    x = moves[rnd][0]
    y = moves[rnd][1]
    value = evaluate(store.getState())
  } while(checker)

  console.log(movable(data, piece))


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

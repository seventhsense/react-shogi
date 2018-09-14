export const reducer = (state, action) => {
  switch(action.type) {
    case 'MOVE':
      let pieceTo = state.data[action.y][action.x]
      const i = state.turn === 1 ? 0 : 1
      if (pieceTo !== 0) {
        pieceTo.owner = state.turn
        pieceTo.promote = false
        state.base[i].push(pieceTo)
      }
      if (action.fromX === -1 && action.fromY === -1){
        state.base[i] = state.base[i].filter(v => v.id !== action.data.id)
      } else {
        state.data[action.fromY][action.fromX] = 0
      }
      state.data[action.y][action.x] = action.data
      const new_data = state.data.map((row) => {
        return row.map( (item) => {
          return item
        })
      })
      const turn = state.turn === 1 ? 2 : 1
      state = {
        ...state,
        base: state.base,
        data: new_data,
        turn: turn
      }
      break
    default:
      break
  }
  return state
}

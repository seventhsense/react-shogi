import initial from './data.json'

export const reducer = (state, action) => {
  switch(action.type) {
    case 'START':
      state = {
        ...state,
        menu: false
      }
      break
    case 'RESTART':
      state = {
        ...initial
      }
      break
    case 'MOVE':
      let pieceTo = state.data[action.y][action.x]
      const i = state.turn === 1 ? 0 : 1
      // 移動先の駒の処理
      if (pieceTo !== 0) {
        if (pieceTo.type === 'king') {
          state = {
            ...state,
            game_end: true,
            winner: state.turn
          }
          return state
        }
        pieceTo = {
          ...pieceTo,
          owner: state.turn,
          promote: false
        }
        state.base[i].push(pieceTo)
      }
      state.data[action.y][action.x] = action.data
      //　移動元の駒の処理
      if (action.fromX === -1 && action.fromY === -1){
      state.base[i] = state.base[i]
          .filter(v => v.id !== action.data.id)
      } else {
        state.data[action.fromY][action.fromX] = 0
      }
      // promote
      if ((action.fromX !== -1 && action.fromY !== -1) && 
        action.data.promote === false && 
        (action.data.type !== 'king' || action.data.type !== 'gold')){
        if (action.data.owner === 1 && 
          (action.y <= 2 || action.fromY <= 2) && 
          state.promote_modal === false) {
          state = {
            ...state,
            promote_modal: true,
            promote_data: action
          }
          return state
        }
        if (action.data.owner === 2 && 
          (action.y >= 6 || action.fromY >= 6) && 
          state.promote_modal === false) {
          state = {
            ...state,
            promote_modal: true,
            promote_data: action
          }
          return state
        }
      }
      // create new array
      const new_data = state.data.map((row) => {
        return row.map( (item) => {
          return item
        })
      })
      const new_base = state.base.map((row) => {
        return row.map((item) => {
          return item
        })
      })
      // turn チェンジ
      const turn = state.turn === 1 ? 2 : 1
      state = {
        ...state,
        promote_modal: false,
        base: new_base,
        data: new_data,
        turn: turn
      }
      break
    default:
      break
  }
  return state
}

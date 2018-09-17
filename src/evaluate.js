import piece_value from './piece_value'

const evaluate = (board_data) => {
  const { data, base, turn } = board_data
  const i = turn === 1 ? 0 : 1
  const mine = [].concat(...data).filter(v => v.owner === turn)
  let value_on_board = mine.map(v => piece_value(v.type, v.promote))
  value_on_board = value_on_board.reduce((p, c) => {return p + c})
  let value_on_base = base[i].map(v => piece_value(v.type, v.promote))
  value_on_base = base[i].reduce((p, c) => {return p + c}, 0)

  const value = value_on_base + value_on_board

  console.log(value)
  return value
}

export default evaluate

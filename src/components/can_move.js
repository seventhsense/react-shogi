const goldMove = (x, y, board_data, data, fromX, fromY) => {
  const dx = Math.abs(x - fromX)
  const dy = Math.abs(y - fromY)
  let result = false
  if ((dx === 1 || dy === 1) && (dx * dy < 2)) {
    if ((fromY - y === -1 && dx === 1 && data.owner === 1) || 
        (fromY - y === 1 && dx === 1 && data.owner === 2)) {
          result = false
    } else {
      result = true
    }
  }
  return result
}

const canMove = (x, y, board_data, data, fromX, fromY) => {
  let result = false
  // 味方がいるマスには移動できない
  if (board_data[y][x].owner === data.owner) {return false}
  // 駒台から置く場合
  if (fromX === -1 && fromY === -1) {
    // 駒があるマスには置けない
    if (board_data[y][x] !== 0) { return false }
    switch (data.type) {
      case 'pawn':
        if (data.owner === 1 && y === 0) {
          return false
        }
        if (data.owner === 2 && y === 8) {
          return false
        }
        const column = board_data.map(r => r[x])
        return !column.some(v => (v.type === 'pawn' && v.owner === data.owner))
      case 'lance':
        if (data.owner === 1 && y === 0) {
          return false
        }
        if (data.owner === 2 && y === 8) {
          return false
        }
        return true
      case 'knight':
        if (data.owner === 1 && y <= 1) {
          return false
        }
        if (data.owner === 2 && y >= 7) {
          return false
        }
        return true
      default:
        return true
    }
  }
  // コマごとに場合分け
  const dx = Math.abs(x - fromX)
  const dy = Math.abs(y - fromY)
  switch (data.type) {
    case 'king':
      if ((dx === 1 || dy === 1) && (dx * dy < 2)) {
        result = true
      }
      break
    case 'silver':
      if (data.promote === false) {
        if ((dx === 1 || dy === 1) && (dx * dy < 2)) {
          if ((dx === 1 && dy ===0 ) || 
              (fromY - y === -1 && dx === 0 && data.owner === 1) || 
              (fromY - y === 1 && dx === 0 && data.owner === 2)){
                result = false
          } else {
            result = true
          }
        }
      } else {
        result = goldMove(x, y, board_data, data, fromX, fromY)
      }
      break
    case 'knight':
      if (data.promote === false) {
        if ((data.owner === 1 && dx === 1 && fromY - y === 2) ||
            (data.owner === 2 && dx === 1 && fromY - y === -2)) {
              result = true
        }
      } else {
        result = goldMove(x, y, board_data, data, fromX, fromY)
      }
      break
    case 'lance':
      if (data.promote === false) {
        if (data.owner === 1 && dx === 0 & fromY - y > 0) {
          result = true
          for (let i = y + 1; i < fromY; i++) {
            if (board_data[i][x] !== 0) {
              result = false
              break
            }
          }
        } else if (data.owner === 2 && dx === 0 & fromY - y < 0) {
          result = true
          for (let i = fromY + 1; i < y; i++) {
            if (board_data[i][x] !== 0) {
              result = false
              break
            }
          }
        }
      } else {
        result = goldMove(x, y, board_data, data, fromX, fromY)
      }
      break
    case 'pawn':
      if (data.promote === false) {
        if (x !== fromX) {
          result = false
        } else {
          if (fromY - y === 1 && data.owner === 1){
            result = true
          } else if (y - fromY === 1 && data.owner ===2){
            result = true
          }
        }
      } else {
        result = goldMove(x, y, board_data, data, fromX, fromY)
      }
      break
    case 'rook':
      if (dx === 0 && dy !== 0){
        result = true
        const [start, end] = fromY - y > 0 ? [y, fromY] : [fromY, y]
        for (let i = start+1; i < end; i++) {
          if (board_data[i][x] !== 0) {
            result = false
            break
          }
        }
      } else if (dy === 0 && dx !== 0){
        result = true
        const [start, end] = fromX - x > 0 ? [x, fromX] : [fromX, x]
        for (let i = start+1; i < end; i++) {
          if (board_data[y][i] !== 0) {
            result = false
            break
          }
        }
      }
      if (data.promote === true) {
        if ((dx === 1 || dy === 1) && (dx * dy < 2)) {
          result = true
        }
      }
      break
    case 'bishop':
      if (dx === dy) {
        result = true
        const [startX, endX, startY] = fromX - x > 0 ? [x, fromX, y] : [fromX, x, fromY]
        const inc = (fromX - x === fromY - y) ? 1 : -1
        let j = startY + inc
        for (let i = startX+1; i < endX; i++) {
          if (board_data[j][i] !== 0) {
            result = false
            break
          }
          j += inc
        }
      }
      if (data.promote === true) {
        if ((dx === 1 || dy === 1) && (dx * dy < 2)) {
          result = true
        }
      }
      break

    default: // gold move
      result = goldMove(x, y, board_data, data, fromX, fromY)
      break
  }
  return result
}

export default canMove

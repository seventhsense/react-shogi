import canMove from "./components/can_move";

const movable = (board, piece) => {
  let candidate
  const x = piece.x
  const y = piece.y
  let i, inc
  if (piece.type === 'king') {
    candidate = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
                 [x - 1, y], [x + 1, y],
                 [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]]
    candidate = candidate.filter(v =>
      ((v[0] >= 0 && v[1] >= 0 && v[0] <= 8 && v[1] <= 8) &&
      canMove(v[0], v[1], board, piece, x, y)))
    return candidate
  }

  if (piece.promote) {
    switch (piece.type) {
      case 'rook':
        candidate = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
                    [x - 1, y], [x + 1, y],
                    [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]]
        for (i = 1; i <= 8; i++) {
          candidate.push([x + i, y])
          candidate.push([x - i, y])
          candidate.push([x, y + i])
          candidate.push([x, y - i])
        }
        break
      case 'bishop':
        candidate = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
                    [x - 1, y], [x + 1, y],
                    [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]]
        for (i = 1; i <= 8; i++) {
          candidate.push([x + i, y + i])
          candidate.push([x - i, y + i])
          candidate.push([x + i, y - i])
          candidate.push([x - i, y - i])
        }
        break
      default:
        if (piece.owner === 1) {
          candidate = [[x, y + 1],
                      [x - 1, y], [x + 1, y],
                      [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]]
        } else {
          candidate = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
                      [x - 1, y], [x + 1, y],
                      [x, y - 1]]
        }
        break
    }
  } else {
    switch (piece.type) {
      case 'silver':
        if (piece.owner === 1) {
          candidate = [[x - 1, y + 1], [x + 1, y + 1],
                      [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]]
        } else {
          candidate = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
                      [x - 1, y - 1], [x + 1, y - 1]]
        }
        break
      case 'knight':
        if (piece.owner === 1) {
          candidate = [[x - 1, y + 2], [x + 1, y + 2]]
        } else {
          candidate = [[x - 1, y - 2], [x + 1, y - 2]]
        }
        break
      case 'lance':
        candidate = []
        inc = piece.owner ? -1 : 1
        for (i = 1; i <= 8; i++) {
          candidate.push([x, y + i * inc])
        }
        break
      case 'pawn':
        inc = piece.owner ? -1 : 1
        candidate = [[x, y + inc]]
        break
      case 'rook':
        candidate = []
        for (i = 1; i <= 8; i++) {
          candidate.push([x + i, y])
          candidate.push([x - i, y])
          candidate.push([x, y + i])
          candidate.push([x, y - i])
        }
        break
      case 'bishop':
        candidate = []
        for (i = 1; i <= 8; i++) {
          candidate.push([x + i, y + i])
          candidate.push([x - i, y + i])
          candidate.push([x + i, y - i])
          candidate.push([x - i, y - i])
        }
        break
      default:
        if (piece.owner === 1) {
          candidate = [[x, y + 1],
                      [x - 1, y], [x + 1, y],
                      [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]]
        } else {
          candidate = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
                      [x - 1, y], [x + 1, y],
                      [x, y - 1]]
        }
        break
    }
  }
  candidate = candidate.filter(v =>
    ((v[0] >= 0 && v[1] >= 0 && v[0] <= 8 && v[1] <= 8) &&
      canMove(v[0], v[1], board, piece, x, y)))
  return candidate
}

export default movable

const piece_value = (type, promote) => {
  if (type === 'king') return 20
  if (type === 'gold') return 6
  if (promote) {
    switch(type) {
      case 'silver': return 5
      case 'knight': return 4
      case 'lance': return 3
      case 'pawn': return 1
      case 'bishop': return 8
      case 'rook': return 12
      default: return 1
    }
  } else {
    switch(type) {
      case 'silver': return 5
      case 'knight': return 4
      case 'lance': return 3
      case 'pawn': return 1
      case 'bishop': return 8
      case 'rook': return 12
      default: return 1
    }
  }
}

export default piece_value

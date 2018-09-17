const movable = (data) => {
  if (data.type === 'king') {
    return
  }

  if (data.promote) {
    switch (data.type) {
      case 'king':
        break
      default:
        break
    }
  } else {

  }

}

export default movable

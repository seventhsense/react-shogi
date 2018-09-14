import king1 from '../japanese-chess/koma/30x32/sgs01.png'
import rook1 from '../japanese-chess/koma/30x32/sgs02.png'
import bishop1 from '../japanese-chess/koma/30x32/sgs03.png'
import gold1 from '../japanese-chess/koma/30x32/sgs04.png'
import silver1 from '../japanese-chess/koma/30x32/sgs05.png'
import knight1 from '../japanese-chess/koma/30x32/sgs06.png'
import lance1 from '../japanese-chess/koma/30x32/sgs07.png'
import pawn1 from '../japanese-chess/koma/30x32/sgs08.png'
import rookp1 from '../japanese-chess/koma/30x32/sgs22.png'
import bishopp1 from '../japanese-chess/koma/30x32/sgs23.png'
import silverp1 from '../japanese-chess/koma/30x32/sgs25.png'
import knightp1 from '../japanese-chess/koma/30x32/sgs26.png'
import lancep1 from '../japanese-chess/koma/30x32/sgs27.png'
import pawnp1 from '../japanese-chess/koma/30x32/sgs28.png'

import king2 from '../japanese-chess/koma/30x32/sgs31.png'
import rook2 from '../japanese-chess/koma/30x32/sgs32.png'
import bishop2 from '../japanese-chess/koma/30x32/sgs33.png'
import gold2 from '../japanese-chess/koma/30x32/sgs34.png'
import silver2 from '../japanese-chess/koma/30x32/sgs35.png'
import knight2 from '../japanese-chess/koma/30x32/sgs36.png'
import lance2 from '../japanese-chess/koma/30x32/sgs37.png'
import pawn2 from '../japanese-chess/koma/30x32/sgs38.png'
import rookp2 from '../japanese-chess/koma/30x32/sgs51.png'
import bishopp2 from '../japanese-chess/koma/30x32/sgs53.png'
import silverp2 from '../japanese-chess/koma/30x32/sgs55.png'
import knightp2 from '../japanese-chess/koma/30x32/sgs56.png'
import lancep2 from '../japanese-chess/koma/30x32/sgs57.png'
import pawnp2 from '../japanese-chess/koma/30x32/sgs58.png'

let img

const set_image = (data) => {
  switch (data.type) {
    case 'king':
      img = data.owner === 1 ? king1 : king2
      break
    case 'gold':
      img = data.owner === 1 ? gold1 : gold2
      break
    case 'silver':
      if (data.promote) {
        img = data.owner === 1 ? silverp1 : silverp2
      } else {
        img = data.owner === 1 ? silver1 : silver2
      }
      break
    case 'knight':
      if (data.promote) {
        img = data.owner === 1 ? knightp1 : knightp2
      } else {
        img = data.owner === 1 ? knight1 : knight2
      }
      break
    case 'lance':
      if (data.promote) {
        img = data.owner === 1 ? lancep1 : lancep2
      } else {
        img = data.owner === 1 ? lance1 : lance2
      }
      break
    case 'pawn':
      if (data.promote) {
        img = data.owner === 1 ? pawnp1 : pawnp2
      } else {
        img = data.owner === 1 ? pawn1 : pawn2
      }
      break
    case 'rook':
      if (data.promote) {
        img = data.owner === 1 ? rookp1 : rookp2
      } else {
        img = data.owner === 1 ? rook1 : rook2
      }
      break
    case 'bishop':
      if (data.promote) {
        img = data.owner === 1 ? bishopp1 : bishopp2
      } else {
        img = data.owner === 1 ? bishop1 : bishop2
      }
      break
    default:
      break
  }
  return img
}

export default set_image

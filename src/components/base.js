import React from 'react'
import PieceOnBase from './piece_on_base'

class Base extends React.Component {
  renderPieceOnBase(data) {
    const count = data.length
    return (
      <div>
        <PieceOnBase data={data} turn={this.props.turn}/> × {count}
      </div>
    )
  }
  render() {
    const data = this.props.data
    const pawns = data.filter(v => v.type === 'pawn')
    const lances = data.filter(v => v.type === 'lance')
    const knights = data.filter(v => v.type === 'knight')
    const silvers = data.filter(v => v.type === 'silver')
    const golds = data.filter(v => v.type === 'gold')
    const rooks = data.filter(v => v.type === 'rook')
    const bishops = data.filter(v => v.type === 'bishop')
    return (
      <div className="base"
            style={{
              width: 250,
              height: 100,
              border: '1px solid black',
              marginBottom: 10,
              marginTop: 20,
              display: 'flex',
              flexWrap: 'wrap'
            }}
      >
        {pawns.length > 0 && this.renderPieceOnBase(pawns)}
        {lances.length > 0 && this.renderPieceOnBase(lances)}
        {knights.length > 0 && this.renderPieceOnBase(knights)}
        {silvers.length > 0 && this.renderPieceOnBase(silvers)}
        {golds.length > 0 && this.renderPieceOnBase(golds)}
        {rooks.length > 0 && this.renderPieceOnBase(rooks)}
        {bishops.length > 0 && this.renderPieceOnBase(bishops)}
      </div>
    )
  }
}

export default Base

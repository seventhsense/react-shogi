import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import set_image from './set_image.js'

class PromoteModal extends React.Component {G3
  render(){
    let promote_data = this.props.data
    let img1, img2
    let x, y , fromX, fromY
    if (promote_data) {
      img1 = set_image(promote_data.data)
      promote_data.data.promote = true
      img2 = set_image(promote_data.data)
      x = promote_data.x
      y = promote_data.y
      fromX = promote_data.fromX
      fromY = promote_data.fromY
    }
    return (
      <Dialog
        open={this.props.open}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
      >
        {promote_data !== undefined &&
          <DialogContent>
            <div style={{display: 'inline'}}>
            <img
              src={img2} alt=""
              onClick={()=>this.props.moveTo(promote_data.data, x, y, fromX, fromY)} 
            />
            </div>
            <div style={{display: 'inline'}}>
            <img
              src={img1} alt="" 
          onClick={()=>{
              promote_data.data.promote = promote_data.data.promote ? !promote_data.data.promote : promote_data.data.promote
              this.props.moveTo(promote_data.data, x, y, fromX, fromY)} 
              }
            />
            </div>
          </DialogContent>
        }
        {!promote_data && ''}
      </Dialog>
    )
  }
}

export default PromoteModal

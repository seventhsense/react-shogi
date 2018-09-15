import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import set_image from './set_image.js'

class PromoteModal extends React.Component {
  render(){
    const promote_data = this.props.data
    let img1, img2
    let x, y , fromX, fromY
    let data1, data2
    if (promote_data) {
      data1 = {
        ...promote_data.data,
        promote: false
      }
      data2 = {
        ...promote_data.data,
        promote: true}
      img1 = set_image(data1)
      img2 = set_image(data2)
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
              onClick={()=>{
                  this.props.moveTo(data2, x, y, fromX, fromY)
                  }}
            />
            </div>
            <div style={{display: 'inline'}}>
            <img
              src={img1} alt="" 
              onClick={()=>{
                  this.props.moveTo(data1, x, y, fromX, fromY)
                  }}
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

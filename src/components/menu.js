import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'

class Menu extends React.Component {
  render () {
    return (
      <Dialog
        open={this.props.open}
      >
        <DialogContent>
          <Button onClick={this.props.startGame}>
            start
          </Button>
        </DialogContent>
      </Dialog>
    )
  }
}

export default Menu

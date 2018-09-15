import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'

class GameEnd extends React.Component {
  render () {
    return (
      <Dialog
        open={this.props.open}
      >
        <DialogContent>
          <DialogContentText>
            Winner is {this.props.winner}
          </DialogContentText>
          <Button onClick={this.props.restartGame}>
            restart
          </Button>
        </DialogContent>
      </Dialog>
    )
  }
}

export default GameEnd


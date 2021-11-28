import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import RecordCitationSnackbar from './RecordCitationSnackbar';

const RecordCitationModal = ({ open, handleClose, citation }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
   
    const handleCopyToClipboard = (event) => {
        event.stopPropagation();
        navigator.clipboard.writeText(citation);
        setOpenSnackbar(true);
        handleClose(event);
    }

    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    }

    return (
      <>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          onClick={e => e.stopPropagation()}
          onBackdropClick={e => e.stopPropagation()}
          open={open}
          maxWidth={"xl"}
        >
          <DialogTitle id="customized-dialog-title">
            Cytowanie
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
                {citation}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCopyToClipboard}>Copy</Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
        <RecordCitationSnackbar open={openSnackbar} onClose={handleCloseSnackbar}/>
      </>
    );
  }

export default RecordCitationModal

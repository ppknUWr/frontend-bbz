import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import SaveAlt from '@material-ui/icons/SaveAlt';
import RecordCitationSnackbar from './RecordCitationSnackbar';

const RecordCitationModal = ({ isVisible, recordData }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOnClick = (event) => {
        event.stopPropagation();
        setOpenDialog(true);
    }

    const handleClose = (event) => {
        event.stopPropagation();
        setOpenDialog(false);
    }

    return (
    <>
    <div className={isVisible ? "visibleOptions recordOptionsBck" : "recordOptionsBck"}>
        <Button onClick={handleOnClick}>
            <SaveAlt />
        </Button>
    </div>
    <CitationDialog open={openDialog} handleClose={handleClose} recordData={recordData} />
    </>
    )
}

const CitationDialog = ({ open, handleClose, recordData }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const citation = `${recordData.bookAuthor}, ${recordData.publicationDate}, ${recordData.title}, ${recordData.publisher}, ${recordData.publicationPlace}`;
   
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

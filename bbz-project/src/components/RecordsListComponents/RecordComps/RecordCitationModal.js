import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import SaveAlt from '@material-ui/icons/SaveAlt';

const RecordCitationModal = ({ isVisible, recordData }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOnClick = (event) => {
        event.stopPropagation();
        console.log(recordData);
        setOpenDialog(true);
    }

    const handleClose = (event) => {
        event.stopPropagation();
        setOpenDialog(false);
    }

    return (
    <div className={isVisible ? "visibleOptions recordOptionsBck" : "recordOptionsBck"}>
        <Button onClick={handleOnClick}>
            <SaveAlt />
        </Button>
        <CitationDialog open={openDialog} handleClose={handleClose} recordData={recordData} />
    </div>
    )
}

const CitationDialog = ({ open, handleClose, recordData }) => {
    const citation = `${recordData.bookAuthor}, ${recordData.publicationDate}, ${recordData.title}, ${recordData.publisher}, ${recordData.publicationPlace}`;
   
    const handleCopyToClipboard = (event) => {
        event.stopPropagation();
        navigator.clipboard.writeText(citation);
        handleClose(event);
    }

    return (
      <div>
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
      </div>
    );
  }

export default RecordCitationModal

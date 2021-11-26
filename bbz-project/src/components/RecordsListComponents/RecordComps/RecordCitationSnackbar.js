import React from 'react';
import { Snackbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const RecordCitationSnackbar = ({ open, onClose }) => {

  const action = (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
          <Close fontSize="small" />
      </IconButton>
  );

  return (
    <div>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        autoHideDuration={2000}
        onClose={onClose}
        message="Skopiowano do schowka!"
        action={action}
      />
    </div>
  );
}

export default RecordCitationSnackbar;
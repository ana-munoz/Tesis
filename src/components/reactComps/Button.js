import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InfoIcon from '@mui/icons-material/Info';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <SaveAltIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <FileUploadIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <KeyboardIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <InfoIcon />
      </IconButton>
    </Stack>
  );
}
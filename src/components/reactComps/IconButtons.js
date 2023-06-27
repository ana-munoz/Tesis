import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
 const fileTypes = ["JSON"];

export default function IconButtons() {

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('import');

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = (action) => () => {
    setOpen(true);
    setType(action);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <Stack direction="row">

      {/* IMPORT BUTTON */}
      <IconButton aria-label="import" onClick={handleClickOpen('import')}>
        <SaveAltIcon />
      </IconButton>
      <Dialog fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="import">
        <DialogTitle id="import">
          <DialogContent>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </DialogContent>
        </DialogTitle>
          <DialogActions>
            <Button content='Examinar'/>
          </DialogActions>
      </Dialog>



      {/* EXPORT BUTTON */}
      <IconButton aria-label="export" onClick={handleClickOpen('export')}>
        <FileUploadIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="export"
      >
        <DialogTitle id="export">
          {"Exportar"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿En qué formato desea exportar el modelo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            .SVG
          </Button>
          <Button onClick={handleClose} autoFocus>
            .JSON
          </Button>
        </DialogActions>
      </Dialog>



      {/* SHORTCUTS BUTTON */}
      <IconButton aria-label="shortcuts">
        <KeyboardIcon />
      </IconButton>

      {/* ABOUT BUTTON */}
      <IconButton aria-label="About">
        <InfoIcon />
      </IconButton>
    </Stack>
  );
}
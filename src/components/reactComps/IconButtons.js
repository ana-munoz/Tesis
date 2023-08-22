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
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
 const fileTypes = ["JSON"];

export default function IconButtons() {

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const [openImport, setOpenImport] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  
  const [openClipboard, setOpenClipboard] = useState(false);
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpenImport = () => {
    setOpenImport(true);
  };
  const handleClickOpenExport = () => {
    setOpenExport(true);
  };
  const handleCloseImport = () => {
    setOpenImport(false);
  };
  const handleCloseExport = () => {
    setOpenExport(false);
  };

  const handleClickOpenClipboard = () => {
    setOpenClipboard(true);
  };
  const handleClickCloseClipboard = () => {
    setOpenClipboard(false);
  };


  const [openShortcuts, setOpenShortcuts] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  
  const handleClickOpenShortcuts = () => {
    setOpenShortcuts(true);
  }
  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  }

  const handleClickOpenAbout = () => {
    setOpenAbout(true);
  }
  const handleCloseAbout = () => {
    setOpenAbout(false);
  }


  return (
    <Stack direction="row">

      {/* IMPORT BUTTON */}
      <IconButton aria-label="import" onClick={handleClickOpenImport}>
        <SaveAltIcon />
      </IconButton>
      <Dialog fullScreen={fullScreen}
        open={openImport}
        onClose={handleCloseImport}
        aria-labelledby="import">
        <DialogTitle id="import">
          <DialogContent>
            <FileUploader
              multiple={false}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </DialogContent>
        </DialogTitle>
      </Dialog>



      {/* EXPORT BUTTON */}
      <IconButton aria-label="export" onClick={handleClickOpenExport}>
        <FileUploadIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={openExport}
        onClose={handleCloseExport}
        aria-labelledby="export">

        <DialogTitle id="export">
          {"Exportar"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿En qué formato desea exportar el modelo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseExport}>
            .SVG
          </Button>
          <Button onClick={handleClickOpenClipboard} autoFocus>
            .JSON
          </Button>

          <Dialog fullScreen={fullScreen}
                  open={openClipboard}
                  onClose={handleCloseExport}
                  aria-labelledby="export">
            <DialogTitle id="exportClipboard">
              {"Código JSON a exportar:"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {`{
                    "graph": []
                }`}
              </DialogContentText>
              <DialogActions>
                <Button autoFocus onClick={handleClickCloseClipboard}> Close </Button>
                <Button autoFocus onClick={handleClickCloseClipboard}> Copiar </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </DialogActions>
      </Dialog>



      {/* SHORTCUTS BUTTON */}
      <IconButton aria-label="shortcuts" onClick={handleClickOpenShortcuts}>
        <KeyboardIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={openShortcuts}
        onClose={handleCloseShortcuts}
        aria-labelledby="shortcuts-dialog"
      >
        <DialogTitle id="shortcuts-dialog">
          {"Shortcuts"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <List>
              <ListItemText> Ctrl + c = copiar</ListItemText>
              <ListItemText> Ctrl + v = pegar </ListItemText>
              <ListItemText> Suprimir = eliminar un elemento seleccionado </ListItemText>
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseShortcuts} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* ABOUT BUTTON */}
      <IconButton aria-label="About" onClick={handleClickOpenAbout}>
        <InfoIcon />
      </IconButton>
      <Dialog fullScreen={fullScreen}
        open={openAbout}
        onClose={handleCloseAbout}
        aria-labelledby="open-dialog">
        <DialogContent>
          <DialogContentText>
            Herramienta de modelado para el lenguaje LiteStrat, hecho como proyecto de trabajo de título
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAbout}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
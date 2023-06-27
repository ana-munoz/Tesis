import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function Zooms(){

    
const btns = [
    <IconButton aria-label="zoom-in">
        <ZoomInIcon />
    </IconButton>,
    <IconButton aria-label="zoom-out">
        <ZoomOutIcon />
    </IconButton>,
  ];

    return(

        <Box sx={{
            display: 'flex-end',
            '& > *': {
            m: 1,
            },
        }}>
            <ButtonGroup
                orientation="vertical"
                variant="contained"
                aria-label="vertical outlined button group">
                {btns}
            </ButtonGroup>
        </Box>
    )
}
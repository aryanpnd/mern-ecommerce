import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext, useState } from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { productContext } from '../../../context/productContext';

export default function AlertWithDangerState({ show,title, icon, color,duration }) {

    const {setAlert} = useContext(productContext)

    return (
        <Box className='slideRightBounceAnim'
        width={{
            xs: "90%",
            sm: "90%",
            md: "30%",
            lg: "30%",
            xl: "30%"
          }}
        sx={{ display: show ? 'flex':"none", position: "absolute", top: "1rem", right: "1rem", gap: 2,flexDirection: 'column', zIndex: 10000 }}>
            <Alert
                startDecorator={
                    icon === "error" ? <ReportIcon sx={{ mx: 0.5 }} /> : icon === "warning" ? <WarningIcon sx={{ mx: 0.5 }} /> : icon === "success" ? <CheckCircleIcon sx={{ mx: 0.5 }} /> : <InfoIcon sx={{ mx: 0.5 }} />
                }
                variant="solid"
                color={color}
                endDecorator={
                    <React.Fragment>
                        <IconButton onClick={()=>setAlert([{show:false}])} variant="solid" size="sm" color={color}>
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                }
            >
                <Typography sx={{ color: 'white' }} fontWeight="md">
                    {title}
                </Typography>
            </Alert>
        </Box>
    );
}
import { IconButton } from '@mui/joy';
import { Box, SwipeableDrawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import SidebarComponents from './SidebarComponents';

export default function AppDrawer({ props }) {

    const [state, setState] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <Box>
            <IconButton onClick={toggleDrawer('left',true)}>
                <MenuIcon />
            </IconButton>
            
            <SwipeableDrawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >


                <Box sx={{ background: 'linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C', width: 250, height: 1, color: 'whitesmoke' }}>

                    <SidebarComponents />
                    
                </Box>


            </SwipeableDrawer>
        </Box>
    )
}

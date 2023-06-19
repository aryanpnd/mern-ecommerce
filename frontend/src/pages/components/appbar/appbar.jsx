import React, { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton, Input } from '@mui/joy';
import { ChatBubble, ShoppingCart } from '@mui/icons-material';
import { useMatch, useNavigate } from 'react-router-dom';
import { productContext } from '../../../context/productContext';
import AppDrawer from '../appdrawer/AppDrawer';



export default function SearchAppBar() {
    const [icon, seticon] = React.useState(true)
    const homepageUrl = useMatch("/")
    const addProductUrl = useMatch("/addproduct")
    const navigate = useNavigate()
    const {setAlert } = useContext(productContext)

    const handleClick = () => {
        if (homepageUrl) {
            seticon(false)
            navigate("/addproduct")
        } else {
            seticon(true)
            navigate("/")
        }
    }

    const handleNavigateToChat = ()=>{
        setAlert([{
            show:true,
            title: "This feature still under development",
            icon: "info",
            color: "info",
        }])
        setTimeout(() => { setAlert([{show:false,}]) }, 4000);
    }

    return (
        <AppBar position="absolute" className='appbar' >

            <Box sx={{ display: "flex", justifyContent: "space-between", height: "2.5rem", padding: "10px" }}>


                {/* left side items */}
                <Box sx={{ width: "20%" }}>
                    <AppDrawer />
                </Box>

                {/* Middle side items */}
                <Box sx={{ width: "40%" }}>
                    <Input placeholder="Type in here…" variant="solid"
                        endDecorator={
                            <IconButton
                                variant="solid"
                                color="warning"
                                sx={{ width: "100%" }}
                            ><SearchIcon /></IconButton>
                        } />
                </Box>

                {/* right side items */}
                <Box sx={{ width: "20%", display: "flex", justifyContent: "flex-end" }}>
                    <IconButton color='warning' onClick={handleNavigateToChat} variant="solid">
                        <ChatBubble  />
                    </IconButton>
                    {/* <Button color='warning' onClick={handleClick} sx={{ marginLeft: 1 }}>{icon ? <Edit /> : ""}{addProductUrl ? "All products" : "Add products"}</Button> */}
                </Box>
            </Box>
        </AppBar>
    );
}
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/joy';
import { Edit } from '@mui/icons-material';
import { useMatch, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '17ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const [icon, seticon] = React.useState(true)
    const homepageUrl = useMatch("/")
    const addProductUrl = useMatch("/addproduct")
    const navigate = useNavigate()

    const handleClick = () => {
        if (homepageUrl) {
            seticon(false)
            navigate("/addproduct")
        } else {
            seticon(true)
            navigate("/")
        }
    }
    return (
        <AppBar position="sticky">
            <Toolbar >

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Store
                </Typography>

                <Search>
                    <StyledInputBase
                        placeholder="Search products…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Button color='warning' sx={{ marginLeft: 1 }}><SearchIcon /></Button>
                <Button color='warning' onClick={handleClick} sx={{ marginLeft: 1 }}>{icon ? <Edit /> : ""}{addProductUrl ? "All products" : "Add products"}</Button>
            </Toolbar>
        </AppBar>
    );
}
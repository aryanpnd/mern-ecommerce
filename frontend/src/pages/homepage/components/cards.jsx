import React, { useContext, useState } from 'react'
import { AspectRatio, Button, CircularProgress, IconButton, Typography } from '@mui/joy'
import { FavoriteBorderOutlined, Send, Star } from '@mui/icons-material'
import { Box, Chip, Paper, Skeleton, Tooltip, Zoom } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { productContext } from '../../../context/productContext'

export default function Cards({ title, brand, catagory, description, price, rating, discountPercentage, thumbnail, stock, id ,imageErrorMsg}) {
    const {setAlert } = useContext(productContext)
    const [isLoading, setIsLoading] = useState(true);


    const handleChat = () => {

            setAlert([{
                show:true,
                title: "This feature still under development",
                icon: "info",
                color: "info",
            }])
            setTimeout(() => { setAlert([{show:false,}]) }, 4000);
        
    }

    return (
        <Paper className="productCard" variant="outlined" sx={{ height: "20rem", width: "17rem", padding: 0, borderRadius: "8px", border: "none" }}>

            {/* Image and icons */}
            <AspectRatio sx={{ borderRadius: "8px 8px 0 0" }} minHeight="10rem" maxHeight="10rem" >
            {isLoading && <CircularProgress color="info" variant="plain" />}
            <Box sx={{height:"10rem"}}>
                <img
                    style={{width:'100%',height:"100%",objectFit:"fill"}}
                    src={thumbnail}
                    srcSet={thumbnail}
                    onLoad={()=>{setIsLoading(false)}}
                    loading="lazy"
                    alt=""
                />
            </Box>

                <IconButton
                    sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                    variant="solid"
                    color="neutral"
                    size="sm">
                    <FavoriteBorderOutlined />
                </IconButton>

                <Chip label={`${Math.trunc(discountPercentage)}% Off`} sx={{ position: 'absolute', top: '0.5rem', left: '0.5rem' }} variant='filled' color="success" />
            </AspectRatio>
            {/* Image */}



            <Box sx={{ height: "100%", m: 1 }}>

                {/* Title and rating */}
                <Box sx={{ display: "flex", width: "100%", height: "3rem", flexDirection: "row" }}>
                    <Box sx={{ width: "70%", overflow: "hidden" }}>
                        <Typography level="h2" fontSize="md" sx={{ mt: 1, color: "whitesmoke" }}>
                            {title}
                        </Typography>
                    </Box>
                    <Box sx={{ width: "30%" }}>
                        <Chip sx={{ mt: 1 }} variant='outlined' color='warning' icon={<Star color='warning' />} label={rating} />
                    </Box>
                </Box>
                {/* Title and rating */}


                {/* Brand and stocks */}
                <Box sx={{ display: "flex", width: "100%", height: "3rem" }}>
                    <Typography overflow={"hidden"} width={"11rem"} level="body2">{brand}</Typography>
                    <Box sx={{ width: "30%", display: "flex", justifyContent: "flex-end", }}>
                        <Tooltip TransitionComponent={Zoom} title={`Only ${Math.trunc(stock)} left in stock`} arrow>
                            <Chip label={`Only ${Math.trunc(stock)} left`} sx={{ mt: 1 }} variant='outlined' color="warning" />
                        </Tooltip>
                    </Box>
                </Box>
                {/* Brand and stocks */}

                {/* Price and Buttons */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ width: "6rem" }}>
                        <Typography level="body3" ><s>{`$${price}`}</s></Typography>
                        <Typography fontSize="lg" sx={{ color: "whitesmoke" }} fontWeight="lg">
                            {`$${Math.trunc(Math.trunc(discountPercentage) * price / 100)}`}
                        </Typography>
                    </Box>
                    {/* <Button
                                onClick={() => navigate("/products")}
                                variant="solid"
                                size="sm"
                                color="primary"
                                sx={{ ml: 'auto', fontWeight: 600 }}
                            >
                                <Edit /> Edit
                            </Button> */}
                    <Box sx={{ width: "8rem" }}>
                        <Button
                            className='addtocart'
                            onClick={handleChat}
                            variant="solid"
                            size="sm"
                            color="danger"
                            sx={{ ml: 'auto', fontWeight: 600, height: "100%", width: "100%" }}
                        >
                            Ask Seller <Send />
                        </Button>
                    </Box>
                </Box>
                {/* Price and Buttons */}

            </Box>

        </Paper>
    )
}

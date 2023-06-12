import React from 'react'
import { AspectRatio, Button, Card, CardContent, IconButton, Typography } from '@mui/joy'
import { BookmarkAdd, Delete, Edit, Star } from '@mui/icons-material'
import { Box, Chip } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Cards({ title, brand, catagory, description, price, rating, discountPercentage, thumbnail, stock, id }) {
    const navigate = useNavigate()

    const handleDelete = async () => {
        await axios.delete(`/deleteProducts/${id}`)
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
    }

    return (
        <div>
            <Card variant="outlined" sx={{ width: 320 }}>
                <div>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                        <img
                            src={thumbnail}
                            srcSet={thumbnail}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                        <div>
                            <Typography level="h2" fontSize="md" sx={{ mt: 1 }}>
                                {title}
                            </Typography>
                            <Typography level="body2">{brand}</Typography>
                        </div>

                        <Chip label={`Only ${Math.trunc(stock)} left`} sx={{ mt: 1 }} variant='outlined' color="warning" />

                        <Chip sx={{ mt: 1 }} icon={<Star color='warning' />} label={rating} />
                    </Box>

                    <Chip label={`${Math.trunc(discountPercentage)}% Off`} sx={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} variant='filled' color="success" />


                    {/* <IconButton
                        variant="solid"
                        color="danger"
                        size="sm"
                        
                    >
                    </IconButton> */}

                </div>

                <CardContent orientation="horizontal">
                    <div>
                        <Typography level="body3"><s>{`$${price}`}</s></Typography>
                        <Typography fontSize="lg" fontWeight="lg">
                            {`$${Math.trunc(Math.trunc(discountPercentage) * price / 100)}`}
                        </Typography>
                    </div>
                    <Button
                        onClick={() => navigate("/products")}
                        variant="solid"
                        size="sm"
                        color="primary"
                        sx={{ ml: 'auto', fontWeight: 600 }}
                    >
                        <Edit /> Edit
                    </Button>
                    <Button
                        onClick={handleDelete}
                        variant="solid"
                        size="sm"
                        color="danger"
                        aria-label="Explore Bahamas Islands"
                        sx={{ ml: 'auto', fontWeight: 600 }}
                    >
                        <Delete /> Delete
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

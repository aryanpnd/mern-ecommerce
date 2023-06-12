import React, { useEffect, useState } from 'react'
import Cards from './components/cards'
import { Box, Grid } from '@mui/material'
import axios from 'axios'

export default function Homepage() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await axios.get("/products")
        setProducts(res.data)
        console.log(res.data)
    }

    useEffect(
        () => {
            getProducts()
        }, [])

    return (
        <Box sx={{ height: "111%", padding: "1rem" }}>

            {/* <Box sx={{ display: "flex", flexFlow: "row wrap", gap: "2rem", height: "100%", width: "100%", overflow: "hidden", rowGap: "2rem", columnGap: "5%" }}> */}
            <Grid container  spacing={{ xs: 2, sm: 2, md: 5,lg:5  }} columnSpacing={{ xs: 1, sm: 1, md:40,lg:10 }} columns={{ xs: 1, sm: 1, md: 1,lg:1 }}>

                {products.map((item, index) => (
                    <Grid item >

                        <Cards
                            key={index}
                            title={item.title}
                            brand={item.brand}
                            price={item.price}
                            rating={item.rating}
                            stock={item.stock}
                            thumbnail={item.thumbnail}
                            discountPercentage={item.discountPercentage}
                            id={item._id}
                        />
                    </Grid>
                ))
                }

            </Grid>
            {/* </Box> */}

        </Box>
    )
}

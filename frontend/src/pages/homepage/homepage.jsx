import React, { useContext, useEffect, useRef, useState } from 'react'
import Cards from './components/cards'
import { Box, Grid } from '@mui/material'
import axios from 'axios'
import Filtertab from './components/filtertab'
import { productContext } from '../../context/productContext'
import { Button } from '@mui/joy'
import { hostname } from "../../config.js"
import LoadingChats from '../components/miscellaneous/Skeleton'

export default function Homepage() {

    const { products, setProducts, sortby, sortbyorder, totalProducts, settotalProducts, pageSize, pageNo, setpageNo, showFilter,chatloading, setchatLoading } = useContext(productContext)
    


    const getTotalProducts = async () => {
        await axios.get(`${hostname}/api/totalproducts`).then((res) => {
            const array = []
            const lenght = Math.ceil(res.data / pageSize)//dividing total products with pageSize and rounding off to the nearest whole number to get buttons according to the page size
            for (let i = 0; i < lenght; i++) {
                array.push(i);

            }
            settotalProducts(array)
        })

    }

    const getProducts = async () => {
        setchatLoading(true)
        await axios.get(`${hostname}/api/products?sortby=${sortby}&order=${sortbyorder}&pagesize=${pageSize}&pageno=${pageNo}`)
            .then((res) => {
                    setProducts(res.data)
                    setchatLoading(false)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(
        () => {
            getTotalProducts()
            getProducts()
        }, [])


    // function for button click , whenever page updates, it will call the api
    useEffect(() => {
        getProducts()
    }, [pageNo])


    return (
        <Box sx={{ height: "88%", overflowX: "hidden" }}>


            <Filtertab />

            <Box sx={{ display: "flex", flexFlow: "row wrap", height: showFilter ? "77%" : "92%", width: "100%", rowGap: "1.7rem", columnGap: "3%", justifyContent: "space-evenly", overflow: "scroll" }}>
                {chatloading ? (    
                    <>
                        <LoadingChats />
                        <LoadingChats />
                        <LoadingChats />
                        <LoadingChats />
                        <LoadingChats />
                        <LoadingChats />
                        <LoadingChats />
                        <LoadingChats />
                    </>
                )
                    :
                    (products.map((item, index) => (
                        <Cards
                            key={index}
                            title={item.title}
                            brand={item.brand}
                            price={item.price}
                            rating={item.rating}
                            stock={item.stock}
                            thumbnail={item.thumbnail}
                            discountPercentage={item.discountPercentage}
                            imageLoadTimeout={10}
                            imageErrorMsg=""
                            id={item._id}
                        />
                    ))
                    )
                }
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", height: "5%", width: "100%" }}>
                <Box sx={{ display: "flex", width: "30%", height: "100%", justifyContent: "space-evenly", alignItems: "center", padding: "4px" }}>
                    {
                        totalProducts.map((data, index) => (
                            <Button variant={pageNo === index + 1 ? "solid" : "outlined"} key={index} onClick={() => setpageNo(index + 1)}>{index + 1}</Button>
                        ))
                    }
                </Box>
            </Box>

        </Box>
    )
}

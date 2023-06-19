import { Add } from '@mui/icons-material';
import { CssVarsProvider, Input, extendTheme } from '@mui/joy';
import Button from '@mui/joy/Button';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { hostname } from '../../config';
import Cards from '../homepage/components/cards';

const customTheme = extendTheme({
  typography: {
    display1: {
      background:
        'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
});

export default function AddproductsMax() {

  const [title, settitle] = useState('')
  const [brand, setbrand] = useState('')
  const [price, setprice] = useState()
  const [stock, setstock] = useState()
  const [discount, setdiscount] = useState()
  const [thumbnail, setthumbnail] = useState('')
  const [catagory, setcatagory] = useState('')


  const handleSubmit = () => {
    axios.post(`${hostname}/api/addproducts`, {
      title: title,
      brand: brand,
      catagory: catagory,
      price: price,
      stock: stock,
      discount: discount,
      thumbnail,
      thumbnail: thumbnail
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
  }

  // console.log(title,brand ,price ,stock, discount ,thumbnail)

  return (
    <Box display={{xs: "none",sm: "none",md: "block",lg: "block",xl: "block"}}  
    sx={{ height: "100%", width: "100%" }}>

      {/* <Typography textAlign={"center"} level="h2" component="h2" variant='h2' fontWeight={"bold"} sx={{ mt: 1, mb: 4 }}>
        Add a product
      </Typography> */}


      <Box sx={{ display: "flex", width: "100%", height: "100%" , overflow: "scroll"}}>

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "40%", height: "80%" , rowGap: '1rem'}}>
          <CssVarsProvider theme={customTheme}>
            <Box sx={(theme) => theme.typography.display1}>Preview</Box>
          </CssVarsProvider>
          <Typography variant='h6' color='whitesmoke'>Type something to preview the final card</Typography>
          <Cards
            title={title}
            brand={brand}
            price={price}
            stock={stock}
            thumbnail={thumbnail}
            discountPercentage={discount}
            imageErrorMsg="No image or invalid Thumnail"
          />


        </Box>


        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: "60%", rowGap: "1rem" }}>

          <Typography variant='h4' fontWeight={"bolder"} color={"whitesmoke"}>Add a product</Typography>

          <Input size='lg' onChange={(e) => { settitle(e.target.value) }} placeholder='Title' sx={{ width: "40%" }} variant="solid" />

          <Input size='lg' onChange={(e) => { setbrand(e.target.value) }} placeholder='Brand' sx={{ width: "40%" }} variant="solid" />

          <Input size='lg' onChange={(e) => { setstock(e.target.value) }} placeholder='Stock' type='number' sx={{ width: "40%" }} variant="solid" />

          <Input size='lg' onChange={(e) => { setdiscount(e.target.value) }} placeholder='Discount' type='number' sx={{ width: "40%" }} variant="solid" />

          <Input size='lg' onChange={(e) => { setprice(e.target.value) }} placeholder='price' type='number' sx={{ width: "40%" }} variant="solid" />

          <Input size='lg' onChange={(e) => { setthumbnail(e.target.value) }} placeholder='Thumbnail URL' sx={{ width: "40%" }} variant="solid" />

          <Input size='lg' onChange={(e) => { setcatagory(e.target.value) }} placeholder='catagory' sx={{ width: "40%" }} variant="solid" />

          <Button onClick={handleSubmit} sx={{ width: "40%", marginBottom: "2rem" }}>Add <Add /></Button>

        </Box>

      </Box>


    </Box>
  )
}

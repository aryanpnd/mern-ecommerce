import { Add } from '@mui/icons-material';
import { Input } from '@mui/joy';
import Button from '@mui/joy/Button';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

export default function Products() {

  const [title, settitle] = useState('')
  const [brand, setbrand] = useState('')
  const [price, setprice] = useState()
  const [stock, setstock] = useState()
  const [discount, setdiscount] = useState()
  const [thumbnail, setthumbnail] = useState('')
  const [catagory, setcatagory] = useState('')


  const handleSubmit = () => {
    axios.post('/addproducts', {
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
    <Box sx={{ height: "100%", width: "100%" }}>

      <Typography textAlign={"center"} level="h2" component="h2" variant='h2' fontWeight={"bold"} sx={{ mt: 1, mb: 4 }}>
        Add a product
      </Typography>

      <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', width: "100%", flexFlow: "row wrap", gap: "2rem" }}>

        <Input size='lg' onChange={(e) => { settitle(e.target.value) }} placeholder='Title' sx={{ width: "40%" }} variant="soft" />
        <Input size='lg' onChange={(e) => { setbrand(e.target.value) }} placeholder='Brand' sx={{ width: "40%" }} variant="soft" />
        <Input size='lg' onChange={(e) => { setstock(e.target.value) }} placeholder='Stock' type='number' sx={{ width: "40%" }} variant="soft" />
        <Input size='lg' onChange={(e) => { setdiscount(e.target.value) }} placeholder='Discount' type='number' sx={{ width: "40%" }} variant="soft" />
        <Input size='lg' onChange={(e) => { setprice(e.target.value) }} placeholder='price' type='number' sx={{ width: "40%" }} variant="soft" />
        <Input size='lg' onChange={(e) => { setthumbnail(e.target.value) }} placeholder='Thumbnail' sx={{ width: "40%" }} variant="soft" />
        <Input size='lg' onChange={(e) => { setcatagory(e.target.value) }} placeholder='catagory' sx={{ width: "40%" }} variant="soft" />
      </Box>

      <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', width: "100%", flexFlow: "row wrap", gap: "2rem", height: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', width: "50%", flexFlow: "row wrap", gap: "2rem", height: "100%", mt: "3rem" }}>
          <Button fullWidth={1} onClick={handleSubmit} sx={{ height: "3rem" }}>Add <Add /></Button>
        </Box>
      </Box>

    </Box>
  )
}

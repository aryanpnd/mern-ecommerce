import React, { useContext, useEffect, useState } from 'react'

import { FormControl, InputLabel, MenuItem } from '@mui/material';
import axios from 'axios';
import { productContext } from '../../../context/productContext';
import { hostname } from '../../../config';
import { Option, Select } from '@mui/joy';

export default function SortingSelect() {

    const { setProducts, sortby, setSortby, sortbyorder, setsortbyorder, pageSize, pageNo, setchatLoading } = useContext(productContext)

    const handleChange = (e, value) => {
        setSortby(value.split('.')[0])
        setsortbyorder(value.split('.')[1])

    }

    const getsortedProducts = async () => {
        setchatLoading(true)
        await axios.get(`${hostname}/api/products?sortby=${sortby}&order=${sortbyorder}&pagesize=${pageSize}&pageno=${pageNo}`).then((res) => {
            setProducts(res.data)
            setchatLoading(false)
        })
    }

    useEffect(() => {
        getsortedProducts() // we are doing this (making getrequest then calling inside use effect , and only assigning usestates inside onchange event because) because of async behaviour, else the select component start behaving abnormally
    }, [sortbyorder])


    return (
        <>
            <Select sx={{ width: "100%" }} placeholder="Select . . . ." variant='solid' onChange={handleChange}
            >
                <Option value="id.1">defualt</Option>
                <Option value="price.-1">price High to Low</Option>
                <Option value="price.1">price Low to High</Option>
                <Option value="rating.-1">Rating High to Low</Option>
                <Option value="rating.1">Rating Low to High</Option>
                <Option value="discountPercentage.-1">Discount High to Low</Option>
                <Option value="discountPercentage.1">Discount Low to High</Option>
            </Select>
        </>
    )
}

import React, { useContext, useState } from 'react'
import { Box, Typography } from '@mui/material'
import SortingSelect from './select'
import { IconButton } from '@mui/joy'
import { Close } from '@mui/icons-material'
import { productContext } from '../../../context/productContext'


export default function Filtertab() {

    const { showFilter, setShowFilter } = useContext(productContext)

    return (
        <Box className="dropAnim" sx={{ display: showFilter ? 'flex' : "none", justifyContent: "space-between", height: "13%", width: "100%" }}>

            <Box width={"10%"}></Box>

            <Box width={"50%"} height={'100%'} display={"flex"} justifyContent={"center"}>

                <Box sx={{ display:'flex', justifyContent: "center", height: "90%", width: "40%" }}>
                    <Typography level="h2" fontSize="1.7rem" color='whitesmoke' textAlign='center' justifyContent='cenetr' alignItems='center' display='flex'>Sort by</Typography>
                </Box>

                <Box width={"60%"} height={"90%"} marginLeft={2} justifyContent='cenetr' alignItems='center' display='flex'>
                    <SortingSelect />

                </Box>
            </Box>

            <Box width={"15%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <IconButton onClick={() => setShowFilter(false)} variant='soft' color='danger'>
                    <Close />
                </IconButton>
            </Box>

        </Box>
    )
}

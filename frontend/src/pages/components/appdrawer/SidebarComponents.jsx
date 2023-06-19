import { Box, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import logo from '../../../assets/images/logo.png'
import { Button } from '@mui/joy'
import { AddBoxRounded, FavoriteBorderOutlined, FilterAlt, Inventory2, Logout, Person2, Settings, Store } from '@mui/icons-material'
import { useMatch, useNavigate } from 'react-router-dom'
import { productContext } from '../../../context/productContext'

export default function SidebarComponents() {

  const { showFilter, setShowFilter } = useContext(productContext)
  const navigate = useNavigate()

  const homeLocation = useMatch("/")
    const blogLocation = useMatch("/blog")
    const calculatorLocation = useMatch("/analysis")
    const contactUsLocation = useMatch("/contactus")

  const buttonNavigation = [
    {
      icon: <Person2 />,
      title: "Profile",
      "onclick": () => { },
      location:useMatch("/profile")
    }
    ,
    {
      icon: <Store />,
      title: "Home",
      "onclick": () => { navigate('/') },
      location:useMatch("/")
    }
    ,
    {
      icon: <FilterAlt />,
      title: "Filters",
      "onclick": () => { showFilter ? setShowFilter(false) : setShowFilter(true) },
      location:useMatch("/filters")
    }
    ,
    {
      icon: <FavoriteBorderOutlined />,
      title: "My wishlist",
      "onclick": () => { },
      location:useMatch("/wishlist")
    }
    ,
    {
      icon: <Inventory2 />,
      title: "My Products",
      "onclick": () => { },
      location:useMatch("/myproducts")
    }
    ,
    {
      icon: <AddBoxRounded />,
      title: "Post a Product",
      "onclick": () => { navigate('/addproduct') },
      location:useMatch("/addproduct")
    }
    ,
    {
      icon: <Settings />,
      title: "Settings",
      "onclick": () => { },
      location:useMatch("/settings")
    }
    ,
    {
      icon: <Logout />,
      color: "danger",
      title: "Logout",
      "onclick": () => { },
      location:useMatch("/logout")
    }
  ]

  return (
    <Box sx={{ width: "100%", height: "100%" }}>

      <Box sx={{ height: "15%", alignItems: "center" }}>
        <img src={logo} alt="" width="100%" height="100%" />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "85%", width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem", height: "85%", width: "95%" }}>
          {
            buttonNavigation.map((values, index) => (
              <Button onClick={values.onclick} variant={values.location?"soft":"plain"} color={values.color} startDecorator={values.icon}>{values.title}</Button>
            ))
          }
        </Box>
      </Box>

    </Box>
  )
}

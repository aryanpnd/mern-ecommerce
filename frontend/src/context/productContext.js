import React, { createContext, useState } from 'react';

export const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [sortby, setSortby] = useState('id')
  const [sortbyorder, setsortbyorder] = useState(1)
  const [totalProducts, settotalProducts] = useState([])
  const [pageSize, setpageSize] = useState(5) //hard coded to 5
  const [pageNo, setpageNo] = useState(1)
  const [showFilter, setShowFilter] = useState(false)
  const [alert, setAlert] = useState([{ show: false, title: "", icon: "", color: "",duration:0 }])
  const [chatloading, setchatLoading] = useState(false)

  return (
    <productContext.Provider
      value={{ products, setProducts, sortby, setSortby, sortbyorder, setsortbyorder, totalProducts, settotalProducts, pageSize, setpageSize, pageNo, setpageNo, showFilter, setShowFilter, alert, setAlert,chatloading, setchatLoading}}>

      {children}
    </productContext.Provider>
  );
};
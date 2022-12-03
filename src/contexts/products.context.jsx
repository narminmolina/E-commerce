import { createContext, useEffect, useState } from "react";
import PRODUCTS from '../shop-data.json'

export const ProductsContext=createContext({
products:[],
})

export const ProductsProvider=({children})=>{
const [products,]=useState(PRODUCTS)
const value={products};
useEffect(()=>{


}, [])


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
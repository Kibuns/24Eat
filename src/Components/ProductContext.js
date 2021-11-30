import React, {useContext, useState, useEffect } from 'react'

const ProductContext = React.createContext(null)
const ProductUpdateContext = React.createContext()
const ProductClearContext = React.createContext()

export function useProduct(){
    return useContext(ProductContext)
}
export function useProductUpdate(){
    return useContext(ProductUpdateContext)
}

export function useProductClear(){
    return useContext(ProductClearContext)
}

export function ProductProvider({children}){
    const [extProducts, setExtProducts] = useState([])

    useEffect(() =>{
        console.log(extProducts)
      }, [extProducts])

    function updateProduct(item){
        console.log(item)
        if(!item) return
        setExtProducts([...extProducts,{
            productId: item.id,
            name: item.name,
            price: item.price,
            image: item.image ? item.image : null
        }])
    }

    function clearProduct(){
        setExtProducts([])
    }

    return (
        <ProductContext.Provider value={extProducts}>
            <ProductUpdateContext.Provider value={updateProduct}>
                <ProductClearContext.Provider value={clearProduct}>
                {children}
                </ProductClearContext.Provider>
            </ProductUpdateContext.Provider>
        </ProductContext.Provider>
    )
}
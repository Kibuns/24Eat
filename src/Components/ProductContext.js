import React, {useContext, useState } from 'react'

const ProductContext = React.createContext(null)
const ProductUpdateContext = React.createContext()

export function useProduct(){
    return useContext(ProductContext)
}
export function useProductUpdate(){
    return useContext(ProductUpdateContext)
}

export function ProductProvider({children}){
    const [extProduct, setExtProduct] = useState()

    function updateProduct(item){
        console.log(item)
        if(!item) return setExtProduct()
        setExtProduct({productId: item.id, name: item.name, price: item.price})
        console.log(extProduct)
    }

    return (
        <ProductContext.Provider value={extProduct}>
            <ProductUpdateContext.Provider value={updateProduct}>
                {children}
            </ProductUpdateContext.Provider>
        </ProductContext.Provider>
    )
}
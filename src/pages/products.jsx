import React, { useState, useEffect } from 'react'

const Products = () => {

    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            try {
                let myProducts = await fetch('url')
                let res = myProducts.json()
                setProductsList(res)
            }
            catch (err) {
                console.log(err)
            }
        }
    }, [])
    return (
        <div>
            {
                productsList.map((p) => {
                    return (
                        <p>{p.name}</p>
                    )
                })
            }
        </div>
    )
}

export default Products

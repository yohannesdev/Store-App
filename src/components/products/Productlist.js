import React from 'react'
import { ProductImage ,ProductInfo,Producttitle,Producholder,Producprice} from './product.style'
import {Link} from "react-router-dom"
const Productlist=({id,image,title,price}) =>{
    const detailpage=`/products/${id}`
    return (
        <Link to={detailpage}>
        <Producholder>
            <div>
                <ProductImage src={image} alt={`image of ${title}`}></ProductImage>
            </div>
            <ProductInfo><Producttitle>{title}</Producttitle>
            <Producprice>${price}</Producprice></ProductInfo>
            
        </Producholder>
        </Link>
    )
}

export default Productlist

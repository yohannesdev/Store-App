import React from 'react'
import { ProductImage ,ProductInfo,Producttitle,Producholder,Producprice} from './product.style'
import {Link,Redirect} from "react-router-dom"
const Productlist=({id,image,title,price,style}) =>{
    const detailpage=`/products/${id}`
    return (
        <Link to={detailpage} style={{textDecoration:"none"}}>
        <Producholder style={style}>
            <div>
                <ProductImage style={style} src={image} alt={`image of ${title}`}></ProductImage>
            </div>
            <ProductInfo ><Producttitle style={style} >{title}</Producttitle>
            <Producprice style={style} >${price}</Producprice></ProductInfo>
            
        </Producholder>
        </Link>
    )
}

export default Productlist

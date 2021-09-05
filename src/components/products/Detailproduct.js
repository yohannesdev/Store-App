import React from 'react'
// import { ProductImage ,ProductInfo,Producttitle,Producholder,Producprice} from './product.style'
import styled from 'styled-components'
const ProductImage=styled.img`
width: 200px;
`
const Detailproduct=({image,title,price,description,category})=> {
    return (
        <Producholder>
        <div>
            <ProductImage src={image} alt={`image of ${title}`}></ProductImage>
        </div>
        <ProductInfo>
            <Producttitle>{title}</Producttitle>
        <Producprice>${price}</Producprice>

        <Producprice>{category}</Producprice>
        <Producprice>{description}</Producprice>
        </ProductInfo>
        
    </Producholder>
    )
}

export default Detailproduct

import React from 'react'
// import { ProductImage ,ProductInfo,Producttitle,Producholder,Producprice} from './product.style'
import styled from 'styled-components'
const ProductImage=styled.img`
width: 300px;
`
const ProductInfo=styled.div`
padding:70px;
`
const Producttitle=styled.p`

font-size: 30px;
font-weight:600;
`
const Producholder=styled.div`
display: flex;
margin:40px;
vertical-align:center;
`
const Producprice=styled.p`
font-size:30px;
`
const Productdisc=styled.p`
margin-top:15px;
`
const Cart=styled.div`
font-size:25px;
background-color: chocolate;
width: 250px;
padding:10px;
font-weight:500;
text-align:center;
`
const Detailholder=styled.div`
padding:60px;
`
const Quantity=styled.div`
display: flex;
margin:15px 0;
`
const Btn=styled.div`
font-size: 25px;
background-color:chocolate;
width: 50px;
margin:0 10px 0 0;
text-align: center;
`
const Detailproduct=({image,title,price,description,category})=> {
    return (<Detailholder>
    <Producttitle>{title}</Producttitle>
        <Producholder>
        <div>
            <ProductImage src={image} alt={`image of ${title}`}></ProductImage>
        </div>
        <ProductInfo>
            
        <Producprice>${price}</Producprice>
        <h4>Quantity</h4>
        <Quantity><Btn>-</Btn><Btn>+</Btn></Quantity>
        
<Cart>Add to Cart</Cart>
        
        
        </ProductInfo>
        
    </Producholder>
    <h4>Over View</h4>
    <Productdisc>{description}</Productdisc>
    <h4>Category</h4>
    <Productdisc>{category}</Productdisc>
    </Detailholder>
    )
}

export default Detailproduct

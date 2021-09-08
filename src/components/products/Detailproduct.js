import React from 'react'
// import { ProductImage ,ProductInfo,Producttitle,Producholder,Producprice} from './product.style'
import styled from 'styled-components'
import { CartState } from '../../context/Cartprovider'
import Productlist from './Productlist'

const ProductImage=styled.img`
width: 300px;
`
const ProductInfo=styled.div`
padding:70px;
flex-grow: 1;
`
const Producttitle=styled.p`
color:rgb(68, 68, 143);
font-size: 30px;
font-weight:600;
flex-grow:1;
`
const Producholder=styled.div`
display: flex;
margin:40px;
vertical-align:center;
/* justify-content:space-between; */
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


const Detailproduct=({id,image,title,price,description,category})=> {
   const[{cart},dispatch]= CartState()
    const AddtoCart=()=>{
        dispatch({
            type: "ADD_TO_CART",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              
            },
          });
    }
    console.log(cart)
    return (<Detailholder>
        <div>
            <div style={{display:"flex"}}>
    <Producttitle>{title}</Producttitle>
    <div>
        <h4>similar category</h4>
        
        </div>
        </div>
        <Producholder>
        <div>
            <ProductImage src={image} alt={`image of ${title}`}></ProductImage>
        </div>
        <ProductInfo>
            
        <Producprice>${price}</Producprice>
        
        
<Cart onClick onClick={AddtoCart}>Add to Cart</Cart>
        

        </ProductInfo>
        <div style={{width:"200px", height:"200px" ,display:"block"}}>
        <Productlist id={id} image={image} title={title} style={{idth:"100px",backgroundColor:"red"}} />
        </div>
    </Producholder>
    <h4>Over View</h4>
    <Productdisc>{description}</Productdisc>
    <h4>Category</h4>
    <Productdisc>{category}</Productdisc>
    </div>
    
    </Detailholder>
    )
}

export default Detailproduct

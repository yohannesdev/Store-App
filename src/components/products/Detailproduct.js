import React, { useEffect, useState } from 'react'
// import { ProductImage ,ProductInfo,Producttitle,Producholder,Producprice} from './product.style'
import styled from 'styled-components'
import { CartState } from '../../context/Cartprovider'
import { productsByCategory } from '../../utils/products'
import Productlist from './Productlist'
import {Link,Redirect} from "react-router-dom"
const ProductImage=styled.img`
width: 400px;
`
const ProductInfo=styled.div`
padding:100px;
flex-grow: 1;
`
const Producttitle=styled.p`
color:rgb(68, 68, 143);
font-size: 30px;
font-weight:600;
/* flex-grow:1; */
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
background-color: lightpink;
width: 250px;
padding:10px;
font-weight:500;
text-align:center;
border-radius:5px;
`
const Detailholder=styled.div`
padding:60px;
display: flex;
`
const Detail=styled.div`
width: 70vw;
`

const Detailproduct=({id,image,title,price,description,category,style})=> {
    const detailpage=`/products/${id}`
   const[{cart},dispatch]= CartState()
   const[products,setProducts]=useState([])
   const newproduct=products.filter((product) => product.id !== id)
   if(cart){function checkproduct(product) {
        return product.id === id;
      }
    var exist=  cart.find(checkproduct) 
    }
    // console.log("exist  " + exist)
    const AddtoCart=()=>{
exist ??  dispatch({
            type: "ADD_TO_CART",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              quantity:1,
              
            },
          });
        // }
    }
//    console.log(cart)
    useEffect(
        ()=>{
            // productsByCategory(category)
            fetch("/product.json").then((res)=>res.json())
            .then((product)=>{
                const productList=product.products;

const singleProduct = productList.filter(
    (x) => x.category ==category
  );
  console.log(singleProduct)
  setProducts(singleProduct)
            //    setProducts(product)
               
        })
           
        },[]
    )
    // console.log(products)
    return (<Detailholder>
        <Detail>
            <div style={{display:"flex"}}>
    <Producttitle>{title}</Producttitle>
        </div>
        <Producholder>
        <div>
            <ProductImage src={image} alt={`image of ${title}`}></ProductImage>
        </div>
        <ProductInfo>
            
        <Producprice>${price}</Producprice>
        
        
<Cart onClick onClick={AddtoCart}>Add to Cart</Cart>
        

        </ProductInfo>
        
    </Producholder>
    <h4>Over View</h4>
    <Productdisc>{description}</Productdisc>
    <h4>Category</h4>
    <Productdisc>{category}</Productdisc>
    </Detail>
    <div>
        <h4>similar category</h4>
        <div>
            { 
            newproduct.map((products)=>(    <Link key={products.id}  to={detailpage} style={{textDecoration:"none"}}>
            <Productlist key={products.id} id={products.id} image={products.image} title={products.title} price={products.price}style={{width:"100px",fontSize:"15px",fontWeight:"400"}} /></Link>))}
        
        </div>
        </div>
    </Detailholder>
    )
}

export default Detailproduct

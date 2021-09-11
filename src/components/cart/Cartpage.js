import React, { useEffect, useState } from 'react'
import Summary from '../checkout/Summary'
import Productlist from '../products/Productlist'
import styled from'styled-components'
import { CartState } from '../../context/Cartprovider'

const Remove=styled.div`
width: 150px;
height:50px;
font-size:25px;
background-color:lightpink;
text-align: center;
font-weight:400;
margin: 50px 0;
border-radius:5px;
`
const Div=styled.div`
display:flex;
justify-content:space-between;
`
const Quantity=styled.div`
display: flex;
margin:60px 0 0 0;
height:40px ;
width: 150px;
/* justify-content:space-around; */

`
const QuantityHolder=styled.div`
width: 200px;
`
const Btn=styled.div`
font-size: 25px;
background-color:lightpink;
width: 55px;
/* margin:0 10px 0 10px; */
text-align: center;
border-radius:5px;
`
function Cartpage() {
    const[{cart},dispatch]=CartState()
    const AddQuantity=(id)=>{
        dispatch({
            type: "ADD_QUANTITY",
             id: id,   
          });
    }
    const ReduceQuantity=(id)=>{
        dispatch({
            type: "REDUCE_QUANTITY",
             id: id,   
          });
    }
    const Removecart=(id)=>{
        dispatch({
            type: "REMOVE_CART",
             id: id,   
          });
    }
 
    return (
        <div style={{padding:"0 50px"}}>
            
            {cart.length ?
            <>
            <h1>your Cart</h1>
            <Div style={{display:"flex"}} >
                <div>
                  {cart.map((product)=>(
                  
                  <Div key={product.id}>
                  <Productlist id={product.id} image={product.image} title={product.title} price={product.price}/>
                  <QuantityHolder >
                
            <Quantity>
            <Btn  onClick={()=>ReduceQuantity(product.id)}>-</Btn>
            <h4 style={{padding:"0 10px"}}>{product.quantity}</h4>
            <Btn onClick={()=>AddQuantity(product.id)}>+</Btn>
            </Quantity>
            <Remove onClick={()=>Removecart(product.id)}>Remove</Remove></QuantityHolder>
                  </Div>
              ))}  
            </div>
            <Summary/>
            </Div> </>:<h2>your cart is empty</h2>}
        </div>
    )
}

export default Cartpage

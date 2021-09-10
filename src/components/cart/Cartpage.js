import React, { useEffect, useState } from 'react'
import Summary from '../checkout/Summary'
import Productlist from '../products/Productlist'
import styled from'styled-components'
import { CartState } from '../../context/Cartprovider'

const Remove=styled.div`
width: 150px;
height:50px;
font-size:25px;
background-color:chocolate;
text-align: center;
font-weight:400;
margin: 50px 0;
`
const Div=styled.div`
display:flex;
justify-content:space-between;
`
const Quantity=styled.div`
display: flex;
margin:20px 0;
height:40px ;
`
const QuantityHolder=styled.div`
width: 200px;
`
const Btn=styled.div`
font-size: 25px;
background-color:chocolate;
width: 50px;
margin:0 10px 0 0;
text-align: center;
`
function Cartpage() {
    const[{cart},dispatch]=CartState()
    // const [quantity,setQuantity]=useState({
    //     1:1,
    // })
    // useEffect(()=>{
    //     setQuantity(cart)
    // },[cart])
   
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
    // console.log(cart)
    // console.log(quantity)
    return (
        <div style={{padding:"0 50px"}}>
            <h1>your Cart</h1>
            <Div style={{display:"flex"}} >
                <div>
              {cart.map((product)=>(
                  
                  <Div key={product.id}>
                  <Productlist image={product.image} title={product.title} price={product.price}/>
                  <QuantityHolder >
                      <div style={{display:"flex",justifyContent:"space-between"}}>
            <h4>Quantity     </h4>
            <h4>{product.quantity}</h4>
            </div>
        <Quantity><Btn  onClick={()=>ReduceQuantity(product.id)}>-</Btn><Btn onClick={()=>AddQuantity(product.id)}>+</Btn></Quantity>
            <Remove onClick={()=>Removecart(product.id)}>Remove</Remove></QuantityHolder>
                  </Div>
              ))}  
            </div>
            <Summary/>
            </Div>
        </div>
    )
}

export default Cartpage

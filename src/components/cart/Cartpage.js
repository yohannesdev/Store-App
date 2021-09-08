import React from 'react'
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
const Btn=styled.div`
font-size: 25px;
background-color:chocolate;
width: 50px;
margin:0 10px 0 0;
text-align: center;
`
function Cartpage() {
    const[{cart}]=CartState()
    return (
        <div style={{padding:"0 50px"}}>
            <h1>your Cart</h1>
            <Div style={{display:"flex"}} >
                <div>
              {cart.map((product)=>(
                  
                  <Div >
                  <Productlist image={product.image} title={product.title} price={product.price}/>
                  <div style={{marginTop:"40px"}}>
            <h4>Quantity</h4>
        <Quantity><Btn>-</Btn><Btn>+</Btn></Quantity>
            <Remove>Remove</Remove></div>
                  </Div>
              ))}  
            </div>
            <Summary/>
            </Div>
        </div>
    )
}

export default Cartpage

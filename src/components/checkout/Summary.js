import React from 'react'
import styled from'styled-components'
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Cartprovider';

const CheckOut=styled.div`
width: 200px;
height:50px;
font-size:25px;
background-color:chocolate;
text-align: center;
font-weight:400;
color: black;
font-weight:600;
padding:5px;
`
function Summary({}) {
    const [{cart}]=CartState()
    const Totalprice = (cart) =>
    {
      return  cart?.reduce((amount, item) => item.price*item.quantity + amount, 0);  
    }
    const tax=(Totalprice(cart)*0.08).toFixed(2)
    const total=(Number(tax)+Totalprice(cart)).toFixed(2)
   
    return (
        <div>
            <h2>Summary</h2>
            <p>Sub total price: ${Totalprice(cart)}</p>
            <p>Tax: ${tax}</p>
    <h4>Total:   {total}</h4>
<Link to="/Checkoutpage" style={{textDecoration:"none"}}>
    <CheckOut>Check Out</CheckOut>
    </Link>
        </div>
    )
}

export default Summary

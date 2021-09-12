import React from 'react'
import styled from'styled-components'
import { Link,useHistory } from 'react-router-dom';
import { CartState } from '../../context/Cartprovider';
import { AuthState } from '../../context/AuthProvider';

const CheckOut=styled.div`
width: 200px;
height:50px;
font-size:25px;
background-color:lightpink;
text-align: center;
font-weight:400;
color: black;
font-weight:600;
padding:5px;
border-radius:5px;
`
function Summary({hide}) {
    const history=useHistory()
    const [{cart}]=CartState()
    const [{user}]=AuthState()
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
<Link to={!user && '/login'} style={{textDecoration:"none"}}>
    { !hide&&<CheckOut onClick={(e) => history.push('/checkoutpage')}>Check Out</CheckOut>}
    </Link>
        </div>
    )
}

export default Summary

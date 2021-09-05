import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Navwrapper=styled.div`
background-color:black;
display:flex;
color: white;
justify-content:space-between;
padding:20px;
text-decoration:none;
`
const CartWrapper=styled.div`
display:flex;
width:100px;
font-size:30px;
padding:10px;
color:white;
`
const H2=styled.h2`
text-decoration:none;
color:white;
`
function Nav(cart) {
    return (
        <Navwrapper>
            <Link to='/' style={{textDecoration:"none"}} ><H2>The store</H2>
            </Link>
            
            <Link to="/cart" style={{textDecoration:"none"}} >
            <CartWrapper ><ShoppingCartIcon style={{ fontSize: 40 ,textDecoration:"none"}}/>
<p style={{textDecoration:"none"}} >0</p></CartWrapper>
</Link>
        </Navwrapper>
    )
}

export default Nav

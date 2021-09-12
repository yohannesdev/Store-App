import React from 'react'
import Nav from '../Header/Nav'
import styled from'styled-components'
import { Link } from 'react-router-dom'
const Div=styled.div`
margin:0 200px 0 0;
`
const IMG=styled.img`
margin-top:50px;
width:500px;
`
const Shop=styled.div`
padding:50px 20px 250px 200px;
display: flex;
text-decoration:none;
color:black;
`
const Explore=styled.div`
font-size:30px;
font-weight:500;
background-color: lightpink;
display: inline-block;
width: 300px;
text-align:center;
`
const ShopNow=styled.div`
font-size:50px;
font-weight:800;
padding: 150px 0 0 0;
&:hover{
    color: purple;
    text-decoration:underline;
}
`
function Home() {
    return (
        
          <Shop >
              
              <Div>
              <Link to="/products" style={{textDecoration:"none",color:"black"}}>
            <ShopNow>Shop Now</ShopNow>
            
             </Link>
             <p>  Fake store rest API for your e-commerce or <br/> shopping website prototype</p>
             <Link to="/explore" style={{textDecoration:"none",color:"black"}}>
             <Explore>Explore</Explore>
            
             </Link>
             </Div>
           <IMG src="https://fakestoreapi.com/icons/intro.svg"></IMG>
          </Shop>
        
    )
}

export default Home

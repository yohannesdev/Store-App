import React from 'react'
import Summary from '../checkout/Summary'
import Productlist from '../products/Productlist'
import styled from'styled-components'
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
function Cartpage() {
    return (
        <div style={{padding:"0 50px"}}>
            <h2>your Cart</h2>
            <Div >
                
            <Productlist/>
            <Remove>Remove</Remove>
            <Summary/></Div>
        </div>
    )
}

export default Cartpage

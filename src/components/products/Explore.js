import React, { useEffect, useState } from 'react'
import Productlist from './Productlist'
import { Container, Row, Col } from 'react-bootstrap';
import { getallproducts,productsByCategory } from '../../utils/products'
function Explore() {
    const[products,setProducts]=useState([])
    const[loading,setloading]=useState(true)
    useEffect(
        ()=>{
           getallproducts().then((product)=>{
               setProducts(product)
               setloading(false)
        }).catch((err)=>{
            setloading(true)
        })
           
        },[]
    )
    return (
        <div style={{width:"1000px",margin:"0 auto"}} >
        <Row>
            {
      products.map((product)=>(<Col md="2"><Productlist id={product.id} key={product.id} image={product.image} style={{width:"100px"}} styleinfo={{width:"5px",display:"none",backgroundColor:"red"}}/></Col>))  
    } 
        </Row></div>
    )
}

export default Explore

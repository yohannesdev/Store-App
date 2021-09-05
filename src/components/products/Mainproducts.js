import React, { useEffect, useState } from 'react'
import { getallproducts,productsByCategory } from '../../utils/products'
import Productlist from './Productlist'
import { Container, Row, Col } from 'react-bootstrap';
import Category from './Category';

const Mainproducts=()=>{
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
    console.log(products)
    const searchBycategory=(category)=>{
        setProducts([])
        setloading(true)
productsByCategory(category).then((res)=>{
            setProducts(res)
            setloading(false)
        }
        ).catch((err)=>{
            setloading(true)
        })
    }
    console.log(loading)
return(
    <Container>
        <Category category={searchBycategory}/>
    <Row >
        
   {loading &&
   <h1>loading...</h1>
    
   }
    {
      products.map((product)=>(<Col md="6"><Productlist id={product.id} key={product.id} image={product.image} title={product.title} price={product.price}/></Col>))  
    }     
     
        

    </Row></Container>
)
}
export default Mainproducts
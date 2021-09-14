import React, { useEffect, useState } from 'react'
import { getallproducts,productsByCategory } from '../../utils/products'
import Productlist from './Productlist'
import { Container, Row, Col } from 'react-bootstrap';
import Category from './Category';
import SearchIcon from '@material-ui/icons/Search';
const Mainproducts=()=>{
    const[products,setProducts]=useState([])
    const[loading,setloading]=useState(true)
    const[error,seterror]=useState(false)
    const[searchcategory,setsearchcategory]=useState("")
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
    // console.log(products)
    const searchBycategory=(category)=>{
        setProducts([])
        setloading(true)
productsByCategory(category).then((res)=>{
            setProducts(res)
            setloading(false)
        }
        ).catch((err)=>{
            seterror(true)
        })
    }
   const SortAsce=(a)=>{
       if (a=="a-z"){
           return  products.sort((a, b) => (a.title > b.title ? 1 : -1))
       }
       else if(a=="z-a"){
return products.sort((a, b) => (a.title < b.title ? 1 : -1))
       }
   else if (a=="lowest"){
       return   products.sort((a, b) => (a.price > b.price ? 1 : -1))
   }
   else if(a=="highest"){
    return   products.sort((a, b) => (a.price < b.price ? 1 : -1))
   }
   }
   console.log(products)
return(
    <div >
        <Category category={searchBycategory} sortasce={SortAsce} />
        <div style={{margin:"10px 10px",position:"fixed",top:"20px",right:"210px"}} >
<input onChange={(event)=>setsearchcategory(event.target.value)} type="text" >
</input>
<SearchIcon style={{color:"white"}} onClick={()=>searchBycategory(searchcategory)} />
            </div>
    <Container>
        
    <Row >
        
   {loading &&
   <h1>loading...</h1>
    
   }
  {products.length==0 && !loading && <h1>Items not found</h1>}
    {
      products.map((product)=>(<Col md="6"><Productlist id={product.id} key={product.id} image={product.image} title={product.title} price={product.price}/></Col>))  
    }     
     
        

    </Row></Container></div>
)
}
export default Mainproducts
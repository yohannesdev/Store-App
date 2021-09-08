import React,{useEffect,useState} from 'react'
import { detailproducts } from '../../utils/products'
import Detailproduct from './Detailproduct'
import Productlist from './Productlist'

const Detailproductpage=(props)=> {
    const[productId,setproductid]=useState(props.match.params.pid)
    const[detailproduct,setdetailproduct]=useState(false)
    const[loading,setloading]=useState(true)
    useEffect(
        ()=>{
            detailproducts(productId).then((product)=>{
setdetailproduct(product)
setloading(false)
 }
).catch((err)=>{
    setloading(true)
    setdetailproduct(false)
})
          
        },[]
    )
    console.log(detailproduct)
    return (
        <div>
            {loading &&
   <h1>loading...</h1>
    
   }
        {detailproduct && <Detailproduct 
           key={detailproduct.id} 
           id={detailproduct.id}
           image={detailproduct.image} 
           title={detailproduct.title} 
           price={detailproduct.price}
           category={detailproduct.category}
           description={detailproduct.description}
           />}   
           <Productlist/>
        </div>
    )
}

export default Detailproductpage

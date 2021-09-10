import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { detailproducts } from '../../utils/products'
import Detailproduct from './Detailproduct'
import Productlist from './Productlist'

const Detailproductpage=(props)=> {
    // const[productId,setproductid]=useState(props.match.params.pid)
    const[detailproduct,setdetailproduct]=useState(false)
    const[loading,setloading]=useState(true)
    const{pid}=useParams()
    console.log("pid "+pid)
    useEffect(
        ()=>{
            detailproducts(pid).then((product)=>{
setdetailproduct(product)
setloading(false)

 }
).catch((err)=>{
    setloading(true)
    setdetailproduct(false)
})
     
        },[pid]
    )
    // console.log(detailproduct)
    return (
        <div>
            {loading &&
   <h1>loading...</h1>
    
   }
   <div style={{display:"flex"}}>
        {detailproduct && <Detailproduct 
           key={detailproduct.id} 
           id={detailproduct.id}
           image={detailproduct.image} 
           title={detailproduct.title} 
           price={detailproduct.price}
           category={detailproduct.category}
           description={detailproduct.description}
           
           />}  
         
        </div> 
           
        </div>
    )
}

export default Detailproductpage

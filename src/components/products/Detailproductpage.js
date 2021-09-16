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
    // console.log("pid "+pid)
    useEffect(
        ()=>{
            // detailproducts(pid)
            fetch("/product.json").then((res)=>res.json())
            .then((product)=>{
// setdetailproduct(product)
const productList=product.products;

const singleProduct = productList.filter(
    (x) => x.id ==pid
  );
  console.log(singleProduct)
  setdetailproduct(singleProduct)
  console.log(detailproduct)
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
           key={detailproduct[0].id} 
           id={detailproduct[0].id}
           image={detailproduct[0].image} 
           title={detailproduct[0].title} 
           price={detailproduct[0].price}
           category={detailproduct[0].category}
           description={detailproduct[0].description}
           
           />}  
         
        </div> 
           
        </div>
    )
}

export default Detailproductpage

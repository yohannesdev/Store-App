import React,{useState} from 'react'
import Modalcomponent from './Modalcomponent'
import { Modal ,Button} from 'react-bootstrap';
import styled from 'styled-components';
import Productlist from '../products/Productlist';
import { CartState } from '../../context/Cartprovider';
import Summary from './Summary';
import { Link } from 'react-router-dom';
const Input=styled.input`
border: none;
width:300px;
padding:10px;
margin: 10px auto;
border-bottom:1px solid black;
font-size:20px;
display:block;
`
const SaveBttn=styled.button`
background-color:gray;
width:150px;
margin: 20px auto;
padding:15px;
font-size:15px;
display: block;
`
const Address=styled.p`
padding:0;
`
const CheckOutHolder=styled.div`
padding:20px;
width: 1200px;
margin: 0 auto;
/* background-color:red; */
`
const Information=styled.div`
font-size:25px;
font-weight:500;
margin:30px 0 0;
`
const AddInformation=styled.p`
color:blue;
&:hover{
    text-decoration:underline;
}
`
const Infoholder=styled.div`
display:flex;
justify-content: space-around;
`
const Order=styled.div`
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
function Checkoutpage() {
    const[{cart},dispatch]=CartState()
    const [modalShow, setModalShow] = useState(false);
    const[formstate,setFormstate]= useState ({
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    });
    const[billinginfo,setBillinginfo]=useState(false)
    const[shipinginfo,setshipinginfo]=useState(false)
    const [info,setInfo]=useState("")
    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setFormstate((prev)=>{
            return{...prev,[name]:value}
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(info=="shiping"){
          setshipinginfo({...formstate})  
        }
       else if(info=="billing"){
        setBillinginfo({...formstate})
        }
        setFormstate( {firstname: '',
        lastname: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',})
        setModalShow(false)
    }
    const Emptycart=()=>{
        dispatch({
            type:"EMPTY_CART"}
        )
    }
    console.log(formstate)
    console.log(info)
   
    return (<>
    
        <CheckOutHolder>
           <h1>Review your order</h1> 
            <Infoholder>
           
                {/* <div><Productlist/></div> */}
                <div style={{margin:"70px 0 0 40px"}}>
            <Information>Shiping information</Information>
          { shipinginfo && <Address>{shipinginfo.firstname }{shipinginfo.lastname } <br/> {shipinginfo.address } <br/> {shipinginfo.city }{shipinginfo.state } {shipinginfo.zipcode }</Address>}
            { ! shipinginfo &&<AddInformation onClick={() => {setModalShow(true);setInfo("shiping")}}>add shiping address</AddInformation>}
            <Information>Billing information</Information>
         { billinginfo && <Address>{billinginfo.firstname }{billinginfo.lastname } <br/> {billinginfo.address } <br/> {billinginfo.city }{billinginfo.state } {billinginfo.zipcode }</Address>} 
            { ! billinginfo &&<AddInformation onClick={() => {setModalShow(true);setInfo("billing")}}>add Billing address</AddInformation>}
            </div>
            <div>
            {cart.map((product)=>(
                  
                  <div key={product.id} >
                  <Productlist image={product.image} title={product.title} price={product.price} style={{width:"100px",fontSize:"15px",fontWeight:"300"}}/>
                  </div>
                  
                  ))
                  }
                  
                  </div>
                  <div style={{margin:"70px 0 0 40px"}}>
                  <Summary hide/>
                  <Link to="/products" style={{textDecoration:"none",color:"black"}}>
                  <Order onClick={Emptycart}>Place Order</Order></Link>
                  </div>
           <Modalcomponent show={modalShow}
        onHide={() => setModalShow(false)} >
 
      <form onSubmit={handleSubmit}>
                <Input onChange={handleInputChange}  name="firstname" value={formstate.firstname} placeholder="First Name"></Input>
                <Input onChange={handleInputChange} name="lastname" value={formstate.lastname} placeholder="Last Name"></Input>
                <Input onChange={handleInputChange}  name="address" value={formstate.address} placeholder="Address"></Input>
                <Input onChange={handleInputChange} name="city" value={formstate.city} placeholder="city"></Input>
                <Input onChange={handleInputChange}  name="state" value={formstate.state} placeholder="state"></Input>
                <Input onChange={handleInputChange} name="zipcode" value={formstate.zipcode} placeholder="Zip code"></Input>
                <SaveBttn type="submit">Save</SaveBttn>
            </form>
        
     </Modalcomponent>
           
</Infoholder>
    
        </CheckOutHolder>
        </>
    )
}

export default Checkoutpage

import React,{useState} from 'react'
import Modalcomponent from './Modalcomponent'
import { Modal ,Button} from 'react-bootstrap';
import styled from 'styled-components';
import Productlist from '../products/Productlist';
import { CartState } from '../../context/Cartprovider';
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
    console.log(formstate)
    console.log(info)
   
    return (
        <CheckOutHolder>
            <h1>Review your order</h1>
            <Infoholder>
           
                {/* <div><Productlist/></div> */}
                <div>
            <Information>Shiping information</Information>
          { shipinginfo && <Address>{shipinginfo.firstname }{shipinginfo.lastname } <br/> {shipinginfo.address } <br/> {shipinginfo.city }{shipinginfo.state } {shipinginfo.zipcode }</Address>}
            { ! shipinginfo &&<AddInformation onClick={() => {setModalShow(true);setInfo("shiping")}}>add shiping address</AddInformation>}
            <Information>Billing information</Information>
         { billinginfo && <Address>{billinginfo.firstname }{billinginfo.lastname } <br/> {billinginfo.address } <br/> {billinginfo.city }{billinginfo.state } {billinginfo.zipcode }</Address>} 
            { ! billinginfo &&<AddInformation onClick={() => {setModalShow(true);setInfo("billing")}}>add Billing address</AddInformation>}
            </div>
            {cart.map((product)=>(
                  
                  <div key={product.id} >
                  <Productlist image={product.image} title={product.title} price={product.price} style={{width:"80px",fontSize:"15px",fontWeight:"300"}}/>
                  </div>
                  
                  ))
                  }
                  
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
    )
}

export default Checkoutpage

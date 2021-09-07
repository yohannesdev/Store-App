import React,{useState} from 'react'
import Addressform from './Addressform'

function Checkoutpage() {
    const [modalShow, setModalShow] = useState(false);
    const[formstate,setFormstate]= useState ({
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    });
    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setFormstate((prev)=>{
            return{...prev,[name]:value}
        })
    }
    console.log(formstate)
    return (
        <div>
            <h2>Review your order</h2>
            <p>Shiping information</p>
            <p onClick={() => setModalShow(true)}>add shiping address</p>
            <p>Billing information</p>
            <p>add Billing address address</p>
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <Addressform
        show={modalShow}
        onHide={() => setModalShow(false)}
        onchange={handleInputChange}
        firstname={formstate.firstname}
        lastname={formstate.lastname}
        address={formstate.address}
        city={formstate.city}
        state={formstate.state}
        zipcode={formstate.zipcode}
      />
        </div>
    )
}

export default Checkoutpage

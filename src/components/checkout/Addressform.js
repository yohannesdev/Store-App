import React from 'react'
import { Modal ,Button} from 'react-bootstrap';
import styled from 'styled-components';
const Input=styled.input`
border: none;
width:300px;
padding:10px;
margin: 10px auto;
border-bottom:1px solid black;
font-size:20px;
display:block;
`
export const SaveBttn=styled.button`
background-color:gray;
width:150px;
margin: 20px auto;
padding:15px;
font-size:15px;
display: block;
`
function Addressform(props) {
    return (
        <div>
             <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
                <Input onChange={(event)=>props.onchange(event)} name="firstname" value={props.firstname} placeholder="First Name"></Input>
                <Input onChange={(event)=>props.onchange(event)} name="lastname" value={props.lastname} placeholder="Last Name"></Input>
                <Input onChange={(event)=>props.onchange(event)} name="address" value={props.address} placeholder="Address"></Input>
                <Input onChange={(event)=>props.onchange(event)} name="city" value={props.city} placeholder="city"></Input>
                <Input onChange={(event)=>props.onchange(event)} name="state" value={props.state} placeholder="state"></Input>
                <Input onChange={(event)=>props.onchange(event)} name="zipcode" value={props.zipcode} placeholder="Zip code"></Input>
                <SaveBttn>Save</SaveBttn>
            </form>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
           
        </div>
    )
}

export default Addressform

import 'bootstrap/dist/css/bootstrap.min.css';  
import {Modal, Button} from 'react-bootstrap'; 
import Form from 'react-bootstrap/Form';
import { useState } from 'react';  

function ModelPopUp() {  
    const [show, setShow] = useState(false);  
    
    const modalClose = () => setShow(false);  
    const modalShow = () => setShow(true);  
    return (  
      <div >  
         <Button className="btn primary" onClick={modalShow}>  
          Admission
        </Button>  
    <Modal show={show} onHide={modalClose}>  
    <Modal.Header closeButton>  
      <Modal.Title>Login</Modal.Title>  
    </Modal.Header>  
    
    <Modal.Body> 
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    
      <p>Body Content.</p>  
    </Modal.Body>  
    
    <Modal.Footer>  
      <Button variant="secondary" onClick={modalClose}>Close Modal</Button>  
      <Button variant="primary">Save changes</Button>  
    </Modal.Footer>  
  </Modal>  
      </div>  
    );  
  }  
  export default ModelPopUp;  
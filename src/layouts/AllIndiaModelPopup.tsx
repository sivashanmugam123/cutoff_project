import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import talk from "/img/talk.jpg";
import configData from "../config/config.json";
import axios from "axios";
import './ChoiceModelPopup.css'
function AllIndiaModelPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [queryTxt, setQueryTxt] = useState();

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);
  let url = configData.SERVER_URL + "query_form";
  const onchangeEmailHandle = (email: any) => {
    setEmail(email);
  };

  const onchangePhoneHandle = (phone: any) => {
    setPhone(phone);
  };

  const onchangequertTxtHandle = (txt: any) => {
    setQueryTxt(txt);
  };

  const saveRecord = () => {
    setShow(false);

    url =
      url +
      "?email=" +
      email +
      "&phone=" +
      phone +
      "&querytxt=" +
      queryTxt +
      "&type=callto";

    try {
      console.log(url);
      // @ts-ignore
      const data = {
        email: "email",
        phone: "phone",
        queryTxt: "queryTxt",
      };
      axios
        .post(url)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      //setSubcourses(res1.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <img className="iconsize1" src={talk} alt="Logo" />
      <a onClick={modalShow}>Call To Career Counselor</a>
      <Modal show={show} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your Query / Question</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form action={url} method="POST">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter email"
                onChange={(event) => onchangeEmailHandle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                id="phone"
                placeholder="Enter Phone Number"
                onChange={(event) => onchangePhoneHandle(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Query</Form.Label>
              <Form.Control
                as="textarea"
                // @ts-ignore
                rows="3"
                id="query"
                onChange={(event) => onchangequertTxtHandle(event.target.value)}
              />
            </Form.Group>
          </Form>
          <b className="bottomdiv" style={{color: 'green'}}>For Expert Career Advice</b>
          <div className="bottomdiv">
          
            <a href="#" className="experttalkblock5btn">Call Now<span  style={{color:'#000'}}><br/>+91 8681003465</span></a>
            </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close Modal
          </Button>
          <Button variant="primary" type="button" onClick={saveRecord}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AllIndiaModelPopup;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Autocomplete from "react-google-autocomplete";

export default function AddAddress(props) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    province: ""
  });
  const [error, setError] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = () => console.log("apple");
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Add Address
      </Button>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Address
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

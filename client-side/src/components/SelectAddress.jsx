import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"

export default function SelectAddress(props) {
  
  const [show, setShow] = useState (false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (<>
  <Button variant="secondary" onClick={handleShow}>
        Select Address
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}></Modal>
  </>)
}
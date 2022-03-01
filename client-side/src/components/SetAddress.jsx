import { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LoadScript } from "@react-google-maps/api";
import { Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

export default function SetAddress(props) {
  const [autoComplete, setAutoComplete] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoad = (obj) => {
    console.log("autocomplete: ", obj);
    setAutoComplete(obj);
  };

  const onPlaceChanged = () => {
    if (autoComplete !== null) {
      console.log(autoComplete.getPlace());
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        <FaMapMarkerAlt />
        <span className="spacer">Set Address</span>
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Delivery Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            libraries={libraries}
          >
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <InputGroup className="mb-3">
                <FormControl type="text" placeholder="Enter the address" />
              </InputGroup>
            </Autocomplete>
            <></>
          </LoadScript>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

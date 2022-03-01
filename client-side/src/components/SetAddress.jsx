import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaMapMarkerAlt } from "react-icons/fa";
import { usePlacesWidget } from "react-google-autocomplete";


export default function SetAddress(props) {
  const [address, setAddress] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { ref: bootstrapRef } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    onPlaceSelected: (place) => console.log(place),
    options: {
      types: ['geocode', 'establishment'],
      componentRestrictions: { country: "ca" },
    }
  });
  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        <FaMapMarkerAlt />
        <span className="spacer">Set Address</span>
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "black" }}>Bootstrap</Form.Label>
              <Form.Control type="text" ref={bootstrapRef} />
            </Form.Group>
          </Form>
          {/* <Autocomplete
          style={{zIndex: 10000000000000}}
            apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
          /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

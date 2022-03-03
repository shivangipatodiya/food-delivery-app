import { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LoadScript } from "@react-google-maps/api";
import { Autocomplete } from "@react-google-maps/api";
import apiHelpers from "../helpers/apiHelpers";

const libraries = ["places"];

export default function SetAddress(props) {
  const [autoComplete, setAutoComplete] = useState({});
  const [address, setAddress] = useState("");
  const [show, setShow] = useState(false);
  const fetchNearbyRestaurants = async (data) => {
    try {
      const restaurants = await apiHelpers.getNearbyRestaurants(data);
      props.setRestaurants([...restaurants]);
    } catch (err) {
      console.log("Error fetching nearby restaurants", err);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setAddress(autoComplete.getPlace().formatted_address.split(", ")[0]);
    setShow(false);
    const latitude = autoComplete.getPlace().geometry.location.lat();
    const longitude = autoComplete.getPlace().geometry.location.lng();
    const city = autoComplete.getPlace().address_components[3].long_name;
    const province = autoComplete.getPlace().address_components[4].long_name;
    const postalCode = autoComplete.getPlace().address_components[6].long_name;
    fetchNearbyRestaurants({
      address,
      city,
      province,
      postalCode,
      latitude,
      longitude
    });
    console.log(autoComplete.getPlace());
  };

  const onLoad = (obj) => {
    console.log("autocomplete: ", obj);
    setAutoComplete(obj);
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        <FaMapMarkerAlt />
        {address ? (
          <span className="spacer">{address}</span>
        ) : (
          <span className="spacer">Set Address</span>
        )}
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
            <Autocomplete onLoad={onLoad}>
              <InputGroup className="mb-3">
                <FormControl type="text" placeholder="Enter the address" />
              </InputGroup>
            </Autocomplete>
            <></>
          </LoadScript>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./menu.scss";

export default function MenuItem(props) {
  const [modalShow, setModalShow] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <>
      <Card className="card" border="light" onClick={() => setModalShow(true)}>
        <Card.Body>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <p>{props.price}$</p>
        </Card.Body>
      </Card>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <img
            className="align-center mb-3"
            height="200px"
            src={props.image}
            alt={props.name}
          ></img>
          <Form>
            <Form.Group>
              <Form.Label className="header">Spice Level</Form.Label>
              <Form.Check type="radio" name="group1" label="🌶️" />
              <Form.Check type="radio" name="group1" label="🌶🌶" />
              <Form.Check type="radio" name="group1" label="🌶🌶🌶" />
            </Form.Group>
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="header">Special Instructions:</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <div className="display-flex">
              <Button
                variant="outline-secondary"
                className="button"
                disabled={itemQuantity <= 1}
                onClick={() => setItemQuantity(itemQuantity - 1)}
              >
                -
              </Button>
              <div className="quantity">{itemQuantity}</div>
              <Button
                variant="outline-secondary"
                className="button"
                disabled={itemQuantity >= props.product_quantity}
                onClick={() => setItemQuantity(itemQuantity + 1)}
              >
                +
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Add to cart</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

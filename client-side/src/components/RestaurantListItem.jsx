import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function RestaurantListItem(props) {
  const columnsPerRow = 4;
  return (
    <Col>
      <Card>
        <Card.Body>
          <h2>{props.name}</h2>
          <img
            height="150px"
            src={props.image ? props.image : ""}
            alt={props.name}
          ></img>
          <p>
            {props.addressLine1}, {props.addressLine2}, {props.city}{" "}
            {props.postalCode.toUpperCase()}
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
}

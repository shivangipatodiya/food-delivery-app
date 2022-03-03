import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./restaurantListItem.scss";

export default function RestaurantListItem(props) {
  
  return (
    <Card className="card" border="light">
      <Link to={"/" + props.id} >
        <Card.Body>
          <h2>{props.name}</h2>
          <img
            className="image"
            height="150px"
            src={props.image ? props.image : ""}
            alt={props.name}
          ></img>
          <p>
            {props.addressLine1}, {props.addressLine2}, {props.city}{" "}
            {props.postalCode.toUpperCase()}
          </p>
        </Card.Body>
      </Link>
    </Card>
  );
}

import RestaurantListItem from "./RestaurantListItem";
import Row from 'react-bootstrap/Row';
import './restaurantListItem.scss';

export default function RestaurantList(props) {
  

  return (
    <Row md={4}>
      {props.restaurants.map((restaurant) => {
        return (
          <RestaurantListItem
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            image={restaurant.imageUrl}
            addressLine1={restaurant.address_line1}
            addressLine2={restaurant.address_line2}
            city={restaurant.city}
            postalCode={restaurant.postal_code}
          />
        );
      })}
    </Row>
    
  );
}

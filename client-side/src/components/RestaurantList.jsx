import { useEffect, useState } from "react";
import apiHelpers from "../helpers/apiHelpers";
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantList(props) {
  const [restaurants, setRestaurants] = useState([]);
  const fetchRestaurants = async () => {
    try {
      const restaurants = await apiHelpers.getRestaurants();
      setRestaurants(restaurants);
    } catch (err) {
      console.log("Error fetching restaurants", err);
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      {restaurants.map((restaurant) => {
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
    </>
  );
}

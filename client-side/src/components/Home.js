import { useEffect, useState } from "react";
import apiHelpers from "../helpers/apiHelpers";
import Navbar from "./Navbar";
import RestaurantList from "./RestaurantList";
export default function Home(props) {
  
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
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
  
  return (<>
  <Navbar user={user} setRestaurants={setRestaurants} />
  <RestaurantList restaurants={restaurants} />
  </>)
}
import Navbar from "./Navbar";
import RestaurantList from "./RestaurantList";
export default function Home(props) {
  
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  
  return (<>
  <Navbar user={user} />
  <RestaurantList />
  </>)
}
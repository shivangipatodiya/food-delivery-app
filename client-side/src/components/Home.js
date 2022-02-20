import Navbar from "./Navbar";

export default function Home(props) {
  
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  
  return (<>
  <Navbar user={user} />
  </>)
}
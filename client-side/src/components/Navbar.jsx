import Button from "react-bootstrap/Button";
import { BsFillPersonFill } from "react-icons/bs";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = async () => {
    localStorage.removeItem("session-token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="navbar">
      <h2>Lets Order</h2>
      <div className="user">
        <div>Hello {props.user.firstname}</div>
        <Button onClick={handleLogout}>
          <BsFillPersonFill />
        </Button>
      </div>
    </div>
  );
}

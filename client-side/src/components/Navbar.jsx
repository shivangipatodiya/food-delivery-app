import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaUserAlt,
  FaShoppingCart
} from "react-icons/fa";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import SelectAddress from "./SelectAddress";

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
        <div>
          <DropdownButton
            variant="outline-secondary"
            title={
              <>
                <FaMapMarkerAlt />
                <span className="spacer">Set Address</span>
              </>
            }
            id="button-addon1"
          >
            <Dropdown.Item ><SelectAddress /></Dropdown.Item>
            <Dropdown.Item >Add address</Dropdown.Item>
          </DropdownButton>
        </div>
        <InputGroup className="input spacer">
          <Button variant="outline-secondary" id="button-addon1">
            <FaSearch />
          </Button>
          <FormControl
            placeholder="Search cuisines, restaurants or dishes"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div className="user">
        <Button
          className="spacer"
          variant="outline-secondary"
          id="button-addon1"
        >
          {props.user.firstname}'s
          <FaShoppingCart className="spacer" size="22px" />
        </Button>
        <DropdownButton
          className="spacer"
          variant="outline-secondary"
          title={<FaUserAlt />}
        >
          <Dropdown.Item >Update profile</Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

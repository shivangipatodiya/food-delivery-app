import { useNavigate } from "react-router-dom";
import apiHelpers from "../helpers/apiHelpers";
import Button from "react-bootstrap/Button";

export default function Home(props) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("session-token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (<>
  <div>Hello </div>
  <Button onClick={handleLogout}>
        Logout
      </Button>
  </>)
}
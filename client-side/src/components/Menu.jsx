import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiHelpers from "../helpers/apiHelpers";

export default function Menu(props) {
  const [menu, setMenu] = useState([]);
  const { id } = useParams();
  const fetchMenu = async () => {
    try {
      const menu = await apiHelpers.getMenu(id);
      console.log("MENU*****", menu);
      setMenu(menu);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  return <>{menu}</>;
}

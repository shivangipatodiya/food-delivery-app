import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiHelpers from "../helpers/apiHelpers";
import helpers from "../helpers/helpers";
import "./menu.scss";

export default function Menu(props) {
  const [menu, setMenu] = useState({});
  const { id } = useParams();
  const fetchMenu = async () => {
    try {
      const menuList = await apiHelpers.getMenu(id);
      console.log("MENU*****", menuList);
      setMenu({...helpers.categorizeMenu(menuList)});
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    fetchMenu();
  }, []);

  
  return (
    <>
        {helpers.menuList(menu)}
    </>
  );
}

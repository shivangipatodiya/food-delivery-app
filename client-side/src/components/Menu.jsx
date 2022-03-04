import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Row from 'react-bootstrap/Row';
import apiHelpers from "../helpers/apiHelpers";
import MenuItem from "./MenuItem";

export default function Menu(props) {
  const [menu, setMenu] = useState([]);
  const { id } = useParams();
  const fetchMenu = async () => {
    try {
      const menu = await apiHelpers.getMenu(id);
      console.log("MENU*****", menu);
      setMenu([...menu]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return <><Row md={4}>
      {menu.map((item) => {
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.imageUrl}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </Row></>;
}

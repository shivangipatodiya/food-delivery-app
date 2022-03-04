import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Row from "react-bootstrap/Row";
import apiHelpers from "../helpers/apiHelpers";
import MenuItem from "./MenuItem";


const categorizeMenu = (arr) => {
  let object = {};
  for (let item of arr) {
    let category = item.type;
    if (!object.hasOwnProperty(category)) {
      object[category] = [item];
    } else {
      object[category].push(item);
    }
  }
  console.log("INSIDE OBJECT", object)
  return object;
};
export default function Menu(props) {
  const [menu, setMenu] = useState({});
  const { id } = useParams();
  const fetchMenu = async () => {
    try {
      const menuList = await apiHelpers.getMenu(id);
      console.log("MENU*****", menuList);
      setMenu({...categorizeMenu(menuList)});
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const menuItemList = (items) => {
    let array = [];
    for (const item of items) {
      array.push(<MenuItem
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.imageUrl}
        description={item.description}
        price={item.price}
        type={item.type}
      />)
    }
    return array;
  } 
  const menuList = () => {
    let arr = [];
    for (let category in menu) {
      arr.push(<h1 key={category}>{category}</h1>)
      arr.push(<div style={{display: "flex"}} key={category + "div"}>{menuItemList(menu[category])}</div>)
    }
    console.log("ARRR", arr)
    return arr;
  }
  return (
    <>
        {menuList()}
    </>
  );
}

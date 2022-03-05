import MenuItem from "../components/MenuItem";

const helpers = {
  categorizeMenu(arr) {
    let object = {};
    for (let item of arr) {
      let category = item.type;
      if (!object.hasOwnProperty(category)) {
        object[category] = [item];
      } else {
        object[category].push(item);
      }
    }
    return object;
  },
  menuItemList(items) {
    let array = [];
    for (const item of items) {
      array.push(
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.imageUrl}
          description={item.description}
          price={item.price}
          type={item.type}
        />
      );
    }
    return array;
  },
  menuList(menu) {
    let arr = [];
    for (let category in menu) {
      arr.push(<h1 key={category}>{category}</h1>);
      arr.push(
        <div key={category + "div"}>
          {this.menuItemList(menu[category])}
        </div>
      );
    }

    return arr;
  }
};
export default helpers;

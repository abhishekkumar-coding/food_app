import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div id="explore-menu" className="exploreMenu">
      <h1>Explore our menu</h1>
      <p className="exploremenu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary experties. Our mission
        is satisfy your craving and elevent your dining experience, one
        delicious meal at a time.
      </p>
      <div className="expolre-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index} // Add the unique key prop here
              onClick={() =>
                setCategory(prev =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="exploremenu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;

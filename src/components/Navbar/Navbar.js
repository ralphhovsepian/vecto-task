import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../../constants/routes.ts";
import { NavbarItem } from "./NavbarItem/NavbarItem";
import userImage from "../../assets/user.png";

import "./navbar.css";

export const Navbar = () => {
  const [menuIsHovered, setMenuIsHovered] = useState(false);
  const location = useLocation();

  return (
    <div className={menuIsHovered ? "navContainer" : ""}>
      <nav
        onMouseEnter={() => setMenuIsHovered(!menuIsHovered)}
        onMouseLeave={() => setMenuIsHovered(!menuIsHovered)}
      >
        <div
          className="loggedUserInfoContainer"
          style={
            menuIsHovered ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <div className="imageContainer">
            <img src={userImage} alt="User Image" />
          </div>
          <p>Ralph</p>
        </div>
        <ul>
          {routes.map((route) => (
            <NavbarItem
              key={`${route.Id}`}
              menuIsHovered={menuIsHovered}
              activeTab={location.pathname.split("/")[1]}
              route={route}
            />
          ))}
        </ul>
        <ul>
          <li
            className={
              menuIsHovered ? `navbarSubItem visible` : `navbarSubItem`
            }
          >
            Languages
          </li>
          <li
            className={
              menuIsHovered ? `navbarSubItem visible` : `navbarSubItem`
            }
          >
            Get Help
          </li>
          <li
            className={
              menuIsHovered ? `navbarSubItem visible` : `navbarSubItem`
            }
          >
            Exit
          </li>
        </ul>
      </nav>
    </div>
  );
};

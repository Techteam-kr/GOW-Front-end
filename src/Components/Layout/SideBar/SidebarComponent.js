import react, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "./SidebarComponent.scss";
const SideBarComponent = () => {
  const [sideBarOpen, setsideBarOpen] = useState(false);
  const openMenuHandler = () => {
    setsideBarOpen((sideBarOpen) => !sideBarOpen);
  };
  return (
    <>
      <div
        id="mySidenav"
        className={!sideBarOpen ? "sidenav" : "sidenav open-side-nav"}
      >
        <span className="closebtn" onClick={openMenuHandler}>
          &times;{" "}
        </span>
        <NavLink onClick={openMenuHandler} to="/">
          Home
        </NavLink>
        <NavLink onClick={openMenuHandler} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink onClick={openMenuHandler} to="/reports">
          Reports
        </NavLink>
        <NavLink to="/register">
          <Button className="primary-orange">User Enrollment</Button>
        </NavLink>
      </div>
      <span className="hambergur-menu" onClick={openMenuHandler}>
        &#9776;{" "}
      </span>
    </>
  );
};
export default SideBarComponent;
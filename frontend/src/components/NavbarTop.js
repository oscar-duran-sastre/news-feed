import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./NavbarTop.css";

const NavbarTop = () => {
  return (
    <div className="NavbarTop fixed-top">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/news">
          <span className="NavbarBrand">News Feed</span>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavbarTop;

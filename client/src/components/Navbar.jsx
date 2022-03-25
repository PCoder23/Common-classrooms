import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "../Pages/Login";
import Button from "./Button";

const NavComponent = styled.div`
  background-color: #d9c46a;
  opacity: 1;
  height: 4rem;
`;
const NavBrand = styled.span`
  margin-left: 20px;
  font-size: 1.8rem;
`;

const Navbar = () => {
  return (
    <NavComponent>
      <NavBrand>CC</NavBrand>
      <Link to="/login">{<Button name="Login" />}</Link>
      <Link to="/signup">{<Button name="SignUp" />}</Link>
    </NavComponent>
  );
};

export default Navbar;

import React from "react";
import styled from "styled-components";
import Button from "./Button";



const NavColor= styled.div`
background-color: #d9c46a;
opacity: 1;
height: 3.9rem;
`

const Navbar = () => {
  return (
    <NavColor>
    <Button name="Login"/>
    <Button name="SignUp"/>
    </NavColor>
  );
};

export default Navbar;
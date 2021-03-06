import React from "react";
import styled from "styled-components";

import Image from "../assets/Image.png";
import Vector1 from "../assets/Vector 1.png";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4fcd9;

  .kawai-girl {
    position: relative;
    left: 5%;
    bottom: -10%;
    height: 80%;
  }
`;
const Banner = styled.span`
  position: relative;
  display: flex;
  height: 150px;
  width: 300px;
  background-color: #ffe0bb;
  left: 72%;
  top: -73%;
  font-family: "Comic Neue", cursive;
  border-radius: 10px;
  border: 2px solid #403930;
  box-shadow: inset 3px -3px 7px #000;
  font-size: 1.2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ClassRoomButton = styled(Link)`
  height: 10rem;
  width: 16rem;
  position: relative;
  top: -85%;
  left: 3%;
  display: block;
  background-color: #e8e19e;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: #594f43;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid #6b381b;
  box-shadow: inset 3px -2px 15px #2e190b;
  text-decoration: none;
  & img {
    width: 10rem;
    margin-top: 30px;
  }
`;
const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      <img className="kawai-girl" src={Image}></img>
      <Banner>
        <span>
          👋 Hello, welcome to <br /> common classroom. <br /> A one stop
          solution for <br /> all your study mates.
        </span>
      </Banner>

          <ClassRoomButton to="/classroom">
            <img src={Vector1}></img>
            <br />
            Enter Classroom
          </ClassRoomButton>
        
    </MainContainer>
  );
};

export default Main;

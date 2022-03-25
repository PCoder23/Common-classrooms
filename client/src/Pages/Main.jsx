import React from "react";
import styled from "styled-components";

import Image from "../assets/Image.png";
import Vector1 from "../assets/Vector 1.png";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

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

  .meeting {
    position: relative;
    top: -68%;
    right: 11%;
    height: 35px;
    width: 194px;
    font-family: "Comic Neue", cursive;
    background-color: #d9c46a;
    border-radius: 5px;
    border: 3px solid #6b381b;
    color: #594f43;
    box-shadow: 3px -2px 15px #2e190b;
    padding: 5px 10px;
    font-size: 1.2rem;
  }

  .meeting::placeholder {
    color: #594f43;
    font-size: 1.2rem;
  }
`;
const Banner = styled.span`
  position: relative;
  display: flex;
  height: 150px;
  width: 300px;
  background-color: #e8e19e;
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
  position: relative;
  top: -80%;
  left: 5%;
  background-color: #e8e19e;
  display: inline-block;
  font-family: "Comic Neue", cursive;
  font-size: 1.3rem;
  font-weight: 800;
  color: #594f43;
  cursor: pointer;
  border-radius: 5px;
  border: 3px solid #6b381b;
  padding: 10px 25px;
  box-shadow: 3px -2px 15px #2e190b;
  text-decoration: none;
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

      <ClassRoomButton to="/:id">
        <FontAwesomeIcon icon={faVideo} />
        <span> New Meeting</span>
      </ClassRoomButton>

      <input
        className="meeting"
        placeholder="Enter a code or link"
        type="text"
      ></input>
    </MainContainer>
  );
};

export default Main;

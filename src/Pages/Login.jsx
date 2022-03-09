import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";
import WelcomeGirl from "../assets/WelcomeGirl.png";

const LoginPage = styled.div`
  background-color: #e8eaa5;
  height: 100vh;
  width: 100%;
  font-family: "Comic Neue", cursive;
  &> .books5{
      position: absolute;
      left: 25%;
      top: 48%;
  }
  &> .groupstudy{
      position: absolute;
      left: 37%;
      top: 20%;
  }
  &> .WelcomeBack{
      position: absolute;
      left: 64.5%;
      top: 15%;
  }
`;
const Go = styled(Link)`
  color: #000;
  height: 3.5rem;
  width: 8rem;
  position: relative;
  left: 32%;
  top: 14%;
  text-align: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
  & > .AccLogin {
    font-size: 1.6rem;
    background: -webkit-linear-gradient(
      45deg,
      #de2e10,
      #de9d10,
      #de2e10,
      #de9d10,
      #de2e10
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    left: -1.6%;
    top: -25%;
  }
`;
const Form = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
  height: 80vh;
  top: 9%;
  width: 30vw;
  left: 35%;
  color: #000;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  border-radius: 10px;

  & > input {
    position: relative;
    left: 15%;
    top: 10%;
    width: 20vw;
    height: 4vh;
  }
  & > label {
    position: relative;
    left: 15%;
    top: 10%;
  }
  & h2 {
    position: relative;
    top: 1%;
    left: 32%;
    font-size: 2.5rem;
    color: #302e29;
  }
  & h1 {
    position: relative;
    left: 6%;
    background: -webkit-linear-gradient(
      45deg,
      #de2e10,
      #de9d10,
      #de2e10,
      #de9d10,
      #de2e10
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Login = () => {
  return (
    <LoginPage>
    <img className="books5" src={Image5}></img>
    <img className="groupstudy" src={Image6}></img>
    <img className="WelcomeBack" src={WelcomeGirl}></img>
      <Form>
        <h1>Common Classroom</h1>
        <h2>Log In</h2>
        <label>Username/Email Id:</label> <input></input>
        <label>Password:</label> <input type={"Password"}></input>
        <Go to="/home">
          <h2 className="AccLogin">Let's Go!</h2>
        </Go>
      </Form>
    </LoginPage>
  );
};

export default Login;

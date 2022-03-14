import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import school from "../assets/icegif-501.gif";


const SignupPage = styled.div`
  background-color: #e8eaa5;
  height: 100vh;
  width: 100%;
  font-family: "Comic Neue", cursive;

  & > .school {
    position: absolute;
    top: 5%;
    left: 35%;
    height: 90vh;
    width: 30vw;
    border-radius: 10px;
  }
  & > .group1 {
    position: absolute;
    left: -3%;
    bottom: 1vh;
    height: 60%;
    width: 40%;
  }
  & > .group2 {
    position: absolute;
    right: 0;
    top: 1vh;
    height: 30vw;
    width: 30vw;
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
  height: 90vh;
  top: 5%;
  width: 30vw;
  left: 35%;
  color: #000;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  border-radius: 10px;
  text-align: center;

  & > input {
    width: 20vw;
    position: relative;
    left: 15%;
    height: 1.5rem;
  }
  & > h1 {
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
  & h2 {
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
const SignUpBtn1 = styled(Link)`
  height: 7%;
  width: 25%;
  position: relative;
  left: 35%;
  font-size: 1.2rem;
  top: 2%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-weight: 600;
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
`;
const SignUp = () => {
  return (
    <SignupPage>
      <img className="school" src={school}></img>
      <Form>
        <h1>Common Classroom</h1>
        <h2>Sign Up</h2>
        <label>Email Id:</label> <input></input>
        <label>Password:</label> <input type={"Password"}></input>
        <label>Stream:</label> <input></input>
        <label>Grade/Class:</label> <input></input>
        <label>School/University Name:</label> <input></input>
        <SignUpBtn1 to="/classroom">Sign up!</SignUpBtn1>
      </Form>
    </SignupPage>
  );
};

export default SignUp;

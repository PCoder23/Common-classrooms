import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const SignupPage = styled.div`
background-color: #e8eaa5;
  height: 100vh;
  width: 100%;
  font-family: "Comic Neue", cursive;
`
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

  &> input{
      width: 20vw;
      position: relative;
      left: 15%;
      height: 1.5rem;
  }
`
const SignUpBtn1 = styled.button`
height: 8%; width: 25%; position: relative; left: 35%; font-size: 1rem; top: 2%; background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18); font-weight: 600;

`
const SignUp = () => {
    return(
        <SignupPage>
        <Form>
        <h1>Common Classroom</h1>
        <h2>Sign Up</h2>
        <label>Email Id:</label> <input></input>
        <label>Stream:</label> <input></input>
        <label>Grade/Class:</label> <input></input>
        <label>School/University Name:</label> <input></input>
        <label>Password:</label> <input type={"Password"}></input>
        <SignUpBtn1>SignUp now!</SignUpBtn1>
        </Form>
        </SignupPage>
    );
}

export default SignUp;
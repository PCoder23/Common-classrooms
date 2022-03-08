import React from "react";
import styled from "styled-components";


const Btn = styled.button`
position: relative;
border-radius: 10px;
border-color: #d9c46a;
left: 83vw;
height: 3vw;
width: 6vw;
margin: 10px 10px;
box-shadow: -2px 1px #5b5d61;
background-color: ${(props) => (props.name === "Login" ? "#e3c968" : "#d9c46a")};
`

function Button(props){
    return <Btn>{props.name}</Btn>
}

export default Button;
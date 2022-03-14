import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WhiteBoard = styled.div`
position: relative;  width: 100%;  height: 100vh;  background-color: #f4fcd9;;
`
const Class = styled.div`
height: 10vh; width: 100%; position: relative;
`
const ClassRoom = () => {
    return(
        <WhiteBoard>
        <h1>Welcome to your ClassRoom</h1>
        <Class></Class>
        </WhiteBoard>
    );
}

export default ClassRoom;
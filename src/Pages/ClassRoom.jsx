import React from "react";
import styled from "styled-components";
import Container from "../components/Container";


const MainContainer = styled.div`
  background-color: #e8f7b4;
  height: 100vh;
`;

const ClassRoom = () => {
  return (
    <MainContainer>
      <Container/>
    </MainContainer>
  );
};

export default ClassRoom;

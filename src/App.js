import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import styled from "styled-components"


const MainContainer = styled.div`
    background-color: #F4E877;
    width: 100%;
    height:100vh;
    opacity: 0.35 ;
    
`

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Main />
    </MainContainer>
  );
}

export default App;

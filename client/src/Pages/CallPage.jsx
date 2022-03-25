import React from "react";
import styled from "styled-components";
import CallPageFooter from "../components/CallPageFooter";
import CallPageHeader from "../components/CallPageHeader";
import MeetingInfo from "../components/MeetingInfo";
import Messanger from "../components/Messanger";

const MainContainer = styled.div`
  font-family: "Comic Neue", cursive;
  .video-container {
    z-index: -1;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    top: 0;
  }
`;

const CallPage = () => {
  return (
    <>
      <MainContainer>
        <video className="video-container" src="" controls></video>
        <CallPageHeader />
        <CallPageFooter />
        <MeetingInfo />
        <Messanger />
      </MainContainer>
    </>
  );
};

export default CallPage;

import {
  faAngleUp,
  faDesktop,
  faMicrophone,
  faMicrophoneAltSlash,
  faPencil,
  faPhone,
  faVideo,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const FooterItem = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: #e8e19e;
  z-index: 1;
  color: #6b381b;

  .left-item {
    display: flex;
    align-items: center;
    height: 100%;

    .icon-block {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 20px;
    }
    .icon {
      font-size: 20px;
      margin-left: 5px;
    }
    &:hover {
      background-color: #fff6cd;
    }
  }

  .center-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    .icon-block {
      background-color: #e8e18f;
      border: 1px solid #6b381b;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;

      .icon {
        font-size: 20px;
        color: #6b381b;
      }
      &:hover {
        cursor: pointer;
        box-shadow: 0 0 15px #555;
      }
    }

    .red {
      color: #890f0d;
    }
    .red-bg {
      background-color: #c74b50;
      color: #e8e19e;
    }
  }

  .right-item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;

    .icon-block {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      width: 126px;
      .icon {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .title {
        margin: 0;
        font-size: 15px;
      }
      &:hover {
        cursor: pointer;
        background-color: #fff6cd;
      }
    }
  }
`;

const CallPageFooter = () => {
  return (
    <FooterItem>
      <div className="left-item">
        <div className="icon-block">
          Meeting Details
          <FontAwesomeIcon className="icon" icon={faAngleUp} />
        </div>
      </div>

      <div className="center-item">
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faMicrophone} />
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon red" icon={faPhone} />
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faVideo} />
        </div>
      </div>

      <div className="right-item">
        <div className="icon-block">
          <FontAwesomeIcon className="icon red" icon={faPencil} />
          <p className="title">White Board</p>
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon red" icon={faDesktop} />
          <p className="title">Present Screen</p>
        </div>
      </div>
    </FooterItem>
  );
};

export default CallPageFooter;

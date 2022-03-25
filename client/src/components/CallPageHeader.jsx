import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faUserCircle,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const FrameHeader = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
  width: 350px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e8e19e;
  border-radius: 0 0 0 10px;
  overflow: hidden;
  color: #594f43;

  .header-items {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    flex: 1;
    border-right: 1px solid #6b381b;
    position: relative;

    &:hover {
      cursor: pointer;
      background-color: #fff6cd;
    }
  }

  .icon-block:hover {
    cursor: text;
    background-color: #e8e19e;
  }

  .alert-circle-icon {
    position: absolute;
    background-color: #b3541e;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 10px;
    right: 25px;
    border: 2px solid #fdf6ec;
  }

  .icon {
    font-size: 1.3rem;
  }

  .date-icon {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .profile {
    font-size: 1.8rem;
    color: #b3541e;
  }
`;

const CallPageHeader = () => {
  return (
    <FrameHeader>
      <div className="header-items">
        <FontAwesomeIcon className="icon" icon={faUserFriends} />
      </div>
      <div className="header-items">
        <FontAwesomeIcon className="icon" icon={faCommentAlt} />
        <span className="alert-circle-icon"></span>
      </div>
      <div className="header-items icon-block">
        <span className="date-icon">7:00</span>
      </div>
      <div className="header-items">
        <FontAwesomeIcon className="icon profile" icon={faUserCircle} />
      </div>
    </FrameHeader>
  );
};

export default CallPageHeader;

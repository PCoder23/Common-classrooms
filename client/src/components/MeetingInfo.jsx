import React from "react";
import {
  faTimes,
  faUser,
  faCopy,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const MeetingInfoBlock = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: #e8e19e;
  border-radius: 10px;
  padding: 25px;
  width: 310px;

  .meeting-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #594f43;
  }
  h3 {
    margin: 0;
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .icon {
    cursor: pointer;
    font-size: 1.3rem;
  }
  .add-people-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b3541e;
    color: #e8e19e;
    font-size: 16px;
    font-family: "Comic Neue", cursive;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    margin: 8px 0;
    cursor: pointer;

    .user-icon {
      margin-right: 8px;
    }
  }

  .info-text {
    color: #594f43;
  }
  .meet-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff6cd;
    padding: 15px;
    border-radius: 10px;

    span {
      color: #594f43;
    }

    .icon {
      color: #b3541e;
    }
  }

  .permission-text {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      color: #361500;
      font-size: 1.3rem;
      margin-right: 8px;
    }

    .small-text {
      font-size: 0.8rem;
      font-weight: 400;
      margin: 1em 0;
    }
  }

  .small-text {
    font-size: 15px;
    margin: 0;
  }
`;

const MeetingInfo = () => {
  return (
    <MeetingInfoBlock>
      <div className="meeting-header">
        <h3>Your meeting is ready</h3>
        <FontAwesomeIcon className="icon" icon={faTimes} />
      </div>
      <button className="add-people-btn">
        <FontAwesomeIcon className="user-icon" icon={faUser} />
        Add Others
      </button>
      <p className="info-text">
        Or share the meeting link with others you want in the meeting
      </p>
      <div className="meet-link">
        <span>Meeting URL</span>
        <FontAwesomeIcon className="icon" icon={faCopy} />
      </div>
      <div className="permission-text">
        <FontAwesomeIcon className="icon" icon={faShieldAlt} />
        <p className="small-text">
          People who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className="small-text">Joined as abc@gmail.com</p>
    </MeetingInfoBlock>
  );
};

export default MeetingInfo;

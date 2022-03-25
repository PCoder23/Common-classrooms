import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const MessengerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #fff6cd;
  height: calc(100vh - 90px);
  width: 350px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const MessengerHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  h3 {
    margin: 0;
    font-weight: 400;
  }
  .icon {
    cursor: pointer;
    font-size: 20px;
  }
`;
const MessengerHeaderTabs = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e19e;
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #555;
    p {
      margin-left: 10px;
    }
    &.active {
      border-bottom: 2px solid #b3541e;
      color: #b3541e;
    }
    &:hover {
      cursor: pointer;
      background: #b3541e;
      color: #e8e19e;
    }
  }
`;
const ChatSection = styled.div`
  padding: 20px;
  flex: 1;
  overflow-y: scroll;
  .chat-block {
    margin-bottom: 30px;
    .sender {
      font-weight: 500;
      font-size: 14px;
      small {
        margin-left: 5px;
        font-weight: 300;
      }
    }
    .msg {
      margin: 0;
      padding-top: 5px;
      color: #555;
      font-size: 14px;
    }
  }
`;
const SendMessageSection = styled.div`
  padding: 20px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555;
  input {
    padding: 5px;
    border: none;
    outline: none;
    border-bottom: 1px solid #eee;
    width: 80%;
    .icon {
      cursor: pointer;
      &:hover {
        color: #eee;
      }
    }
  }
`;
const Messanger = () => {
  return (
    <MessengerContainer className="messenger-container">
      <MessengerHeader className="messenger-header">
        <h3>Meeting details</h3>
        <FontAwesomeIcon className="icon" icon={faTimes} />
      </MessengerHeader>

      <MessengerHeaderTabs className="messenger-header-tabs">
        <div className="tab">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          <p>People (1)</p>
        </div>
        <div className="tab active">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </MessengerHeaderTabs>

      <ChatSection className="chat-section">
        <div className="chat-block">
          <div className="sender">
            you <small>10pm</small>
          </div>
          <p className="msg">Here comes a actual message</p>
        </div>
      </ChatSection>

      <SendMessageSection className="send-msg-action">
        <input placeholder="Send a message to everyone" />
        <FontAwesomeIcon className="icon" icon={faPaperPlane} />
      </SendMessageSection>
    </MessengerContainer>
  );
};

export default Messanger;

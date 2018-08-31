import React from "react";
import store from '../store';
import Header from '../components/Header';
import Chat from './Chat';
import MessageInput from './MessageInput';

import _ from 'lodash';
import "./ChatWindow.css";

const ChatWindow = ({
  activeUserId
}) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeUserMessages = state.messages[activeUserId];
  const currentMessageValue = state.typing;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chat messages={_.values(activeUserMessages)} />
      <MessageInput value={currentMessageValue} />
    </div>
  );
};

export default ChatWindow;

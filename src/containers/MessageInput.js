import React from "react";
import store from '../store';

import {
  setTypingValue,
  sendMessage,
  editMessage,
  setEditMessage
} from '../actions';

import "./MessageInput.css";

const MessageInput = ({
  value
}) => {
  const handleChange = e => store.dispatch(setTypingValue(e.target.value));
  const handleSubmit = e => {
    e.preventDefault();

    const {
      typing,
      activeUserId,
      editingMessage: {
        flag,
        msgId
      }
    } = store.getState();

    if (flag) {
      store.dispatch(editMessage(typing, activeUserId, msgId));
      store.dispatch(setEditMessage(false, null));
    } else {
      store.dispatch(sendMessage(typing, activeUserId));
    }
  }

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="Write a message"
      />
    </form>
  );
};

export default MessageInput;

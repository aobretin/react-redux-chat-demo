import React, {Component} from "react";
import store from '../store';

import {
  setEditMessage,
  setTypingValue,
  deleteMessage
} from '../actions';

import "./Chat.css";

class Chat extends Component {
  constructor() {
    super();
    this.chatRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
  }

  setEditMessage = ({
    text,
    number,
    is_user_msg
  }) => {
    if (!is_user_msg) return;

    store.dispatch(setEditMessage(true, number));
    store.dispatch(setTypingValue(text));
  }

  deleteChatMessage = (e, {number}) => {
    e.stopPropagation();
    const activeUserId = store.getState().activeUserId;

    store.dispatch(deleteMessage(number, activeUserId));
  }

  render() {
    const {
      messages
    } = this.props;

    return (
      <div className="Chats" ref={this.chatRef}>
        {
          messages.map(message => {
            const {
              text,
              is_user_msg,
              number,
              edited
            } = message;

            return (
              <span
                onClick={() => this.setEditMessage(message)}
                key={number}
                className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
              >
                {is_user_msg && <span onClick={(e) => this.deleteChatMessage(e, message)} className="delete-msg">X</span>}
                {text} {edited ? ' (edited)' : ''}
              </span>
            )
          })
        }
      </div>
    )
  }
}

export default Chat;

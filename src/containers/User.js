import React from 'react';
import store from '../store';

import {
    setActiveUserId,
    setEditMessage,
    setTypingValue
} from '../actions';

import './User.css';

const User = ({
  user
}) => {
  const {
    name,
    profile_pic,
    status,
    user_id
  } = user;

  const activeUserId = store.getState().activeUserId;

  const handleUserChange = () => {
    if (activeUserId === user_id) return;

    store.dispatch(setActiveUserId(user_id));

    if (store.getState().editingMessage.flag) {
      store.dispatch(setTypingValue(''));
    }

    store.dispatch(setEditMessage(false, null));
  }

  return (
    <div className="User" onClick={handleUserChange}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  )
}

export default User;

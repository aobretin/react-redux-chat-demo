import React from "react";
import store from '../store';
import _ from 'lodash';

import {
    setActiveUserId
} from '../actions';

import "./Empty.css";

const Empty = ({
  user,
  activeUserId
}) => {
  const {
    name,
    profile_pic,
    status
  } = user;
  const firstName = name.split(' ')[0];

  const chooseRandomUser = () => {
    const contacts = _.values(store.getState().contacts);
    const contactsNo = contacts.length;
    const randomUserNo = Math.floor(Math.random() * contactsNo) + 1;
    const {user_id} = contacts[randomUserNo];

    store.dispatch(setActiveUserId(user_id))
  }

  return (
    <div className="Empty">
      <h1 className="Empty__name">Welcome, {firstName} </h1>
      <img src={profile_pic} alt={name} className="Empty__img" />
      <p className="Empty__status">
        <b>Status:</b> {status}
      </p>
      <button onClick={chooseRandomUser} className="Empty__btn">Start a random conversation</button>
      <p className="Empty__info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  );
};

export default Empty;

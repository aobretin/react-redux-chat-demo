import {
  getMessages
} from '../static-data';

import _ from "lodash";

import {
  SEND_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
} from "../constants/action-types";

export default (state = getMessages(10), action) => {
  const {
    payload: {
      message,
      userId,
      msgId,
      number
    } = {}
  } = action;

  switch (action.type) {
    case SEND_MESSAGE:
      const newMsgIdx = Object.keys(state[userId]).length + 1;

      return {
        ...state,
        [userId]: {
          ...state[userId],
          [newMsgIdx]: {
            is_user_msg: true,
            number: newMsgIdx,
            text: message
          }
        }
      };
    case EDIT_MESSAGE:
      return {
        ...state,
        [userId]: {
          ...state[userId],
          [msgId]: {
            ...state[userId][msgId],
            edited: true,
            text: message
          }
        }
      };
    case DELETE_MESSAGE:
      const currentUserMsgCopy = {...state[userId]};
      delete currentUserMsgCopy[number];

      let rearengedMsgs = Object.keys(currentUserMsgCopy).reduce((coll, msg, i) => {
        return {
          ...coll,
          [i]: {
            ...currentUserMsgCopy[msg],
            number: i
          }
        }
      }, {});

      return {
        ...state,
        [userId]: {
          ...rearengedMsgs
        }
      }
    default:
      return state;
  }
}

import {
  SET_EDIT_MESSAGE
} from "../constants/action-types";

export default function typing(state = {flag: false, msgId: null}, action) {
  switch (action.type) {
    case SET_EDIT_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

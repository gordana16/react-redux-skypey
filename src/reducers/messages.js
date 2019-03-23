import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";
import _ from "lodash";

export default (state = getMessages(10), action) => {
  console.log("dispatch messages");
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, user_id } = action.payload;
      const allUsrMsgs = state[user_id];
      const number = +_.keys(allUsrMsgs).pop() + 1;
      return {
        ...state,
        [user_id]: {
          ...allUsrMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    default:
      return state;
  }
};

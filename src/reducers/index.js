import { combineReducers } from "redux";
import user from "./user";
import messages from "./messages";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import typing from "./typing";

export default combineReducers({
  user,
  messages,
  contacts,
  activeUserId,
  typing
});

import React from "react";
import "./Main.css";
import Empty from "./Empty";
import ChatWindow from "../containers/ChatWindow";

const Main = ({ user, activeUserId }) => {
  const renderMainComponent = () => {
    if (!activeUserId) {
      return <Empty user={user} />;
    }
    return <ChatWindow activeUserId={activeUserId} />;
  };

  return <main className="Main">{renderMainComponent()}</main>;
};

export default Main;

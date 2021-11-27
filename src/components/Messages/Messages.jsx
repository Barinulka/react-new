import { useCallback, useEffect, useState } from "react";
import fakerStatic from "faker/locale/ru";

import "./style.scss";

import { MessagesForm } from "../MessagesForm";
import { MessagesList } from "../MessagesList";
import { AUTHOR } from "../../constants";

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages([...messages, newMessage]);
    },
    [messages]
  );

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].author !== AUTHOR.robot
    ) {
      const robotMessage = {
        author: AUTHOR.robot,
        message: fakerStatic.lorem.sentence(),
        id: fakerStatic.datatype.uuid(),
      };
      setTimeout(() => setMessages([...messages, robotMessage]), 1000);
    }
  }, [messages, messages.length]);

  return (
    <div className="messages">
      <MessagesList messages={messages} />

      <MessagesForm onSend={handleSendMessage} />
    </div>
  );
};

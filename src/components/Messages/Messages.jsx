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
      const robotMessages = {
        author: AUTHOR.robot,
        message: fakerStatic.lorem.sentence(),
        id: fakerStatic.datatype.uuid(),
      };
      setTimeout(() => setMessages([...messages, robotMessages]), 1000);
    }
  }, [messages]);

  return (
    <div className="messages padding-site centered">
      <MessagesList messages={messages} />

      <MessagesForm onSend={handleSendMessage} />
    </div>
  );
};

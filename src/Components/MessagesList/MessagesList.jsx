import { MessagesItem } from "../MessagesItem";
import "./style.scss";

export const MessagesList = ({ messages }) => {
  return (
    <div className="messages-list">
      {messages.map((mes) => (
        <MessagesItem author={mes.author} message={mes.message} key={mes.id} />
      ))}
    </div>
  );
};

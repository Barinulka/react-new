import "./style.scss";

export const MessagesItem = ({ author, message }) => {
  return (
    <div className="message-item">
      <h2 className="message-title">{author}</h2>
      <p className="message-content">{message}</p>
    </div>
  );
};

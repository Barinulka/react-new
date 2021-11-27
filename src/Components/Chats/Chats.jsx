import { List, ListItem } from "@material-ui/core";
import "./style.scss";

export const Chats = () => {
  const chatList = [
    {
      name: "Чат 1",
      id: "chat1",
    },
    {
      name: "Чат 2",
      id: "chat2",
    },
  ];

  return (
    <div className="chats">
      <List>
        {chatList.map((chat) => (
          <ListItem key={chat.id}>{chat.name}</ListItem>
        ))}
      </List>
    </div>
  );
};

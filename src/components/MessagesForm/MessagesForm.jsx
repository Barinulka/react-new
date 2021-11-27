import { Button, TextField } from "@material-ui/core";
import { Send } from "@mui/icons-material";
import fakerStatic from "faker/locale/ru";
import { useEffect, useRef, useState } from "react";
import { AUTHOR } from "../../constants";
import "./style.scss";

export const MessagesForm = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const inputField = useRef(null);

  useEffect(() => {
    inputField.current.focus();
  });

  const handleChangeInput = (e) => {
    setMessage(e.target.value);
  };

  // По отправке формы создаем сообщение
  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSend({
      author: AUTHOR.me,
      message: message,
      id: fakerStatic.datatype.uuid(),
    });
    setMessage("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmitForm}>
        <TextField
          fullWidth
          label="Сообщение"
          variant="outlined"
          value={message}
          onChange={handleChangeInput}
          inputRef={inputField}
        />
        <Button type="submit" variant="contained" endIcon={<Send />}>
          Send
        </Button>
      </form>
    </div>
  );
};

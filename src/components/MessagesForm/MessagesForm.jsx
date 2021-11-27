import fakerStatic from "faker/locale/ru";
import { useState } from "react";
import { AUTHOR } from "../../constants";
import "./style.scss";

export const MessagesForm = ({ onSend }) => {

    const [text, setText] = useState('');

    const handleChangeInput = (e) => {
        setText(e.target.value);
    }

    // По отправке формы создаем сообщение
    const handleSubmitForm = (e) => {
        e.preventDefault()
        onSend({
          author: AUTHOR.me,
          message: text,
          id: fakerStatic.datatype.uuid(),
        });
        setText('');
    }

  return (
    <div className="form">
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={text} onChange={handleChangeInput} />
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

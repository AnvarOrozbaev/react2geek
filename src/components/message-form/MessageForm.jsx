import { useState, useRef } from 'react';
import './MessageForm.scss';

export const MessageForm = ({ onSendMessage }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      onSendMessage({
        author: 'me',
        text: value,
      });

      setValue('');
    }
  };

  return (
    <form className="  message-form" onSubmit={handleSubmit}>
      <input
        className="message-form__input"
        ref={inputRef}
        type="text"
        value={value}
        placeholder="сообщение"
        onChange={handleChange}
      />
      <input className="message-form__btn" type="submit" />
    </form>
  );
};

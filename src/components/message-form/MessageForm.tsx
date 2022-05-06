import React, { useEffect } from 'react';
import { useState, useRef, memo } from 'react';
import InputBase from '@mui/material/InputBase';
import './MessageForm.scss';
import { useSelector } from 'react-redux';
import { selectSelectedId } from '../../pages/chats/chatsSlice'
interface MessageFormProps {
  primary?: boolean;
  onSendMessage: (text: string) => void;
}
export const MessageForm = memo<MessageFormProps>(
  ({ primary, onSendMessage }) => {
    const mode = primary ? '--secondary' : '--primary';
    const [value, setValue] = useState<string>('');
    const selectedId = useSelector(selectSelectedId)
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (value.length === 0) {
        return;
      }
      onSendMessage(value);
      setValue('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    useEffect(()=>{
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },[selectedId])

    return (
      <form
        className="message-form"
        onSubmit={handleSubmit}
      >
        <InputBase
          className="message-form__input"
          inputRef={inputRef}
          autoFocus={true}
          type="text"
          value={value}
          placeholder="сообщение"
          onChange={handleChange}
        />
        <input
          className={['message-form__btn', mode].join(' ')}
          type="submit"
          data-testid="message-form__btn"
        />
      </form>
    );
  }
);

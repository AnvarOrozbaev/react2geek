import React, { FC, useState } from 'react';
import './ChatAddForm.scss';

interface ChatListddFormProps {
  handleAddChat: (name: string) => void;
}
export const ChatAddForm: FC<ChatListddFormProps> = ({ handleAddChat }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, name: string) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    handleAddChat(name);
    setName('');
  };

  return (
    <form
      className="add-chat"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e, name)}
    >
      <input
        value={name}
        className="add-chat__input"
        placeholder="название чата"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <input
        type="submit"
        value="+"
        className="add-chat__btn"
        data-testid="add-chat__btn"
      />
    </form>
  );
};

import React, { FC } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import styles from './ChatListItem.module.scss';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';

interface Chat {
  name: string;
  id: string;
}
interface ChatlistItemProps {
  chat: Chat;
  selectedId: string;
  handleListItemClick: (id: string) => void;
  deleteChat: (id: string) => void;
}
export const ChatListItem: FC<ChatlistItemProps> = ({
  chat,
  selectedId,
  handleListItemClick,
  deleteChat,
}) => {
  return (
    <ListItem>
      <div className={styles.box}>
        <Link
          to={`/chats/${chat.name}`}
          className={styles.link}
        >
          <ListItemButton
            selected={selectedId === chat.id}
            onClick={() => handleListItemClick(chat.id)}
            data-testid="pick-chat__btn"
          >
            <p className={styles.text}>{chat.name}</p>
          </ListItemButton>
        </Link>
        <button
          className={styles.deletebtn}
          style={
            selectedId === chat.id
              ? { background: 'rgba(25, 118, 210, 0.08)' }
              : {}
          }
          data-testid="delete-chat__btn"
          onClick={() => deleteChat(chat.id)}
        >
          x
        </button>
      </div>
    </ListItem>
  );
};

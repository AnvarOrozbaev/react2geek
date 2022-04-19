import React, { FC, useState } from 'react';
import List from '@mui/material/List';
import { ChatListItem } from '../chat-list-item/ChatListItem';

interface Chat {
  name: string;
  id: string;
}
interface ChatListProps {
  chats: Chat[];
}

export const ChatList: FC<ChatListProps> = ({ chats }) => {
  const [selectedId, setSelectedId] = useState('');

  const handleItemClick = (id: string) => {
    setSelectedId(id);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 150 }}>
      {chats.map((chat) => (
        <ChatListItem
          chat={chat}
          key={chat.id}
          selectedId={selectedId}
          handleListItemClick={handleItemClick}
        />
      ))}
    </List>
  );
};

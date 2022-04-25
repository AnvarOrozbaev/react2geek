import React, { FC } from 'react';
import List from '@mui/material/List';
import { ChatListItem } from '../chat-list-item/ChatListItem';
import { Chats } from 'src/pages/chats/Chats';
import './ChatList.scss';
import { ChatListAddForm } from '../chat-list-add-form/ChatListAddForm';

interface ChatListProps {
  chats: Chats;
  selectedId: string;
  addChat: (name: string) => void;
  handleChatClick: (id: string) => void;
  deleteChat: (id: string) => void;
}

export const ChatList: FC<ChatListProps> = ({
  chats,
  selectedId,
  addChat,
  handleChatClick,
  deleteChat,
}) => {
  return (
    <div className="chats-wrapper">
      <ChatListAddForm handleAddChat={addChat} />
      <List sx={{ maxWidth: 150 }}>
        {Object.entries(chats).map((chat) => (
          <ChatListItem
            chat={{ name: chat[1].name, id: chat[0] }}
            key={chat[0]}
            selectedId={selectedId}
            handleListItemClick={handleChatClick}
            deleteChat={deleteChat}
          />
        ))}
      </List>
    </div>
  );
};

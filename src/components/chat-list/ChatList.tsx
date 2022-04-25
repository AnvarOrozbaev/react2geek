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
  type Entries<T> = {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];

  interface ChatProps {
    name: string;
    id: string;
  }

  const entries: Entries<Chats> = Object.entries(chats);
  return (
    <div className="chats-wrapper">
      <ChatListAddForm handleAddChat={addChat} />
      <List sx={{ maxWidth: 150 }}>
        {entries.map((chat) => {
          const chatProps: ChatProps = { name: chat[1].name, id: chat[0] };
          return (
            <ChatListItem
              chat={chatProps}
              key={chat[0]}
              selectedId={selectedId}
              handleListItemClick={handleChatClick}
              deleteChat={deleteChat}
            />
          );
        })}
      </List>
    </div>
  );
};

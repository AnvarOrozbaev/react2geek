import React, { FC, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { ChatListItem } from '../chat-list-item/ChatListItem';
import { ChatAddForm } from '../chat-add-form/ChatAddForm';
import {
  deleteChat,
  setSelectedId,
  addChat,
  selectChats,
  selectSelectedId,
} from '../../pages/chats/chatsSlice';
import List from '@mui/material/List';
import { ChatProps, Entries, ChatsType } from '../types';
import './ChatList.scss';
import { nanoid } from '@reduxjs/toolkit';

export const ChatList: FC = () => {
  const chats = useSelector(selectChats);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddChat = (name: string) => {
    const id = nanoid();
    dispatch(addChat({ name, id }));
  };
  const entries = useMemo<Entries<ChatsType>>(
    () => Object.entries(chats),
    [chats]
  );
  const selectedId = useSelector(selectSelectedId);
  const handleDeleteChat = (id: string) => {
    dispatch(deleteChat(id));
    dispatch(setSelectedId(''));
    navigate('/chats');
  };
  const handleListItemClick = (id: string) => {
    dispatch(setSelectedId(id));
  };
  return (
    <div className="chats-wrapper">
      <ChatAddForm handleAddChat={handleAddChat} />
      <List sx={{ maxWidth: 150 }}>
        {entries.map((chat) => {
          const chatProps: ChatProps = { name: chat[1].name, id: chat[0] };
          return (
            <ChatListItem
              key={chat[0]}
              chat={chatProps}
              selectedId={selectedId}
              handleListItemClick={handleListItemClick}
              deleteChat={handleDeleteChat}
            />
          );
        })}
      </List>
    </div>
  );
};

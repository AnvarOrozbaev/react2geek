import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { MessageForm } from '../../components/message-form/MessageForm';
import { MessageList } from '../../components/message-list/MessageList';
import { ChatList } from '../../components/chat-list/ChatList';
import { AUTHOR } from '../../const';
import { nanoid } from 'nanoid';
import {
  addMessage,
  selectSelectedId,
  selectChats,
} from '../../pages/chats/chatsSlice';
import type { RootState } from '../../store/store';
import './Chats.scss';

export const Chats: FC = () => {
  const chats = useSelector(selectChats);
  const selectedId = useSelector(selectSelectedId);
  const userName = useSelector((state: RootState) => state.profileState.name);
  const dispatch = useDispatch();
  const handleMessageSubmit = (value: string) => {
    let author;
    userName.length > 0 ? (author = userName) : (author = AUTHOR.USER);
    dispatch(
      addMessage({
        text: value,
        author,
        id: nanoid(),
      })
    );
  };
  useEffect(() => {
    if (selectedId !== '') {
      if (
        !selectedId.length ||
        chats[selectedId].messages.length === 0 ||
        chats[selectedId].messages[chats[selectedId].messages.length - 1]
          .author === AUTHOR.BOT
      ) {
        return;
      }
    }
    let timeout: ReturnType<typeof setTimeout>;
    if (chats[selectedId]) {
      timeout = setTimeout(() => {
        const botMessage = {
          author: AUTHOR.BOT,
          text: 'robot message',
          id: nanoid(),
        };
        dispatch(addMessage(botMessage));
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [chats, selectedId, dispatch]);

  const keys = Object.keys(chats);

  if (
    keys.length > 0 &&
    selectedId.length > 0 &&
    !keys.find((id) => id === selectedId)
  ) {
    return (
      <Navigate
        replace
        to="/chats"
      />
    );
  }

  return (
    <div className="container">
      <ChatList />
      {chats[selectedId] && (
        <div className="messages-container">
          <MessageForm onSendMessage={handleMessageSubmit} />
          <p>Сообщения:</p>
          <MessageList messages={chats[selectedId].messages} />
        </div>
      )}
    </div>
  );
};

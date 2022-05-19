import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { MessageForm } from '../../components/message-form/MessageForm';
import { MessageList } from '../../components/message-list/MessageList';
import { ChatList } from '../../components/chat-list/ChatList';
import { AUTHOR } from '../../const';
import { nanoid } from 'nanoid';
import {
  addMessage,
  selectSelectedId,
  selectChats,
  addMessagebyBot,
} from '../../pages/chats/chatsSlice';
import type { RootState } from '../../store/store';
import './Chats.scss';

export const Chats: FC = () => {
  const chats = useSelector(selectChats);
  const selectedId = useSelector(selectSelectedId);
  const userName = useSelector((state: RootState) => state.profile.name);
  const dispatch = useAppDispatch();
  const handleMessageSubmit = (value: string) => {
    let author;
    userName.length > 0 ? (author = userName) : (author = AUTHOR.USER);
    dispatch(
      addMessage({
        chatId: selectedId,
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
        chats[selectedId]?.messages.length === 0 ||
        chats[selectedId]?.messages[chats[selectedId].messages.length - 1]
          .author === AUTHOR.BOT
      ) {
        return;
      }
      dispatch(addMessagebyBot(selectedId));
    }
  }, [chats, selectedId, dispatch]);

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

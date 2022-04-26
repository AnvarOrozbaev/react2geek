import React, { FC, useState, useEffect, useCallback } from 'react';
import { MessageForm } from '@/components/message-form/MessageForm';
import { MessageList } from '@/components/message-list/MessageList';
import { ChatList } from '@/components/chat-list/ChatList';
import { AUTHOR } from '@/const';
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './Chats.scss';

export interface Message {
  author: string;
  text: string;
  id: string;
}
export interface Chat {
  name: string;
  id: string;
  messages: Message[];
}
export interface ChatsType {
  [id: string]: {
    name: string;
    messages: Message[];
  };
}

export const Chats: FC = () => {
  const [chats, setChats] = useState<ChatsType>({});
  const [selectedId, setSelectedId] = useState('');

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
        setChats({
          ...chats,
          [selectedId]: {
            ...chats[selectedId],
            messages: [...chats[selectedId].messages, botMessage],
          },
        });
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [chats, selectedId]);

  const handleMessageSubmit = useCallback(
    (text: string) => {
      const newMessage = {
        author: AUTHOR.USER,
        text,
        id: nanoid(),
      };
      setChats((prev) => ({
        ...prev,
        [selectedId]: {
          ...prev[selectedId],
          messages: [...prev[selectedId].messages, newMessage],
        },
      }));
    },
    [selectedId]
  );
  const handleChatClick = (id: string) => {
    setSelectedId(id);
  };
  const deleteChat = (id: string) => {
    setChats((prev) => {
      const newChats = { ...prev };
      delete newChats[id];
      return newChats;
    });
    setSelectedId('');
  };
  const addChat = (name: string) => {
    const id = nanoid();
    setChats({
      ...chats,
      [id]: { name, messages: [] },
    });
  };
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
      <ChatList
        chats={chats}
        addChat={addChat}
        selectedId={selectedId}
        handleChatClick={handleChatClick}
        deleteChat={deleteChat}
      />
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

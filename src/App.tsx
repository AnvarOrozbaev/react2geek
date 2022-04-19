import React, { FC, useState, useEffect, useCallback } from 'react';
import { MessageForm } from './components/message-form/MessageForm';
import { MessageList } from './components/message-list/MessageList';
import { ChatList } from './components/chat-list/ChatList';
import { AUTHOR } from './const';
import { nanoid } from 'nanoid';
import './App.scss';
interface Message {
  author: string;
  text: string;
  id: string;
}
interface Chat {
  name: string;
  id: string;
}
export const App: FC = () => {
  const newChat = {
    name: 'Chat-1',
    id: nanoid(),
  };
  const [messages, setMessages] = useState<Message[]>([]);
  const [chats, setChats] = useState<Chat[]>([
    { id: '1', name: 'chat-1' },
    { id: '2', name: 'chat-2' },
  ]);
  const handleMessageSubmit = useCallback((text: string) => {
    setMessages((prevMessage) => [
      ...prevMessage,
      {
        author: AUTHOR.USER,
        text,
        id: nanoid(),
      },
    ]);
  }, []);
  useEffect(() => {
    if (
      !messages.length ||
      messages[messages.length - 1].author === AUTHOR.BOT
    ) {
      return;
    }
    const timeout = setTimeout(() => {
      const botMessage = {
        author: AUTHOR.BOT,
        text: 'robot message',
        id: nanoid(),
      };

      setMessages([...messages, botMessage]);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="container">
      <ChatList chats={chats} />
      <div className="messages-container">
        <MessageForm onSendMessage={handleMessageSubmit} />
        <p>Сообщения:</p>
        <MessageList messages={messages} />
      </div>
    </div>
  );
};

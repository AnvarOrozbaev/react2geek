import React, { FC, useState, useEffect, useCallback } from 'react';
import { MessageForm } from './components/message-form/MessageForm';
import { MessageList } from './components/message-list/MessageList';
import { AUTHOR } from './const';
import { nanoid } from 'nanoid'
import './App.scss';
interface Message {
  author: string,
  text: string,
  id: string, 
}

export const  App: FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessageSubmit = useCallback((text:string) => {
    setMessages([...messages, { 
      author: AUTHOR.USER, 
      text, 
      id: nanoid(), 
    }]);
  },[]);
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
        id: nanoid()
        
      };

      setMessages([...messages, botMessage]);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="container">
      <MessageForm onSendMessage={handleMessageSubmit} />
      <p>Сообщения:</p>
      <MessageList messages={messages} />
    </div>
  );
}



import React, { useState, useEffect } from 'react';
import { MessageForm } from './components/message-form/MessageForm';
import { MessageList } from './components/message-list/MessageList';
import { AUTHOR } from './const'
import './App.scss';
function App() {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = ({ author, text }) => {
    setMessages([...messages, { author, text }]);
  };
  useEffect(() => {
    if (!messages.length || messages[messages.length - 1].author === AUTHOR.BOT) {
      return;
    }
    const timeout = setTimeout(() => {
      const botMessage = {
        author: AUTHOR.BOT,
        text: 'robot message',
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

export default App;

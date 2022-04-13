import { useState, useEffect } from 'react';
import { MessageForm } from './components/message-form/MessageForm';
import './App.scss';
function App() {
  const [messagelist, setMessages] = useState([]);

  const handleMessageSubmit = ({ author, text }) => {
    setMessages([...messagelist, { author, text }]);
  };
  useEffect(() => {
    if (
      !messagelist.length ||
      messagelist[messagelist.length - 1].author === 'robot'
    ) {
      return;
    }
    const timeout = setTimeout(() => {
      const newMessage = {
        author: 'robot',
        text: 'robot message',
      };

      setMessages([...messagelist, newMessage]);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [messagelist]);

  const mappedMessages = messagelist.map((i, idx) => {
    return (
      <ul key={idx}>
        <li>
          {i.author}: {i.text}
        </li>
      </ul>
    );
  });
  return (
    <div className="container">
      <MessageForm onSendMessage={handleMessageSubmit} />
      <p>Сообщения:</p>
      {mappedMessages}
    </div>
  );
}

export default App;

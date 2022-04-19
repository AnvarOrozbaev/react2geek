import React, { FC } from 'react';

interface Message {
  author: string;
  text: string;
  id: string
}

interface MessageListProps {
  messages: Message[];
}
export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <ul>
    {messages.map((i) => (
      <li key={i.id}>
        {i.author}: {i.text}
      </li>
    ))}
  </ul>
);

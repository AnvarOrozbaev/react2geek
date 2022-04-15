import React from 'react';
export const MessageList = ({ messages }) => {
  return messages.map((i, idx) => {
    return (
      <ul key={idx}>
        <li>
          {i.author}: {i.text}
        </li>
      </ul>
    );
  });
};

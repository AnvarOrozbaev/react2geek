import { ChatList } from './ChatList';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
export default {
  title: 'ChatList',
  component: ChatList,
} as ComponentMeta<typeof ChatList>;

const Template: ComponentStory<typeof ChatList> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <ChatList {...args} />
    </BrowserRouter>
  </Provider>
);

export const Chats = Template.bind({});
Chats.args = {
  chats: {
    'chat-1': { name: 'chat-1', messages: [] },
    'chat-2': { name: 'chat-2', messages: [] },
  },
};

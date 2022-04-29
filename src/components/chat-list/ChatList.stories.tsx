import { ChatList } from './ChatList';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
export default {
  title: 'ChatList',
  component: ChatList,
} as ComponentMeta<typeof ChatList>;

const Template: ComponentStory<typeof ChatList> = (args) => (
  <Provider store={store}>
    <MemoryRouter>
      <ChatList {...args} />
    </MemoryRouter>
  </Provider>
);

export const Chats = Template.bind({});
Chats.args = {
  chats: {
    'chat-1': { name: 'chat-1', messages: [] },
    'chat-2': { name: 'chat-2', messages: [] },
  },
};

import { ChatList } from './ChatList';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'ChatList',
  component: ChatList,
} as ComponentMeta<typeof ChatList>;

const Template: ComponentStory<typeof ChatList> = (args) => (
  <ChatList {...args} />
);

export const Chats = Template.bind({});
Chats.args = {
  chats: [
    { id: '1', name: 'chat-1' },
    { id: '2', name: 'chat-2' },
  ],
};

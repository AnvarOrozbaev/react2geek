import { ChatListItem } from './ChatListItem';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'ChatListItem',
  component: ChatListItem,
} as ComponentMeta<typeof ChatListItem>;

const Template: ComponentStory<typeof ChatListItem> = (args) => (
  <BrowserRouter>
    <ChatListItem {...args} />{' '}
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  chat: { id: '1', name: 'chat-1' },
};

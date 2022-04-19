import { ChatListItem } from './ChatListItem';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'ChatListItem',
  component: ChatListItem,
} as ComponentMeta<typeof ChatListItem>

const Template: ComponentStory<typeof ChatListItem> = (args) => <ChatListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  chat: {id: '1', name: 'chat-1' },
};

export const Selected = Template.bind({});
Selected.args = {
  chat: {id: '1', name: 'chat-1' },
  selectedId: '1'
};
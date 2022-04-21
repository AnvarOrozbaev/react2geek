import { ChatListAddForm } from './ChatListAddForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'ChatListAddForm',
  component: ChatListAddForm,
} as ComponentMeta<typeof ChatListAddForm>;

const Template: ComponentStory<typeof ChatListAddForm> = (args) => (
  <BrowserRouter>
    <ChatListAddForm {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  handleAddChat: () => {
    console.log('hi');
  },
};

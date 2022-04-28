import { ChatAddForm } from './ChatAddForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'ChatAddForm',
  component: ChatAddForm,
} as ComponentMeta<typeof ChatAddForm>;

const Template: ComponentStory<typeof ChatAddForm> = (args) => (
  <BrowserRouter>
    <ChatAddForm {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  handleAddChat: () => {
    console.log('hi');
  },
};

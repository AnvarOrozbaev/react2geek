import { ChatAddForm } from './ChatAddForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'ChatAddForm',
  component: ChatAddForm,
} as ComponentMeta<typeof ChatAddForm>;

const Template: ComponentStory<typeof ChatAddForm> = (args) => (
  <MemoryRouter>
    <ChatAddForm {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  handleAddChat: () => {
    console.log('hi');
  },
};

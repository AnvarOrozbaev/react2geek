import { MessageForm } from './MessageForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'MessageForm',
  component: MessageForm,
} as ComponentMeta<typeof MessageForm>

const Template: ComponentStory<typeof MessageForm> = (args) => <MessageForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
// https://www.chromatic.com/setup?appId=625e4d9c26ea96003a3ef6ba

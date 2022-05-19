import { MessageForm } from './MessageForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
export default {
  title: 'MessageForm',
  component: MessageForm,
} as ComponentMeta<typeof MessageForm>;

const Template: ComponentStory<typeof MessageForm> = (args) => (
  <Provider store={store}>
    <MessageForm {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

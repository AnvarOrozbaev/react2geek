import { MessageForm } from './MessageForm';

export default {
  title: 'MessageForm',
  component: MessageForm,
};

const Template = (args) => <MessageForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

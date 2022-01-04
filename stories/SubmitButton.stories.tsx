import { SubmitButton } from '../src/SubmitButton';

export default {
  title: 'Submit button',
  component: SubmitButton,
  argTypes: { handleSubmit: { action: 'handleSubmit' } },
};

const template = (args) => <SubmitButton {...args} />;

export const defaultButton = template.bind({});
defaultButton.args = {
  text: 'submit',
  backgroundColor: '#f2f2f2',
  size: 'md',
};

import { FieldList } from '../src/FieldList';

export default {
  title: 'Customizable FieldList',
  component: FieldList,
};

const template = (args: any) => <FieldList {...args} />;

export const fieldListText = template.bind({});
fieldListText.args = {
  label: 'firstname',
  type: 'text',
  placeholder: 'e.g John',
};
export const fieldListPassword = template.bind({});
fieldListPassword.args = {
  label: 'password',
  type: 'password',
  placeholder: 'password',
};
export const fieldListEmail = template.bind({});
fieldListEmail.args = {
  label: 'email',
  type: 'email',
  placeholder: '123@123.com',
};
export const fieldListCity = template.bind({});
fieldListCity.args = {
  label: 'City',
  type: 'text',
};

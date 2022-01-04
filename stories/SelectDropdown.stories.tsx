import { SelectDropdown } from '../src/SelectDropdown';

export default {
  title: 'Select Dropdown',
  component: SelectDropdown,
};

const template = (args: any) => <SelectDropdown {...args} />;

export const defaultSelect = template.bind({});
defaultSelect.args = {
  label: 'Department',
  options: ['Sales', 'Marketing', 'Human Resources', 'Finance'],
  collectValue: (value: string) => {
    return value;
  },
};

import { Formzie } from '../src/Formzie'

export default {
    title: 'Formzie Form',
    component: Formzie,
}

const template = (args: any ) => <Formzie {...args} />

export const defaultFormzie = template.bind({});
defaultFormzie.args = {
    title: "Form Header",
    // children: {FieldList}
}
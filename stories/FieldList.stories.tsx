import {FieldList} from "../src/FieldList"

export default {
    title: "Customizable FieldList",
    component: FieldList,
}

const template = (args : any) => <FieldList {...args}/>

export const fieldListFirstname = template.bind({});
fieldListFirstname.args = {
label:  "firstname",
type: "firstname",
placeholder: "placeholder"
}
export const fieldListLastname = template.bind({});
fieldListLastname.args = {
label:  "lastname",
type: "lastname",
placeholder: "placeholder"
}
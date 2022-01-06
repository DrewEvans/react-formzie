import React, { ReactElement } from 'react'

interface Props {
    label: string, 
    type: string, 
    value: string, 
    placeholder: string, 
    onChange?: Function,
}

export const FieldList = ({label, type, value, placeholder}: Props): ReactElement => {
    return (
        <div>
            <label>{label}</label>
			<input
				name={label}
				type={type}
				value={value}
                placeholder={placeholder}
				// onChange={(e) => setValue(e.target.value)}
			/>
        </div>
    )
};


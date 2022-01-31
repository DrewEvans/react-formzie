import React from 'react'
import styled from 'styled-components'

const colors = {
    fontColor: `#000`,
    bgColor: '#f9f9f9',
    borderColor: '#e5e5e5',
    borderFocus: '#1c1c1c',
    InputFocus: '#0f0f0f',
  };

const LabelHeader = styled.h4`
color: ${colors.fontColor};
margin: 0.5em 0;
`;

const Select = styled.select`
font-family: inherit;
font-size: 0.95em;
font-weight: 500;
width: 100%;
padding: 0.6em;
line-height: 1.4;
background-color: ${colors.bgColor};
border: 1px solid ${colors.borderColor};
border-radius: 3px;
transition: all 0.2s ease-in-out;

:focus{ outline: 0;
    border-color: ${colors.borderFocus};} 
:active{ outline: 0;
    border-color: ${colors.borderFocus};}
`
const Option = styled.option`
font-family: inherit;
font-size: 0.95em;
font-weight: 500;
width: 100%;
padding: 0.6em;
line-height: 1.4;
background-color: ${colors.bgColor};
border: 1px solid ${colors.borderColor};
border-radius: 3px;
transition: all 0.2s ease-in-out;
`
const Input = styled.input`
font-family: inherit;
font-size: 0.95em;
font-weight: 500;
width: 100%;
padding: 0.6em;
line-height: 1.4;
background-color: ${colors.bgColor};
border: 1px solid ${colors.borderColor};
border-radius: 3px;
transition: all 0.2s ease-in-out;

:focus{
    outline: 0;
    border-color: ${colors.InputFocus};
    color: ${colors.InputFocus};
}
`

const Button = styled.button`
font-family: inherit;
width: 50%;
align-self: flex-end;
height: 2em;
border: none;
border-radius: 3px;
outline: none;
background: ${colors.fontColor};
color: #fff;
font-size: 1.25em;
margin: 1em 0;
text-align: center;
box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
position: relative;
overflow: hidden;
cursor: pointer;
transition: all 0.2s ease-in-out;

:hover {
    color: #f5f5f5;
    background-color: ${colors.InputFocus};
}
 :focus {
    background-color: ${colors.borderFocus};
 }
`

interface props {
    controlType : string, 
    labelHeader? : string, 
    idNameHtml? : string, 
    options?: any, 
    onChange?: React.ChangeEventHandler<any>,
    onClick?: React.MouseEventHandler<HTMLButtonElement>, 
    type?:string, 
    minLength?: number, 
    value?: string, 
    placeholder?: string, 
    buttonText?: string
}

const InputField = ({controlType, labelHeader, type, idNameHtml, value, onChange, onClick, minLength, placeholder, options, buttonText}: props) => {
    
    if(controlType === "select"){
        return (
            <>
                <label className="input-group" htmlFor={idNameHtml}><LabelHeader>{labelHeader}</LabelHeader></label>

                <Select className="select" name={idNameHtml} id={idNameHtml} onChange={onChange}>
                    <Option value="">Choose an option</Option>
                    {options.map((option : any, i : number) =>{
                        return ( 
                            <Option className='option'
                            key={`${idNameHtml}-${i++}`}
                            value={option}>{option}</Option>
                        )
                    })}
                </Select>
            </>
        )
    }

    if(controlType === "input"){
     return(   
        <>
            <label className="input-group" htmlFor={idNameHtml}><LabelHeader>{labelHeader}</LabelHeader></label>
                <Input
                id={idNameHtml}
                name={idNameHtml}
                type={type}
                minLength={minLength}
                value={value}
                aria-label={labelHeader}
                placeholder={placeholder}
                onChange={onChange}
                />
        </>
    )
}

    if(controlType === "submit"){
     return(   
        <>
          <Button className="submit-button" onClick={onClick}>{buttonText}</Button>
        </>
    )
}
    
    return (
        <div>
            ...Error in one of the Children Components
        </div>
    )
}

export{InputField};

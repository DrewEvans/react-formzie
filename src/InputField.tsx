import React from 'react'
import './styles.css'

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
                <label className="input-group" htmlFor={idNameHtml}><h4>{labelHeader}</h4></label>

                <select className="select" name={idNameHtml} id={idNameHtml} onChange={onChange}>
                    <option value="">Choose an option</option>
                    {options.map((option : any, i : number) =>{
                        return ( 
                            <option className='option'
                            key={`${idNameHtml}-${i++}`}
                            value={option}>{option}</option>
                        )
                    })}
                </select>
            </>
        )
    }

    if(controlType === "input"){
     return(   
        <>
            <label className="input-group" htmlFor={idNameHtml}><h4>{labelHeader}</h4></label>
                <input
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
          <button className="submit-button" onClick={onClick}>{buttonText}</button>
        </>
    )
}
    
    
    return (
        <div>
            ...Error in one of the Children Components
        </div>
    )
}

export default InputField;

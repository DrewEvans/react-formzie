import React from "react";
import { InputField } from "./InputField";
import styled from "styled-components"

const FormContainer = styled.form`
display: flex;
flex-direction: column;
width: 270px;
margin: 0.5rem 2rem;
padding: 0.5rem;
`
interface props {
 children: JSX.Element[],
 title?: string
}

const Formzie = React.memo(({ children, title }: props ) => {

	return (
		<FormContainer className="formzie">		
			<h1>{title}</h1>
			{children.map((child : JSX.Element , i : number) => {
				const { 
					controlType, 
					labelHeader, 
					idNameHtml, 
					options, 
					onChange, 
					onClick, 
					type, 
					minLength, 
					value, 
					placeholder, 
					buttonText} = child.props
			
				if(controlType === "select"){
				return (
				<InputField 
					controlType={controlType} 
					labelHeader={labelHeader} 
					idNameHtml={idNameHtml} 
					onChange={onChange} 
					options={options}
					value={value}
					key={`formGroup-${i++}`}/>
				)
			}
			if(controlType === "input"){
				return (
				<InputField 
				controlType={controlType}
				labelHeader={labelHeader}
				idNameHtml = {idNameHtml} 
                type={type}
                minLength={minLength}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
				key={`formGroup-${i++}`}
				/>
				)
			} 
			if(controlType === "submit"){
				return (
				<InputField 
				controlType={controlType}
				onClick={onClick}
				buttonText={buttonText}
				key={`formGroup-${i++}`}
				/>
				)
			} else { return <span>...</span>}
			})}
		</FormContainer>
	);
})

export {Formzie};


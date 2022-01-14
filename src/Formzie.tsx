import React, { lazy } from "react";
const InputField = lazy(() => import("./InputField"))


interface props {
 children: JSX.Element[],
 title?: string
}


const Form = React.memo(({ children, title }: props ) => {

	return (
		<form className="formzie">		
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
      
		</form>
	);
})

export {Form};


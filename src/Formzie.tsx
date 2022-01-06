import React, { ComponentType, ReactElement } from 'react';

interface Props {
  children: ComponentType,
  title?: string,  
}

export const Formzie = ({children, title}: Props): ReactElement => {
  
  const renderChildren = (child : ComponentType) => {<>{child}</>} 
  
  return <div>
    <h1>{title}</h1>
    {children && renderChildren(children)}
  </div>;
};

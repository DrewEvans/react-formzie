import React, {  ReactElement } from 'react';

interface Props {
  children: any;
  renderChildren: Function;
  title?: string;
}

export const Formzie = ({ children, title, renderChildren }: Props): ReactElement => {
  
  return (
    <form>
      <h1>{title}</h1>
      {renderChildren(children)}
    </form>
  );
};

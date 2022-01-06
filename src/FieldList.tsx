import React, { ReactElement } from 'react';
import styled from 'styled-components';

const colors = {
  primary: `#415704`,
  secondary: '#687F11',
  tertiary: '#94AC1B',
  quaternary: '#828B67',
  quinary: '#A4AE94',
};

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelHeader = styled.label`
font-size 1.25em;
color: ${colors.primary};
margin: .25em 0;
`;

const FormField = styled.input`
  display: block;
  line-height: 25px;
  font-size: 1em;
  font-weight: 500;
  padding: 0.5rem;
  width: 240px;
  color: ${colors.primary};
  border: 1px solid ${colors.tertiary};
  border-radius: 10px;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.2);
  background: #fff;
  transition: border 0.3s ease;
  &::placeholder {
    color: ${colors.primary};
  }
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

interface Props {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange?: Function;
}

export const FieldList = ({
  label,
  type,
  value,
  placeholder,
}: Props): ReactElement => {
  return (
    <FormGroup>
      <LabelHeader>{label}</LabelHeader>
      <FormField
        name={label}
        type={type}
        value={value}
        placeholder={placeholder}
        // onChange={(e) => setValue(e.target.value)}
      />
    </FormGroup>
  );
};

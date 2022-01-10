import React, { ReactElement, useState, useEffect } from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

const colors = {
  primary: `#415704`,
  secondary: '#687F11',
  tertiary: '#94AC1B',
  quaternary: '#828B67',
  quinary: '#A4AE94',
};

const LabelHeader = styled.label`
font-size 1.25em;
color: ${colors.primary};
margin: .25em 0;
`;

const SelectWrapper = styled.div`
  width: 240px;
  cursor: pointer;
`;

const DropdownHeader = styled.div`
  background-color: #fff;
  color: ${colors.primary};
  font-size: 1.25em;
  font-weight: 500;
  padding: 0.5rem;
  width: 240px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.tertiary};
  border-radius: 10px;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const DropdownListContainer = styled.div`
  background-color: #fff;
  margin-top: 0.15em;
  padding: 0.5rem;
  width: 240px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  -webkit-box-shadow: 0px 5px 20px 1px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 1.25rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.5em;
  }
`;

const DropdownItem = styled.li`
  list-style: none;
  margin-bottom: 0.25em;
  color: ${colors.primary};
  &:hover,
  &:focus {
    background-color: ${colors.tertiary};
    color: #f2f2f2;
  }
`;

interface Props {
  options: Array<any>;
  label: string;
  onClick: Function;
  name: String;
}

export const SelectDropdown = ({
  options,
  onClick,
  label,
}: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (e : any) => {
    
    const target = e.target as HTMLTextAreaElement;

    setSelectedOption(target.innerText);
    onClick(e)
    setIsOpen(false);
  };

  return (
    <>
      <LabelHeader>{label}</LabelHeader>
      <SelectWrapper>
        <DropdownHeader onClick={toggling}>
          {selectedOption || 'Choose an option'}
          {!isOpen && <span>{angleUp}</span>}
          {isOpen && <span>{angleDown}</span>}
        </DropdownHeader>
        {isOpen && (
          <DropdownListContainer>
            <DropdownList role="listbox" id="pet-select">
              {options.map((option, i) => (
                <DropdownItem
                value={option}
                role="option"
                onClick={onOptionClicked}
                key={`selectDropdown-${i++}`}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          </DropdownListContainer>
        )}
      </SelectWrapper>
    </>
  );
};

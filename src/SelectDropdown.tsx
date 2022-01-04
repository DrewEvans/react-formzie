import React, { ReactElement, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

interface Props {
  options: Array<any>;
  label: string;
  collectValue: Function;
}

export const SelectDropdown = ({
  options,
  collectValue,
  label,
}: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    collectValue(value);
    setIsOpen(false);
  };

  return (
    <>
      <label>{label}</label>
      <div>
        <div onClick={toggling}>
          {selectedOption || 'Choose an option'}
          {!isOpen && <span>{angleUp}</span>}
          {isOpen && <span>{angleDown}</span>}
        </div>
        {isOpen && (
          <div>
            <ul>
              {options.map((option, i) => (
                <li
                  onClick={onOptionClicked(option)}
                  key={`selectDropdown-${i++}`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

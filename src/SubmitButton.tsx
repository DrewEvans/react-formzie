import React, { ReactElement } from 'react';

interface Props {
  text: string;
  backgroundColor?: string;
  size?: string;
  handleSubmit(): Event;
  onClick(Event: MouseEvent): Function;
}

export const SubmitButton = ({
  text,
  backgroundColor,
  size,
  handleSubmit,
}: Props): ReactElement => {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
    borderRadius: '15px',
  };
  return (
    <button style={style} onClick={handleSubmit}>
      {text}
    </button>
  );
};

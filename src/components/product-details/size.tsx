import React from 'react';
import { SizeBox, SizeBtn } from './styled';
import { SizeProps } from './types';

const Size = ({ onChange, sizes, value }: SizeProps) => {
  function selectSize(val: number) {
    onChange(val);
  }

  return (
    <SizeBox>
      <h3>Size:</h3>
      <div>
        {sizes.map(val => (
          <SizeBtn selected={val=== value} key={val} onClick={() => selectSize(val)} aria-label="Size button">
            {val}
          </SizeBtn>
        ))}
      </div>
    </SizeBox>
  );
};

export default Size;

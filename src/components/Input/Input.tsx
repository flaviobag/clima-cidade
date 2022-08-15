import React from 'react';
import { Button, Icon, StyleInput, StyleSearch } from './Input.styles';

type InputTypes = {
  types: string;
  name: string;
};

const Input = ({ types, name }: InputTypes) => {
  const [value, setValue] = React.useState('');

  return (
    <StyleSearch>
      <StyleInput
        type={types}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='Digite o nome da cidade'
        name={name}
      />
      <Button>
        <Icon />
      </Button>
    </StyleSearch>
  );
};

export default Input;

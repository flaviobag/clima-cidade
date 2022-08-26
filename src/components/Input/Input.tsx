import React, { SyntheticEvent } from 'react';
import { Form, Icon, Input } from './Input.styles';

type SearchProps = {
  label: string;
  name: string;
  id: string;
  type: string;
  submitSearch: (term: string) => void;
};

const Search: React.FC<SearchProps> = ({ label, name, id, type = 'text', submitSearch }) => {
  const [value, setValue] = React.useState('');
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    submitSearch(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={label}
        aria-label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Icon />
    </Form>
  );
};

export default Search;

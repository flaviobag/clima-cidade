import styled from 'styled-components';
import { ReactComponent as search } from '../../assets/search.svg';

export const Button = styled.button`
  background-color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(search)`
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.25rem;
  width: 400px;
  border-radius: 0;
  border: none;
`;

export const Form = styled.form`
  margin-top: 1rem;
  position: relative;
`;

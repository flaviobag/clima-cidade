import styled from 'styled-components';
import { ReactComponent as search } from '../../assets/search.svg';

export const Icon = styled(search)`
  width: 1rem;
  height: 1rem;
  background-color: transparent;
  position: absolute;
  top: calc(50% - 8px);
  right: 0.5rem;
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

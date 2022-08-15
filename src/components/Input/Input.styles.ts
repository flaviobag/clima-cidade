import styled from 'styled-components';
import { ReactComponent as search } from '../../assets/search.svg';

export const StyleInput = styled.input`
  display: flex;
  align-items: center;
  height: 50px;
  width: 400px;
  border: none;
  font-size: 25px;
`;
export const StyleSearch = styled.div`
  display: flex;
`;

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

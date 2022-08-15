import React from 'react';
import Input from '../../components/Input/Input';
import TableCidade from '../../components/Table/Table';
import { Title, Main, DivLine } from './Home.styles';

const Home = () => (
  <Main>
    <Title>Previsão do Tempo</Title>
    <Input types='Input' name='Cidade' />
    <DivLine />
    <TableCidade />
  </Main>
);

export default Home;

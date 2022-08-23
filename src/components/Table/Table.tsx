import React from 'react';
import { createPartiallyEmittedExpression } from 'typescript';
import { cachedDataVersionTag } from 'v8';
import { Title } from '../../pages/Home/Home.styles';
import { Table, TableTitle } from './Table.styles';

const TableCidade = () => (
  <>
    
    <Title>Capitais</Title>
      <TableWrapper>
        <Table capitais={capitais.slice(0, halfLength)} />
        <Table capitais={capitais.slice(halfLength, capitais.length)} />
      </TableWrapper>
  </>
);

export default TableCidade;

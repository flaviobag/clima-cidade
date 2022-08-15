import React from 'react';
import { Table, TableTitle } from './Table.styles';

const TableCidade = () => (
  <>
    <TableTitle>Capitais</TableTitle>
    <Table>
      <thead>
        <tr>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12º</td>
          <td>25º</td>
          <td>Sao Paulo</td>
        </tr>
        <tr>
          <td>12º</td>
          <td>25º</td>
          <td>Rio de Janeiro</td>
        </tr>
        <tr>
          <td>12º</td>
          <td>25º</td>
          <td>Belo Horizonte</td>
        </tr>
        <tr>
          <td>12º</td>
          <td>25º</td>
          <td>Brasilia</td>
        </tr>
        <tr>
          <td>12º</td>
          <td>25º</td>
          <td>Belém</td>
        </tr>
      </tbody>
    </Table>
  </>
);

export default TableCidade;

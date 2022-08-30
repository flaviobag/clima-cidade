import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import Search from '../../components/Input/Input';
import { City } from '../../types/city';
import { Line, Main, Small, Sub, Title } from './Home.styles';
import Table from './Table';
import getData from '../../api/index';

const TableWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Home = () => {
  const [selectedCity, setSelectedCity] = React.useState<City | undefined>(undefined);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [cities, setCities] = React.useState<Array<City>>([]);
  const capitais = cities.filter((city) => city.capital);
  const halfLength = capitais.length / 2;

  React.useEffect(() => {
    if (searchTerm) {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      const newCity = cities.filter((city) => {
        const lowercaseName = city.name.toLowerCase();
        return lowercaseName.includes(lowercaseSearchTerm);
      });
      setSelectedCity(newCity[0]);
    }
  }, [searchTerm]);
  React.useEffect(() => {
    (async () => {
      const newCities = await getData();
      setCities(newCities);
    })();
  }, []);
  return (
    <Main>
      <Title as='h2'>Previsão do tempo</Title>
      {selectedCity && <Card city={selectedCity} />}
      <Search
        label='Insira aqui o nome da cidade'
        name='search'
        id='search'
        submitSearch={setSearchTerm}
        type=''
      />
      <Line />
      <Sub>
        <Small>Capitais</Small>
        <TableWrapper>
          <Table capitais={capitais.slice(0, halfLength)} />
          <Table capitais={capitais.slice(halfLength, capitais.length)} />
        </TableWrapper>
      </Sub>
    </Main>
  );
};

export default Home;

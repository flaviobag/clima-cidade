import React from 'react';
import {
  Container,
  Header,
  Info,
  AdditionalInfoContainer,
  Row,
  InfoRow,
  Line,
  TemperatureWeekly,
  Day,
  DayWeek,
  TemperatureDay,
  Arrow,
  Info2,
} from './Card.styles';
import { City } from '../../types/city';

const Card: React.FC<{ city: City }> = ({ city }) => (
  <Container>
    <Header>{city.location}</Header>
    <Info> 20ºC Nublado </Info>
    <AdditionalInfoContainer>
      <Row>
        <InfoRow>
          <Row>
            <Arrow small />
            <Info2>16º</Info2>
          </Row>
          <Row>
            <Arrow />
            <Info2>25º</Info2>
          </Row>
        </InfoRow>
        <InfoRow>
          <span>Sensação</span>
          <Info2>19ºC</Info2>
        </InfoRow>
      </Row>
      <Row>
        <InfoRow>
          <span>Vento</span>
          <Info2>18km/h</Info2>
        </InfoRow>
        <InfoRow>
          <span>Umidade</span>
          <Info2>89%</Info2>
        </InfoRow>
      </Row>
    </AdditionalInfoContainer>
    <Line />
    <TemperatureWeekly>
      <Day>
        <DayWeek>Terça</DayWeek>
        <TemperatureDay>
          <span>18°</span>
          <span>26°</span>
        </TemperatureDay>
      </Day>
      <Day>
        <DayWeek>Quarta</DayWeek>
        <TemperatureDay>
          <span>18°</span>
          <span>28°</span>
        </TemperatureDay>
      </Day>
      <Day>
        <DayWeek>Quinta</DayWeek>
        <TemperatureDay>
          <span>19°</span>
          <span>30°</span>
        </TemperatureDay>
      </Day>
      <Day>
        <DayWeek>Sexta</DayWeek>
        <TemperatureDay>
          <span>23°</span>
          <span>35°</span>
        </TemperatureDay>
      </Day>
      <Day>
        <DayWeek>Sábado</DayWeek>
        <TemperatureDay>
          <span>23°</span>
          <span>37°</span>
        </TemperatureDay>
      </Day>
    </TemperatureWeekly>
  </Container>
);

export default Card;

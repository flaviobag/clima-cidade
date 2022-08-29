import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/arrow.svg';

export const Container = styled.div`
  padding: 1rem 2rem;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background-color: white;
  color: grey;
`;

export const Header = styled.h2`
  font-size: 11px;
`;

export const Info = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const AdditionalInfoContainer = styled.div`
  max-width: 170px;
  font-size: 12px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 3px;
`;

export const Line = styled.div`
  background-color: orange;
  height: 1px;
  width: 100%;
`;

export const Info2 = styled.b`
  font-weight: bold;
`;

export const TemperatureWeekly = styled.div`
  display: flex;
  gap: 10px;
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const DayWeek = styled.div`
  font-weight: bold;
`;

export const TemperatureDay = styled.span`
  display: flex;
  font-size: 13px;
  justify-content: center;
  color: orange;
`;

export const Arrow = styled(Logo)<{ small?: boolean }>`
  height: 14px;
  width: auto;
  fill: orange;
  ${({ small }) => small && 'transform: rotate(180deg);'};
`;

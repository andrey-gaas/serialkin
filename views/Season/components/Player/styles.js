import styled from 'styled-components';
import { LIGHT_PRIMARY_COLOR, SECONDARY_COLOR } from '../../../../constants/styles';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 990px) {
    flex-direction: row;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 20px;
  color: #fff;
  background-color: ${LIGHT_PRIMARY_COLOR};
  border-bottom: 1px solid #000;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  & video {
    display: block;
    outline: none;
  }

  @media (min-width: 990px) {
    border: 1px solid #000;
  }
`;

export const SeriesContainerDesctop = styled.div`
  display: none;
  margin-left: 20px;
  width: 500px;
  max-height: 470px;
  border: 1px solid #000;

  @media (min-width: 990px) {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
`;

export const SeriesContainerMobile = styled.div`
  display: block;
  margin-top: 20px;

  @media (min-width: 990px) {
    display: none;
  }
`;

export const SeriesList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export const Seria = styled.div`
  padding: 8px 20px;

  background: ${props => props.active ? '#1a143b': LIGHT_PRIMARY_COLOR};
  border-bottom: 1px solid #000;
  cursor: pointer;
  transition: .1s;

  &:hover {
    background: ${SECONDARY_COLOR};
  }
`;

export const SeriaText = styled.span`
  font-size: 15px;
  color: #fff;
`;

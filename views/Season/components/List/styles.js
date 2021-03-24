import styled from 'styled-components';
import { LIGHT_PRIMARY_COLOR, SECONDARY_COLOR } from '../../../../constants/styles';

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

export const Text = styled.span`
  font-size: 15px;
  color: #fff;
`;
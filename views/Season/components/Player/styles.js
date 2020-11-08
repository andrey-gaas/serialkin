import styled from 'styled-components';
import { LIGHT_PRIMARY_COLOR } from '../../../../constants/styles';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Header = styled.div`
  padding: 5px 20px;
  font-size: 22px;
  color: #fff;
  background-color: ${LIGHT_PRIMARY_COLOR};
`;

export const PlayerContainer = styled.div`
  & video {
    outline: none;
  }
`;

import styled from 'styled-components';
import { SECONDARY_COLOR, LIGHT_PRIMARY_COLOR } from '../../../../constants/styles';

export const Root = styled.section`
  margin-top: 20px;
  
  @media (min-width: 990px) {
    margin-top: 0;
    margin-left: 20px;
    width: 350px;
  }
`;

export const Title = styled.h6`
  margin: 0;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: normal;
  color: #fff;
  background-color: ${LIGHT_PRIMARY_COLOR};
  border: 1px solid #000;
`;

export const Poster = styled.img`
  width: 100%;
`;

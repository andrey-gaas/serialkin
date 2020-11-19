import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../constants/styles';

export const Root = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 0 20px;

  @media (min-width: 990px) {
    margin: 0;
  }
`;

export const Link = styled.a`
  color: #fff;
  cursor: pointer;
  transition: .3s;

  &:hover {
    color: ${SECONDARY_COLOR};
  }
`;

export const Slash = styled.span`
  margin: 0 8px;
  font-size: 20px;
  color: #fff;
`;

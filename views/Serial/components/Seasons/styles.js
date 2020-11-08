import styled from 'styled-components';
import { SECONDARY_COLOR, LIGHT_PRIMARY_COLOR } from '../../../../constants/styles';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Header = styled.header`
  padding: 10px 20px;
  font-size: 20px;
  color: #fff;
  background-color: ${SECONDARY_COLOR};
`;

export const SeasonContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 15px 20px;
  font-size: 20px;
  color: #fff;
  background-color: ${LIGHT_PRIMARY_COLOR};
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  cursor: pointer;
  transition: .3s;

  @media (min-width: 990px) {
    border: 1px solid #000;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Episodes = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;

export const ViewButton = styled.span`
  transition: .3s;  
  &:hover {
    color: ${SECONDARY_COLOR};
  }
`;

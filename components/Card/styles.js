import styled from 'styled-components';
import { LIGHT_PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/styles';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  background: ${LIGHT_PRIMARY_COLOR};
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (min-width: 990px) {
    flex-direction: row;
    margin: 20px 1%;
    width: 48%;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: 990px) {
    width: 50%;
  }
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 22px;
  text-align: center;
  color: #fff;
  transition: .3s;

  &:hover {
    color: ${SECONDARY_COLOR};
  }

  @media (min-width: 990px) {
    text-align: left;
  }
`;

export const TextContainer = styled.div`
  margin-top: 10px;
`;

export const Text = styled.span`
  margin-left: ${props => props.marginLeft ? '5px' : 0};
  font-size: 15px;
  color: #fff;
`;

import styled from 'styled-components';
import { LIGHT_PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/styles';

export const Root = styled.div`
  display: flex;
  margin-top: 20px;
  background: ${LIGHT_PRIMARY_COLOR};
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (min-width: 990px) {
    margin: 20px 1%;
    width: 48%;
  }
`;

export const Image = styled.img`
  width: 50%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 22px;
  color: #fff;
  transition: .3s;

  &:hover {
    color: ${SECONDARY_COLOR};
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

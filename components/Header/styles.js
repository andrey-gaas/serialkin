import styled from 'styled-components';
import { LIGHT_PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/styles';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 0;
  background: ${LIGHT_PRIMARY_COLOR};
  z-index: 999999;

  @media (max-width: 989px) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h6`
  margin: 0;
  font-family: "Exo 2";
  font-size: 30px;
  line-height: 30px;
  font-weight: normal;
  text-decoration: none;
  color: #fff;

  @media (max-width: 990px) {
    margin-left: 15px;
  }
`;

export const Logo = styled.div`
  margin-left: 10px;
  margin-top: 3px;
  width: 50px;
  height: 50px;
  background-image: url('/images/logo.png');
  background-size: 50px;

  @media (max-width: 989px) {
    display: none;
  }
`;

export const Subtitle = styled.span`
  margin-left: 14px;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  text-transform: uppercase;

  @media (max-width: 989px) {
    display: none;
  }
`;

export const Grow = styled.div`
  flex-grow: 1;
`;

export const MenuLink = styled.a`
  color: #fff;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${SECONDARY_COLOR}
  }
`;

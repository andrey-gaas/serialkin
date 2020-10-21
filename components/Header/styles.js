import styled from 'styled-components';
import { MD } from '../../constants/media';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  background: url('/images/backgrounds/header.png') top center repeat-x #2a3e52;
  z-index: 999999;
`;

export const Title = styled.a`
  font-family: "Exo 2";
  font-size: 30px;
  line-height: 30px;
  text-decoration: none;
  color: #fff;
`;

export const Logo = styled.div`
  display: none;

  @media ${MD} {
    display: block;
    margin-left: 10px;
    margin-top: 3px;
    width: 50px;
    height: 50px;
    background-image: url('/images/logo.png');
    background-size: 50px;
  }
`;

export const Subtitle = styled.span`
  display: none;

  @media ${MD} {
    display: block;
    margin-left: 14px;
    font-size: 24px;
    line-height: 24px;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const Grow = styled.div`
  flex-grow: 1;
`;

export const MobileMenuButton = styled.button`
  margin-top: 3px;
  padding: 0;
  margin-right: 20px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  @media ${MD} {
    display: none;
  }
`;

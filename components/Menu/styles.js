import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../constants/styles';

export const Nav = styled.nav`
  margin-top: 30px;
  margin-left: 30px;
  padding: 20px 30px;
  background-color: ${PRIMARY_COLOR};
  transition-duration: .3s;
  z-index: 9999;

  @media (min-width: 1500px) {
    width: 350px;
  }


  @media (min-width: 990px) and (max-width: 1499px) {
    width: 350px;
  }

  @media (max-width: 989px) {
    position: fixed;
    height: 100%;
    margin-top: 53px;
    margin-left: ${props => props.open ? 0 : '-300px'};
    width: 300px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin: 10px 20px;
  list-style: none;

  a {
    font-size: 17px;
    color: #fff;
    transition-duration: .3s;
    text-decoration: none;

    &:hover {
      color: #a8bfd4;
    }
  }
`;

export const Title = styled.li`
  list-style: none;
  margin: 20px 0;
  font-size: 22px;
  color: #6c98c3;
`;

export const Text = styled.span`
  margin-left: 10px;
`;

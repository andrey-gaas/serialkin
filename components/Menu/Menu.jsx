import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { thList } from 'react-icons-kit/fa/thList';
import { hashtag } from 'react-icons-kit/fa/hashtag'
import { Nav, List, ListItem, Title, Text } from './styles';

function Menu({ switchMenu, isOpen }) {
  console.log(isOpen);
  return (
    <Nav open={isOpen}>
      <List>
        <Title>
          <Icon size={27} icon={thList} />
          <Text>Меню</Text>
        </Title>
        <ListItem>
          <Link href="/">
            <a onClick={() => switchMenu()}>
              Главная страница
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/serials">
            <a onClick={() => switchMenu()}>
              Сериалы
            </a>
          </Link>
        </ListItem>
        <Title>
          <Icon size={27} icon={hashtag} />
          <Text>Теги</Text>
        </Title>
        <ListItem>
          <Link href="/fox">
            <a onClick={() => switchMenu()}>
              #FOX
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/cc">
            <a onClick={() => switchMenu()}>
              #COMEDY CENTRAL
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/cn">
            <a onClick={() => switchMenu()}>
              #CARTOON NETWORK
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/netflix">
            <a onClick={() => switchMenu()}>
              #NETFLIX
            </a>
          </Link>
        </ListItem>
      </List>
    </Nav>
  );
}

Menu.propTypes = {
  isOpen:     PropTypes.bool.isRequired,
  switchMenu: PropTypes.func.isRequired,
};

export default Menu;

import Link from 'next/link';
import { Container } from '@material-ui/core';
import {
  Header as HeaderComponent,
  Title,
  Logo,
  Subtitle,
  InnerContainer,
  Grow,
  MenuLink,
} from './styles';

function Header() {
  return (
    <HeaderComponent>
      <Container>
        <InnerContainer>
          <Title>SERIALKIN</Title>
          <Logo />
          <Subtitle>Сериалы Онлайн</Subtitle>
          <Grow />
          <Link href="/">
            <MenuLink>
              Главная страница
            </MenuLink>
          </Link>
        </InnerContainer>
      </Container>
    </HeaderComponent>

  );
}

export default Header;

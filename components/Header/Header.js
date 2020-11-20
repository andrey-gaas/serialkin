import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/fa/home';
import { Container } from '../index';
import {
  Header as HeaderComponent,
  Title,
  Logo,
  Subtitle,
  InnerContainer,
  Grow,
  MenuLink,
  MobileLink,
} from './styles';

function Header() {
  return (
    <HeaderComponent>
      <Container withoutMargin>
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
          <Link href="/">
            <MobileLink>
              <Icon icon={home} size={24} />
            </MobileLink>
          </Link>
        </InnerContainer>
      </Container>
    </HeaderComponent>

  );
}

export default Header;

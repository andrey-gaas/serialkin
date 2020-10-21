import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { th } from 'react-icons-kit/fa/th';
import {
  Header as HeaderComponent,
  Title,
  Logo,
  Subtitle,
  Grow,
  MobileMenuButton,
} from './styles';

function Header() {
  return (
    <HeaderComponent>
      <MobileMenuButton>
        <Icon size={28} icon={th} />
      </MobileMenuButton>
      <Link href="/">
        <Title>SERIALKIN</Title>
      </Link>
      <Logo />
      <Subtitle>Сериалы Онлайн</Subtitle>
      <Grow />
      {/* <div className="auth-buttons">
        <Button>Регистрация</Button>
        <Button green className="header-button">Вход</Button>
      </div> */}
    </HeaderComponent>

  );
}

export default Header;

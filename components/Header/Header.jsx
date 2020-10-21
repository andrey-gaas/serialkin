import Link from 'next/link';
import {
  Header as HeaderComponent,
  Title,
  Logo,
  Subtitle,
  Grow,
} from './styles';

function Header() {
  return (
    <HeaderComponent>
      {/* <Button className="button-icon" onClick={() => switchMenu()}>
        <div>
          <Icon size={30} icon={th} />
        </div>
      </Button> */}
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

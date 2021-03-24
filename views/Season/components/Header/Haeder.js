import { Root } from './styles';

function Header({ children, onClick }) {
  return (
    <Root onClick={onClick || null}>{children}</Root>
  );
}

export default Header;

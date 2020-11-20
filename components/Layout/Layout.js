import { Root } from './styles';
import { Header } from '..'

function Layout({ children }) {
  return (
    <Root>
      <Header />
      {children}
    </Root>
  );
}

export default Layout;

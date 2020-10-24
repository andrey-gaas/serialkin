import PropTypes from 'prop-types';
import HeaderComponent from './Header';

function Header({ switchMenu }) {
  return <HeaderComponent switchMenu={switchMenu} />;
}

Header.propTypes = {
  switchMenu: PropTypes.func.isRequired,
};

export default Header;

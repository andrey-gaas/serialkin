import PropTypes from 'prop-types';
import MenuComponent from './Menu';

function Menu({ isOpen, switchMenu }) {
  return <MenuComponent isOpen={isOpen} switchMenu={switchMenu}/>;
}

Menu.propTypes = {
  isOpen:     PropTypes.bool.isRequired,
  switchMenu: PropTypes.func.isRequired,
};

export default Menu;

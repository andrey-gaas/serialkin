import PropTypes from 'prop-types';
import { Root, TitleContainer, Poster } from './styles';

function Header({ title, image }) {
  return (
    <Root>
      <TitleContainer>{title}</TitleContainer>
      <Poster src={image} alt={title} />
    </Root>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Header;

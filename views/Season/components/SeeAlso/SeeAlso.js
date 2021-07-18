import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Root, Title, Poster } from './styles';

function SeeAlso({ list }) {
  return (
    <Root>
      <Title>Смотрите также:</Title>
      {
        list.map(serial => (
          <NextLink key={serial.id} href={`/serial/${serial.link}`}>
            <a>
              <Poster src={serial.poster} alt={serial.title} />
            </a>
          </NextLink>
        ))
      }
    </Root>
  );
}

SeeAlso.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SeeAlso;

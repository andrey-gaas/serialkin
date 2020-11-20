import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Root,
  Image,
  Content,
  Title,
  TextContainer,
  Text,
  LinkContainer,
} from './styles';

function Card({ image, title, seasons, year, status, link }) {
  return (
    <Root>
      <Link href={`/serial/${link}`}>
        <LinkContainer>
          <Image src={image} />
          <Content>
            <Title>{title}</Title>
            <TextContainer>
              <Text>Сезонов:</Text>
              <Text marginLeft>{seasons}</Text>
            </TextContainer>
            <TextContainer>
              <Text>Год:</Text>
              <Text marginLeft>{year}</Text>
            </TextContainer>
            <TextContainer>
              <Text>Статус:</Text>
              <Text marginLeft>{status}</Text>
            </TextContainer>
          </Content>
        </LinkContainer>
      </Link>
    </Root>
  );
}

Card.propTypes = {
  image:   PropTypes.string.isRequired,
  title:   PropTypes.string.isRequired,
  seasons: PropTypes.number.isRequired,
  year:    PropTypes.string.isRequired,
  status:  PropTypes.string.isRequired,
  link:    PropTypes.string.isRequired,
};

export default Card;

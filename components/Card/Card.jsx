import PropTypes from 'prop-types';
import { Root, Image, Content, Title, TextContainer, Text } from './styles';

function Card({ image, title, seasons, year, status }) {
  return (
    <Root>
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
    </Root>
  );
}

Card.propTypes = {
  image:   PropTypes.string.isRequired,
  title:   PropTypes.string.isRequired,
  seasons: PropTypes.number.isRequired,
  year:    PropTypes.string.isRequired,
  status:  PropTypes.string.isRequired,
};

export default Card;

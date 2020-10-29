import PropTypes from 'prop-types';
import { Root, Image, Content, Title, TextContainer, Text } from './styles';

function Card() {
  return (
    <Root>
      <Image src="/images/posters/the-boys.jpg" />
      <Content>
        <Title>Игра пристолов игра пристолов</Title>
        <TextContainer>
          <Text>Сезонов:</Text>
          <Text marginLeft>2</Text>
        </TextContainer>
        <TextContainer>
          <Text>Год выхода:</Text>
          <Text marginLeft>2018</Text>
        </TextContainer>
        <TextContainer>
          <Text>Статус:</Text>
          <Text marginLeft>Идет</Text>
        </TextContainer>
      </Content>
    </Root>
  );
}

Card.propTypes = {};

export default Card

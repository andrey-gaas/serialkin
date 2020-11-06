import PropTypes from 'prop-types';
import { Container, Card, Loader } from '../../components';
import { Row } from './styles';

function Home({ serials }) {
  return (
    <Container>
      <Row>
        {
          serials.map(
            serial => (
              <Card
                key={serial.id}
                image={serial.image}
                title={serial.title}
                seasons={serial.seasons}
                year={`${serial.yearFrom}${serial.yearTo ? ` - ${serial.yearTo}` : ''}`}
                status={serial.status}
                link={serial.link}
              />
            )
          )
        }
      </Row>
    </Container>
  );
}

Home.propTypes = {
  serials: PropTypes.array.isRequired,
};

export default Home;

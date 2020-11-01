import PropTypes from 'prop-types';
import { Container, Card, Loader } from '../../components';

function Home({ serials }) {
  return (
    <Container>
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
            />
          )
        )
      }
    </Container>
  );
}

Home.propTypes = {
  serials: PropTypes.array.isRequired,
};

export default Home;

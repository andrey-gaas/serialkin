import PropTypes from 'prop-types';
import { Container, Breadcrumbs } from '../../components';
import { Player } from './components';

function Season({ breadcrumbs, seria, switchSeria, ...rest }) {
  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
      <Player
        serial={seria.serial}
        url={seria.link}
        switchSeria={switchSeria}
        title={seria.title}
        active={seria.id}
        {...rest}
      />
    </Container>
  );
}

Season.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  series:      PropTypes.array.isRequired,
  seria:       PropTypes.object.isRequired,
};

export default Season;

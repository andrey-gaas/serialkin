import PropTypes from 'prop-types';
import PlayerReact from 'react-player';
import { Root, Header, PlayerContainer } from './styles';

function Player({ serial, url }) {
  return (
    <Root>
      <Header>{serial}</Header>
      <PlayerContainer>
        <PlayerReact
          url={url}
          width="100%"
          height="100%"
          controls
        />
      </PlayerContainer>
    </Root>
  );
}

Player.propTypes = {
  serial: PropTypes.string.isRequired,
  url:    PropTypes.string.isRequired,
};

export default Player;

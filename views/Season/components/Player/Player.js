import PropTypes from 'prop-types';
import PlayerReact from 'react-player';

function Player({ url }) {
  return (
    <PlayerReact
      url={url}
      width="100%"
      height="100%"
      controls
    />
  );
}

Player.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Player;

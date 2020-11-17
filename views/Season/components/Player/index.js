import { useState } from 'react';
import PlayerComponent from './Player';

function Player(props) {
  const [isOpen, setOpen] = useState(false);
  const switchMenu = () => setOpen(!isOpen);

  return (
    <PlayerComponent
      {...props}
      isOpenMenu={isOpen}
      switchMenu={switchMenu}
    />
  );
}

export default Player;

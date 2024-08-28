// Components/Player.js
import React from 'react';

export const Player = ({ player, editPlayer, toggleComplete }) => {
  const handleClick = () => {
    editPlayer(player.id);
  };

  const positionStyle = {
    position: 'absolute',
    top: `${player.position.y}%`,
    left: `${player.position.x}%`,
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px black',
    cursor: 'pointer',
  };

  return (
    <div style={positionStyle} onClick={handleClick}>
      ⚽ {player.name}
    </div>
  );
};

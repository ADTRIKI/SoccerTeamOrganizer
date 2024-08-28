// Components/FootballField.js
import React from 'react';

export const FootballField = ({ players, editPlayer }) => {
  const fieldStyle = {
    width: '600px',
    height: '400px',
    backgroundColor: '#4CAF50',
    border: '5px solid white',
    position: 'relative',
    margin: '20px auto',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const lineStyle = {
    position: 'absolute',
    width: '100%',
    height: '2px',
    backgroundColor: 'white',
  };

  const circleStyle = {
    position: 'absolute',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '2px solid white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={fieldStyle}>
      <div style={circleStyle}></div>
      <div style={{ ...lineStyle, top: '50%', transform: 'translateY(-50%)' }}></div>
     
      
      
      {players.map((player) => (
        <div
          key={player.id}
          style={{
            position: 'absolute',
            top: `${player.position.y}%`,
            left: `${player.position.x}%`,
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px black',
            cursor: 'pointer',
          }}
          onClick={() => editPlayer(player.id)}
        >
          ⚽ {player.name}
        </div>
      ))}
    </div>
  );
};

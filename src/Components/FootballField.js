// Components/FootballField.js
import React from 'react';

export const FootballField = ({ players, editPlayer, deletePlayer }) => {
  const fieldContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centre le terrain horizontalement
    alignItems: 'center', // Centre le terrain verticalement si nécessaire
    marginTop: '20px',
  };

  const fieldStyle = {
    width: '800px',
    height: '500px',
    backgroundColor: '#4CAF50', 
    border: '5px solid white',  
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const lineStyleHorizontal = {
    position: 'absolute',
    width: '100%',
    height: '2px',
    backgroundColor: 'white',
  };

  const lineStyleVertical = {
    position: 'absolute',
    width: '2px', 
    height: '100%',
    backgroundColor: 'white',
  };

  const goalBoxStyle = {
    position: 'absolute',
    width: '100px',
    height: '150px',
    border: '2px solid white',
  };

  const penaltyBoxStyle = {
    position: 'absolute',
    width: '200px',
    height: '300px',
    border: '2px solid white',
  };

  const circleStyle = {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '2px solid white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={fieldContainerStyle}>
      <div style={fieldStyle}>
        {/* Cercle central */}
        <div style={circleStyle}></div>


        {/* Ligne de mi-terrain (verticale) */}
        <div style={{ ...lineStyleVertical, left: '50%', transform: 'translateX(-50%)' }}></div>

        {/* Surfaces de réparation */}
        <div style={{ ...penaltyBoxStyle, left: '0', top: 'calc(50% - 150px)' }}></div>
        <div style={{ ...penaltyBoxStyle, right: '0', top: 'calc(50% - 150px)' }}></div>

        {/* Rectangles des cages de but */}
        <div style={{ ...goalBoxStyle, left: '0', top: 'calc(50% - 75px)' }}></div>
        <div style={{ ...goalBoxStyle, right: '0', top: 'calc(50% - 75px)' }}></div>

        {/* Lignes de but */}
        <div style={{ ...lineStyleHorizontal, width: '2px', height: '100%', left: '0' }}></div>
        <div style={{ ...lineStyleHorizontal, width: '2px', height: '100%', right: '0' }}></div>

        {/* Affichage des joueurs avec couleur de texte selon l'équipe */}
        {players.map((player) => (
          <div
            key={player.id}
            style={{
              position: 'absolute',
              top: `${player.position.y}%`,
              left: `${player.position.x}%`,
              transform: 'translate(-50%, -50%)',
              color: player.team === 'red' ? 'red' : 'blue',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px black',
              cursor: 'pointer',
            }}
            onClick={() => editPlayer(player.team, player.id)}
          >
            ⚽ {player.name}
          </div>
        ))}
      </div>
    </div>
  );
};

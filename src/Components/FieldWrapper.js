// Components/FieldWrapper.js
import React, { useState } from 'react';
import { PlayerForm } from './PlayerForm';
import { FootballField } from './FootballField';
import { v4 as uuidv4 } from 'uuid';
import { EditPlayerForm } from './EditPlayerForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const FieldWrapper = () => {
  const [players, setPlayers] = useState([]);

  const addPlayer = (playerName) => {
    if (players.length < 5) {
      const newPlayer = {
        id: uuidv4(),
        name: playerName,
        position: assignPosition(players.length),
        completed: false,
        isEditing: false,
      };
      setPlayers([...players, newPlayer]);
    } else {
      alert('Maximum 5 players allowed!');
    }
  };

  const assignPosition = (index) => {
    const positions = [
      { x: 50, y: 90 },  // Gardien
      { x: 20, y: 70 },  // Défenseur gauche
      { x: 50, y: 70 },  // Défenseur centre
      { x: 80, y: 70 },  // Défenseur droit
      { x: 50, y: 30 },  // Attaquant
    ];
    return positions[index];
  };

  const deletePlayer = (id) => setPlayers(players.filter((player) => player.id !== id));

  const editPlayer = (id) => {
    setPlayers(
      players.map((player) =>
        player.id === id ? { ...player, isEditing: !player.isEditing } : player
      )
    );
  };

  const editPlayerName = (name, id) => {
    setPlayers(
      players.map((player) =>
        player.id === id ? { ...player, name, isEditing: false } : player
      )
    );
  };

  return (
    <div className="FieldWrapper">
      <h1>Football Team Setup</h1>
      <PlayerForm addPlayer={addPlayer} />
      <FootballField players={players} editPlayer={editPlayer} />
      {players.map((player) =>
        player.isEditing ? (
          <div key={player.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <EditPlayerForm editPlayer={editPlayerName} player={player} />
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrash}
              onClick={() => deletePlayer(player.id)}
              style={{ color: '#fff', cursor: 'pointer' }} // Blanc et aligné
            />
          </div>
        ) : null
      )}
    </div>
  );
};

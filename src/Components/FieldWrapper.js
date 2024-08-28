// Components/FieldWrapper.js
import React, { useState } from 'react';
import { PlayerForm } from './PlayerForm';
import { FootballField } from './FootballField';
import { v4 as uuidv4 } from 'uuid';
import { EditPlayerForm } from './EditPlayerForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const FieldWrapper = () => {
  const [teams, setTeams] = useState({
    red: { players: [] },
    blue: { players: [] },
  });

  const addPlayer = (team, playerName) => {
    if (teams[team].players.length < 5) {
      const newPlayer = {
        id: uuidv4(),
        name: playerName,
        position: assignPosition(teams[team].players.length, team),
        team: team,
        isEditing: false,
      };

      setTeams({
        ...teams,
        [team]: {
          players: [...teams[team].players, newPlayer],
        },
      });
    } else {
      alert('Maximum 5 players allowed per team!');
    }
  };

  const assignPosition = (index, team) => {
    // Différentes positions pour les équipes rouges et bleues
    const redPositions = [
      { x: 10, y: 50 },  // Gardien rouge au centre, près du but
      { x: 25, y: 30 },  // Défenseur gauche rouge
      { x: 25, y: 50 },  // Défenseur centre rouge
      { x: 25, y: 70 },  // Défenseur droit rouge
      { x: 40, y: 50 },  // Attaquant rouge, plus avancé
    ];
  
    const bluePositions = [
      { x: 90, y: 50 },  // Gardien bleu au centre, près du but opposé
      { x: 75, y: 30 },  // Défenseur gauche bleu
      { x: 75, y: 50 },  // Défenseur centre bleu
      { x: 75, y: 70 },  // Défenseur droit bleu
      { x: 60, y: 50 },  // Attaquant bleu, plus avancé
    ];

    return team === 'red' ? redPositions[index] : bluePositions[index];
  };

  const deletePlayer = (team, id) => {
    setTeams({
      ...teams,
      [team]: {
        players: teams[team].players.filter((player) => player.id !== id),
      },
    });
  };

  const editPlayer = (team, id) => {
    setTeams({
      ...teams,
      [team]: {
        players: teams[team].players.map((player) =>
          player.id === id ? { ...player, isEditing: !player.isEditing } : player
        ),
      },
    });
  };

  const editPlayerName = (team, name, id) => {
    setTeams({
      ...teams,
      [team]: {
        players: teams[team].players.map((player) =>
          player.id === id ? { ...player, name, isEditing: false } : player
        ),
      },
    });
  };

  return (
    <div className="FieldWrapper">
      <h1>Football Team Setup</h1>
      {/* Formulaires pour ajouter des joueurs dans chaque équipe */}
      <PlayerForm addPlayer={(name) => addPlayer('red', name)} teamColor="red" />
      <PlayerForm addPlayer={(name) => addPlayer('blue', name)} teamColor="blue" />
      
      <FootballField
        players={[...teams.red.players, ...teams.blue.players]} // Combiner les joueurs des deux équipes
        editPlayer={(team, id) => editPlayer(team, id)}
        deletePlayer={(team, id) => deletePlayer(team, id)}
      />

      {['red', 'blue'].map((team) =>
        teams[team].players.map((player) =>
          player.isEditing ? (
            <div key={player.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <EditPlayerForm editPlayer={(name) => editPlayerName(team, name, player.id)} player={player} />
              <FontAwesomeIcon
                className="delete-icon"
                icon={faTrash}
                onClick={() => deletePlayer(team, player.id)}
                style={{ color: '#fff', cursor: 'pointer' }}
              />
            </div>
          ) : null
        )
      )}
    </div>
  );
};

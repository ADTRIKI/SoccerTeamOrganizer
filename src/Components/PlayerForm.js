// Components/PlayerForm.js
import React, { useState } from 'react';

export const PlayerForm = ({ addPlayer, teamColor }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(value);
    setValue('');
  };

  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`player-input ${teamColor}`}
        value={value}
        placeholder={`Add player to ${teamColor} team`}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="player-btn">Add Player</button>
    </form>
  );
};

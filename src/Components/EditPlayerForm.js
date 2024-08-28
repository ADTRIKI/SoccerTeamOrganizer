// Components/EditPlayerForm.js
import React, { useState } from 'react';

export const EditPlayerForm = ({ editPlayer, player }) => {
  const [value, setValue] = useState(player.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPlayer(value, player.id);
  };

  return (
    <form onSubmit={handleSubmit} className="PlayerForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="player-input"
        placeholder="Update player name"
      />
      <button type="submit" className="player-btn">Update Player</button>
    </form>
  );
};

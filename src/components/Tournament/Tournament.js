// src/components/Tournament.js
import './Tournament.scss';
import React from 'react';
import { Round } from '../Round/Round';

const Tournament = ({ tournament }) => {
  const { name, location, date, matches } = tournament;

  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>{location}, {date}</h2>
      <div className="tournament-bracket tournament-bracket--rounded">
        {matches.map((round, index) => (
          <Round key={index} roundTitle={round.roundTitle} matches={round.matches} />
        ))}
      </div>
    </div>
  );
};

export default Tournament;

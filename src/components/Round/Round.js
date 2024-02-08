import React from 'react';
import { Match } from '../Match/Match';

export const Round = ({ roundTitle, matches }) => {
  return (
    <div class={`
      tournament-bracket__round
      tournament-bracket__round--${
        roundTitle
          .toLowerCase()
          .replace(' ', '-')
      }
    `}>
      <h3 className="tournament-bracket__round-title">
        {roundTitle}
      </h3>
      <ul className="tournament-bracket__list">
        {matches.map((match, index) => (
          <Match key={index} match={match} />
        ))}
      </ul>
    </div>
  );
}
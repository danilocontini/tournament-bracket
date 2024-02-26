import React from 'react';
import { Match } from '../Match/Match';
import './Round.scss';

export const Round = React.memo(({ matches, className }) => {
  return (
    <div className={`round ${className}`}>
      <ul className="matches">
        {matches?.map((match, index) => (
          <Match
            key={`match-${index}`}
            tabId={index}
            fighters={match.fighters} />
        ))}
      </ul>
    </div>
  );
});
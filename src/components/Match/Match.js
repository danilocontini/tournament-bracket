// src/components/Bracket.js
import React from 'react';
import { Fighter } from '../Fighter/Fighter';
import './Match.scss';

export const Match = ({ tabId, fighters }) => {
  return (
    <>
      {fighters?.map((fighter, index) => (
        <li className="match" tabIndex={tabId}>
          <Fighter key={`fighter-${index}`} {...fighter} />
        </li>
      ))}
    </>
  );
};
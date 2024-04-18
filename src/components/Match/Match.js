// src/components/Bracket.js
import React from 'react';
import { Fighter } from '../Fighter/Fighter';
import './Match.scss';

export const Match = React.memo(({ tabId, fighters }) => {
  return (
    <>
      {fighters?.map((fighter, index) => (
        <li key={`fighter-${index}`} className="match" tabIndex={tabId}>
          <Fighter {...fighter} />
        </li>
      ))}
    </>
  );
}, (prevProps, nextProps) => {
  return (prevProps.tabId === nextProps.tabId) && (prevProps.fighters === nextProps.fighters);
});
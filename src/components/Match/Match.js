// src/components/Bracket.js
import React from 'react';
import './Match.scss';
import { Fighter } from '../Fighter/Fighter';

export const Match = ({ match }) => {
  const { fighters, winner } = match;
  const date = new Date(match.date).toLocaleDateString('pt-BR');
  return (
    <li className="tournament-bracket__item">
      <div className="tournament-bracket__match" tabIndex="0">
        <table className="tournament-bracket__table">
          <caption class="tournament-bracket__caption">
            <time datetime={date}>{date}</time>
          </caption>
          <tbody className="tournament-bracket__content">
            {fighters.map((fighter, index) => (
              <tr key={index} className={`tournament-bracket__fighter ${fighter === winner ? 'tournament-bracket__fighter--winner' : ''}`}>
                <td className="tournament-bracket__team">
                  <Fighter {...fighter} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </li>
  );
};
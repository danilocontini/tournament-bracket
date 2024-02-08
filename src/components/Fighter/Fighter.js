import React from 'react';

export const Fighter = ({ name, team, weightClass, beltRank }) => {
  return (
    <div className="tournament-bracket__fighter">
      <div className="tournament-bracket__team">
        <img
          src={team.logo}
          alt={team.name}
          className="tournament-bracket__logo"
        />
        <div className="tournament-bracket__fighter-name">{name}</div>
      </div>
      <div className="tournament-bracket__details">
        <div className="tournament-bracket__weight-class">
          Categoria: {weightClass}
        </div>
        <div className="tournament-bracket__belt-rank">
          Faixa: {beltRank}
        </div>
      </div>
    </div>
  );
}
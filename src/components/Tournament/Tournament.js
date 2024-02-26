// src/components/Tournament.js
import React from 'react';
import { Round } from '../Round/Round';
import './Tournament.scss';

const Tournament = ({ tournament }) => {
  const {
    name,
    location,
    date,
    gender,
    weightClass,
    fighters,
    ageClass
  } = tournament;
  const dateObj = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = dateObj.toLocaleDateString('pt-BR', options);
  const [rounds, setRounds] = React.useState();

  const buildStructure = React.useCallback((fighterList) => {
    const tournament = { rounds: [] };
    const teamA = [];
    const teamB = [];

    fighterList.forEach(fighter => {
      if (fighter.id % 2 !== 0) {
        teamA.push(fighter);
      } else {
        teamB.push(fighter);
      }
    })

    const decrement = (value) => {
      for (let i = value/2; i >= 1; i = i/2) {
        tournament.rounds.push({ matches: new Array(i).fill({ fighters: [{ id: null }] }), className: 'left-side' })
      }
    }

    const increment = (value) => {
      for (let i = 1; i <= value/2; i = i*2) {
        tournament.rounds.push({ matches: new Array(i).fill({ fighters: [{ id: null }] }), className: 'right-side'})
      }
    }
    const roundA = teamA.map((fighter, index) => {
      if (index % 2 === 0) {
        return ({ fighters: [fighter, teamA[index + 1]] });
      }
      return false;
    }).filter(Boolean);
    const roundB = teamB.map((fighter, index) => {
      if (index % 2 === 0) {
        return ({ fighters: [fighter, teamB[index + 1]] });
      }
      return false;
    }).filter(Boolean);
    tournament.rounds.push({ matches: roundA, className: 'left-side'});
    decrement(teamA.length);
    tournament.rounds.push({ matches: new Array(1).fill({ fighters: [{ id: null }] }), className: 'winner'})
    increment(teamB.length);
    tournament.rounds.push({ matches: roundB, className: 'right-side'});
    return tournament;
  }, []);

  React.useEffect(() => {
    const structure = buildStructure(fighters);
    setRounds(structure.rounds);
    return () => {}
  }, [fighters, buildStructure]);

  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>{location}, {formattedDate}</h2>
      <h3 className="category">Categoria: {gender} - {ageClass} - {weightClass}</h3>
      <div className="rounds">
        {rounds?.map((round, index) => (
          <Round
            key={`round-${index}`}
            matches={round?.matches}
            className={round?.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Tournament;

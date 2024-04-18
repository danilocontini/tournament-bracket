import React from 'react';
import { Round } from '../Round/Round';
import './Tournament.scss';

export const Tournament = () => {
  const [tournament, setTournament] = React.useState({});
  const [rounds, setRounds] = React.useState();

  const buildStructure = React.useCallback((fighterList) => {
    const tournament = { rounds: [] };
    const teamA = [];
    const teamB = [];

    fighterList?.forEach(fighter => {
      if (fighter.id % 2 !== 0) {
        teamA.push(fighter);
      } else {
        teamB.push(fighter);
      }
    })

    const decrement = (value) => {
      for (let i = value/2; i >= 1; i = i/2) {
        tournament?.rounds?.push({ matches: new Array(i).fill({ fighters: [{ id: null }] }), className: 'left-side' })
      }
    }

    const increment = (value) => {
      for (let i = 1; i <= value/2; i = i*2) {
        tournament?.rounds?.push({ matches: new Array(i).fill({ fighters: [{ id: null }] }), className: 'right-side'})
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
    tournament?.rounds?.push({ matches: roundA, className: 'left-side'});
    decrement(teamA.length);
    tournament?.rounds?.push({ matches: new Array(1).fill({ fighters: [{ id: null }] }), className: 'winner'})
    increment(teamB.length);
    tournament?.rounds?.push({ matches: roundB, className: 'right-side'});
    return tournament;
  }, []);

  const fetchTournament = React.useCallback(async () => {
    const response = await fetch('https://nutatami.wiremockapi.cloud/gc/1');
    const data = await response.json();
    setTournament(data);
    debugger;
    const structure = buildStructure(data?.fighters);
    setRounds(structure.rounds);
    return () => {}
  }, [buildStructure]);

  React.useEffect(() => {
    fetchTournament();
    return () => {}
  }, [fetchTournament]);

  return (
    <div className="container">
      <h1>{tournament?.name}</h1>
      <h2>{tournament?.location}, {tournament?.formattedDate}</h2>
      <h3 className="category">Categoria: {tournament?.gender} - {tournament?.ageClass} - {tournament?.weightClass}</h3>
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

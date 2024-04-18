import React from 'react';
import './Fighter.scss';

export const Fighter = React.memo(({ id, name, team }) => {
  return (
    <div className="fighter">
      {name && (
        <>
          <div className='fighter__blanks'>
            <span>Chamadas (1) (2) (3)</span>
            <span>____:____ WO</span>
            <span>KG (   ) OK  (   ) Descl</span>
          </div>
          <div className='fighter__data'>
            <div className='fighter__data-id'>
              {id}
            </div>
            <div className="fighter__data-name">
              {name}
            </div>
            <div className="fighter__data-team">
              {team.name}
            </div>
          </div>
        </>
      )}
    </div>
  );
}, (prevProps, nextProps) => {
  return (prevProps.id === nextProps.id) && (prevProps.name === nextProps.name) && (prevProps.team === nextProps.team);
});
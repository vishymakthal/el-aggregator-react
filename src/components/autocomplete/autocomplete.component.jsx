import React from 'react';

const AutoComplete = ({ hits, currentRefinement, refine }) => (
  <div className='autoComplete'>  
    <ul>
      <input
          type="search"
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        />
      {hits.map(hit => (
        <li key={hit.sofifa_id}>{hit.short_name}</li>
      ))}
    </ul>
  </div>

);

export default AutoComplete;
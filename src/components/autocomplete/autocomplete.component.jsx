import React from 'react';

import './autocomplete.styles.scss';

const AutoComplete = ({ hits, currentRefinement, refine }) => (
  <div className='autoComplete'>  
    <input
          type="search"
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        />
    <div className='searchResults'>      
      {hits.map(hit => (
          <a key={hit.sofifa_id} className='searchResult' href={`/player/${hit.sofifa_id}`}>{hit.short_name.toUpperCase()}</a>
      ))}
    </div>
  </div>

);

export default AutoComplete;
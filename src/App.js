import React, { Component } from 'react';
import algoliasearch from 'algoliasearch';
import {InstantSearch, SearchBox, Hits, Highlight} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  process.env.APP_ID,
  process.env.APP_KEY
);

const Hit = ({ hit }) => (
      <div key={hit.objectID}><h3>{hit.name}</h3><br/><img src={hit.img}/><p>{hit.club}</p></div>
    );


class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>Player Search Test</h1>
        <InstantSearch indexName="players" searchClient={searchClient}>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default App;

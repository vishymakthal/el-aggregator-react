import React from 'react';

import AutoComplete from '../autocomplete/autocomplete.component';

import algoliasearch from 'algoliasearch';
import { connectAutoComplete, InstantSearch } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  
);

const CustomAutoComplete = connectAutoComplete(AutoComplete);

const SearchBox = () => (
        <div className="searchBox">        
            <InstantSearch indexName="players" searchClient={searchClient}>
                <CustomAutoComplete/>
            </InstantSearch>
        </div>
);

export default SearchBox;
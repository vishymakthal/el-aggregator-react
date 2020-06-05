import React from 'react';

import SearchBox from '../../components/searchbox/searchbox.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homePage">
        <h1>EL AGGREGATOR</h1>
            <SearchBox/>                
    </div>
);

export default HomePage;
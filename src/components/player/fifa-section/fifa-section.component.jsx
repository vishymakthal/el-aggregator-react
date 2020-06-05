import React from 'react';

import './fifa-section.styles.scss';

const FifaSection = ({playerData}) => (
    <div className='fifaSection'>
        <h2>FIFA Ratings</h2>
        <div className='ratingsBlock'>
            <span className='overallRating'>
                {playerData.overall}
            </span>
            
            <span className='potentialRating'>
                {playerData.potential}
            </span>
        </div>
    </div>
);

export default FifaSection;
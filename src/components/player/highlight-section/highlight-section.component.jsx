import React from 'react';

import './highlight-section.styles.scss';



function HighlightSection({playerData}) {
    
    const goals = playerData.highlights.goals.map((goal) =>
                    <div className='highlightLink'>
                        <a href={`${goal.link}`} target="blank">{goal.title}</a>
                    </div>
                 );

    return (
        <>
            <div className='highlightSection'>
               <h3> /r/soccer HIGHLIGHTS </h3>
               <ul>
                   {goals}
                </ul> 
            </div>
        </>
    )
}

export default HighlightSection;

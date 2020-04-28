import React from 'react';

import DepthChartRow from '../depthchartrow/depthchartrow.component';
import './depthchart.styles.scss';

const DepthChart = ({formation, squad}) => (
    <div className="depthChart">
        {
        formation.split('-').reverse().map(n => (
            <DepthChartRow slots={parseInt(n)} players={squad} />
        ))
        }
        <DepthChartRow slots={1}/>
    </div>
);

export default DepthChart;
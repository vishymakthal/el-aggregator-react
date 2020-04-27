import React from 'react';

import DepthChartRow from '../depthchartrow/depthchartrow.component';
import './depthchart.styles.scss';

const DepthChart = props => (
    <div className="depthChart">
        {
        props.formation.split('-').reverse().map(n => (
            <DepthChartRow slots={parseInt(n)} />
        ))
        }
        <DepthChartRow slots={1}/>
    </div>
);

export default DepthChart;
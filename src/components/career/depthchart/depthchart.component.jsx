import React from 'react';

import DepthChartRow from '../depthchartrow/depthchartrow.component';

class DepthChart extends React.Component {
    constructor() {
        super();
        
        this.state = {
            formation : [4,4,2]
        }
    }

    render() {
        return(
            <div className="depthChart">
                {
                this.state.formation.reverse().map((n) => (
                    <DepthChartRow slots={n} />
                ))
                }
                <DepthChartRow slots={1}/>
            </div>
        )
    }
}

export default DepthChart;
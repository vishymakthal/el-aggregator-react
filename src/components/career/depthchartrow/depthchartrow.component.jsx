import React from 'react';
import './depthchartrow.styles.scss';
import DepthChartPlayer from '../depthchartplayer/depthchartplayer.component';

class DepthChartRow extends React.Component {
    render()
    {
        const data = {name : 'James Milner', overall : 89, potential : 90}
        const players = []
        for (var i =0; i<this.props.slots; i++) {
            players.push(<DepthChartPlayer player={data}/>)    
        }
        
        return (
            <div className="depthChartRow">
                <ul>
                    {players}
                </ul>
            </div>
        )
    }
}

export default DepthChartRow;
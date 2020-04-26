import React from 'react';

class DepthChartRow extends React.Component {
    render()
    {
        const players = []
        for (var i =0; i<this.props.slots; i++) {
            players.push(<li>player</li>)    
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
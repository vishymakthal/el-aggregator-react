import React from 'react';
import './depthchartplayer.styles.scss';

const DepthChartPlayer = (props) => (
    <div className="depthChartPlayer">
        <tr className="playerRow">
            <td>{props.player.short_name} | {props.player.age} </td>
            <td className="playerOverall">{props.player.overall}</td>
            <td className="playerPotential">{props.player.potential}</td>
        </tr>
    </div>
)

export default DepthChartPlayer;
import React from 'react';
import './depthchartplayer.styles.scss';

const DepthChartPlayer = (props) => (
    <div class="depthChartPlayer">
        <h3>{props.player.name}</h3>
        <p>{props.player.overall} | {props.player.potential}</p>
    </div>
)

export default DepthChartPlayer;
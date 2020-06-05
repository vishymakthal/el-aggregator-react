import React from 'react';

import ProfileSection from '../../components/player/profile-section/profile-section.component';
import FifaSection from '../../components/player/fifa-section/fifa-section.component';

import './playerpage.styles.scss';

class PlayerPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playerData : {},
            bio : ''
        }
    }

    async componentDidMount() {
        fetch(`http://localhost:8080/api/v1/players/${this.props.match.params.id}`, {method: 'GET'})
        .then(response => response.json())
        .then(player => this.setState({playerData : player}));
    }

    render () {

        const playerData = this.state.playerData;
        playerData.id = this.props.match.params.id; 
        playerData.img = `http://localhost:8080/api/v1/images/${this.props.match.params.id}?q=player`;

        return(

            <div className='playerPage'>
                <ProfileSection playerData={playerData} />
                <FifaSection playerData={playerData} />
                {/* <HighlightSection playerName={playerData.short_name} /> */}
            </div>
        )
    }
}

export default PlayerPage;
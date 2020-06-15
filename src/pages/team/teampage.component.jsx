import React from 'react';

class TeamPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name : "",
            players : [],
            id: 0, 
        }
    }

    async componentDidMount() {
        fetch(`http://localhost:8080/api/v1/players/?team=${this.props.match.params.name}`, {method: 'GET'})
            .then(response => response.json())
            .then(players => this.setState({players : players}));
    }

    render () {
        
        const img = `http://localhost:8080/api/v1/images/${this.props.match.params.id}?q=team`;
        const players = Object.keys(this.state.players).map((key, ix) =>
                        <li>{this.state.players[key].short_name}</li>
                    );
        return(
            <div className='teamPage'>
                <h1>Team Page</h1>
                <img src={img}/>
                <ul>
                    {players}
                </ul> 
            </div>
       )
    }
}

export default TeamPage;
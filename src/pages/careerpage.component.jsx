import React from 'react';
import DepthChart from '../components/career/depthchart/depthchart.component';
import FormationSelector from '../components/career/formationselector/formationselector.component';

class CareerPage extends React.Component {
    constructor () {
        super();

        this.state = {
            'currentFormation' :  '4-3-3' 
        }
    }
    
    render() {
        return(
            <div className="careerPage">
                <h1>Career Mode Hub</h1>
                <FormationSelector  handler={e => this.setState({currentFormation : e.target.value}, () => console.log())} />
                <DepthChart formation={this.state.currentFormation}/>
            </div>
        )
    }
}

export default CareerPage;
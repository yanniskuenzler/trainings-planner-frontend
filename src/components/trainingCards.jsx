import React, {Component} from "react";
import TrainingCard from "./trainingCard";

class TrainingCards extends Component {
    state = {
        trainings: [],
        isLoaded: false
    };

    componentDidMount = () => {
        fetch('http://localhost:8080/getTrainings')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    trainings: json,
                    isLoaded: true
                });
            });
    }

    render() {
        return (this.state.isLoaded ? (
            <div>
                {this.state.trainings.map((training, index) => <TrainingCard key={training.id} training={training} />)}
            </div>
        ) : <div>Loading...</div>);

    }
}

export default TrainingCards;
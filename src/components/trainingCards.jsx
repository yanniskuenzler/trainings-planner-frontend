import React, {Component} from "react";
import axios from "axios";
import TrainingCard from "./trainingCard";

class TrainingCards extends Component {
    state = {
        trainings: [],
        isLoaded: false
    };

    componentDidMount = () => {
        const options = {
            method: 'get',
            url: `https://trainings-planner-backend.herokuapp.com/getTrainings`
        }
        axios(options).then(res => {
                const trainings = res.data;
                this.setState({trainings, isLoaded: true});
        });
    }

    handleDeleteTraining = (id) => {
        let trainings = this.state.trainings.filter((training) => training.id !== id);

        const options = {
            method: 'delete',
            url: `https://trainings-planner-backend.herokuapp.com/deleteTraining/${id}`
        }

        axios(options).then(res => {
                this.setState({trainings});
            });
    }

    render() {
        return (this.state.isLoaded ? (
            <div>
                {this.state.trainings.map((training, index) => (
                    <TrainingCard
                        key={training.id}
                        training={training}
                        onDelete={this.handleDeleteTraining} />
                ))}
            </div>
        ) : <div>Loading...</div>);

    }
}

export default TrainingCards;
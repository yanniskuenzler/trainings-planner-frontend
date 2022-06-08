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
            url: `http://localhost:8080/getTrainings`
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
            url: `http://localhost:8080/deleteTraining/${id}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        }

        axios(options).then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({trainings: trainings});
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
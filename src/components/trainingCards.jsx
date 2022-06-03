import React, {Component} from "react";
import axios from "axios";
import TrainingCard from "./trainingCard";

class TrainingCards extends Component {
    state = {
        trainings: [],
        isLoaded: false
    };

    componentDidMount = () => {
        axios.get(`http://localhost:8080/getTrainings`)
            .then(res => {
                const trainings = res.data;
                this.setState({trainings, isLoaded: true});
            });
    }

    handleDeleteTraining = (id) => {
        let trainings = this.state.trainings.filter((training) => training.id !== id);
        this.setState({trainings: trainings});
        axios.delete(`http://localhost:8080/deleteTraining/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (this.state.isLoaded ? (
            <div>
                {this.state.trainings.map((training, index) => <TrainingCard key={training.id} training={training} onDelete={this.handleDeleteTraining} />)}
            </div>
        ) : <div>Loading...</div>);

    }
}

export default TrainingCards;
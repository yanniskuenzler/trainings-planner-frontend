import React, { Component } from 'react';

class TrainingCard extends Component {
    state = {
        id: this.props.training.id,
        date: this.props.training.date,
        weekday: this.props.training.weekday,
        trCategory: this.props.training.trainingCategory,
        duration: this.props.training.duration,
        distance: this.props.training.distance,
        contents: this.props.training.contents
    };

    render() {
        return (
            <div>
                <div className="container w-75 m-auto">
                    <div className={"card m-2 " + this.getCardColor()}>
                        <div className="card-header">
                            {`${this.state.weekday}, ${this.state.date}`}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.trCategory}</h5>
                            <ul>
                                <li>Zeitdauer: {this.state.duration} Minuten</li>
                                <li>Gesamtstrecke: {this.state.distance} Kilometer</li>
                            </ul>
                            <div className="d-flex justify-content-between m-3">
                                <button className="btn btn-primary" data-toggle="collapse" data-target={"#collapseSections" + this.state.id}>Mehr</button>
                                <button className="btn btn-danger float-right">Löschen</button>
                            </div>

                            <div className="collapse" id={"collapseSections" + this.state.id}>
                                {this.state.contents.map((content) => <li key={content.index}>{content.sectionCategory}: {content.value}</li>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getCardColor = () => {
        switch (this.state.trCategory) {
            case "Bahntraining":
                return "bg-light text-dark";
            case "Krafttraining":
                return "bg-light text-dark";
            default:
                return "bg-light text-dark";
        }
    }

}

export default TrainingCard;
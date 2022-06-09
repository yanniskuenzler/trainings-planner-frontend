import React, { Component } from 'react';
import CardSectionField from "./cardSectionField";

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

    convertDate = () => {
        let dateArray = this.state.date.split(/[-T]+/);
        return (dateArray[2] + "." + dateArray[1] + "." + dateArray[0]);
    }
    linkStyle = {
        color: 'black'
    }

    render() {
        return (
            <div>
                <div className="container w-75 m-auto">
                    <div className={"card m-2 " + this.getCardColor()}>
                        <div className="card-header">
                            {`${this.state.weekday}, ${this.convertDate()}`}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.trCategory}</h5>
                            <ul>
                                <li>Zeitdauer: {this.state.duration} Minuten</li>
                            </ul>
                            <div className="container-fluid">
                                <button
                                    type="button"
                                    className="btn btn-danger float-right"
                                    onClick={() => this.props.onDelete(this.state.id)}
                                >
                                    <i className="icon bi-trash3"></i>
                                </button>
                            </div>

                            <div className="collapse" id={"collapseSections" + this.state.id}>
                                <ul className="list-unstyled">
                                    {this.state.contents.map((content, index) => <CardSectionField key={index} content={content}/>)}
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer text-center p-0">
                            <a
                                href="#"
                                data-toggle="collapse"
                                data-target={"#collapseSections" + this.state.id}
                                style={this.linkStyle}
                            >
                                <h3>
                                    <i className="bi bi-list"></i>
                                </h3>

                            </a>
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
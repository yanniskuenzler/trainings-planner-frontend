import React, { Component } from 'react';

class TrainingCard extends Component {
    state = {
        id: "1023984701928734098324",
        date: "23.06.2022",
        weekday: "Monday",
        trCategory: "Bahntraining",
        duration: 20,
        distance: 1.2,
        content: [
            {
                "scCategory": "Laufen",
                "value": "400m",
                "index": "1"
            },
            {
                "scCategory": "Pause",
                "value": "90s",
                "index": "2"
            },
            {
                "scCategory": "Laufen",
                "value": "400m",
                "index": "3"
            },
            {
                "scCategory": "Pause",
                "value": "90s",
                "index": "4"
            },
            {
                "scCategory": "Laufen",
                "value": "400m",
                "index": "5"
            },
            {
                "scCategory": "Pause",
                "value": "90s",
                "index": "6"
            }
        ]
    }

    getCardColor = () => {
        let classes = "";
        switch (this.state.trCategory) {
            case "Bahntraining":
                classes = "bg-primary text-white";
                break;
            case "Krafttraining":
                classes = "bg-secondary text-white";
                break;
            default:
                console.error("Fehler");
        }
        return classes;
    }

    render() {
        return (
            <div>
                <div className="container w-75 m-auto">
                    <div className={"card m-2 " + this.getCardColor()}>
                        <div className="card-header">{`${this.state.weekday}, ${this.state.date}`}</div>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.trCategory}</h5>
                            <ul>
                                <li>Zeitdauer: {this.state.duration} Minuten</li>
                                <li>Gesamtstrecke: {this.state.distance} Kilometer</li>
                            </ul>
                            <div className="d-flex justify-content-between m-3">
                                <button className="btn btn-primary" data-toggle="collapse" data-target="#collapseSections">Mehr</button>
                                <button className="btn btn-danger float-right">Löschen</button>
                            </div>

                            <div className="collapse" id="collapseSections">
                                {this.state.content.map(c => <li>{c.scCategory}: {c.value}</li>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }




}

export default TrainingCard;
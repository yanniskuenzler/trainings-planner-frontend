import React, {Component} from "react";
import axios from "axios";
import CreatorForm from "./creatorForm";
import {validateDate, validateWeekday, validateDuration} from "./validateValues";

class Creator extends Component {
    state = {
        trHeader: {
                trainingCategory: "Bahntraining",
                date: {
                    date: "",
                    weekday: ""
                },
                duration: ""
        },
        sections: [
            {
                value: "",
                category: "Laufen",
                secUUID: crypto.randomUUID()
            }
        ],
        validationIncomplete: false
    }

    handleInputChange = (event) => {
        let name = event.target.name;
        let trHeader = this.state.trHeader;
        if (name === "date" || name === "weekday") {
            trHeader.date[name] = event.target.value;
        } else {
            trHeader[name] = event.target.value;
        }

        this.setState({trHeader});
    }

    handleFieldChange = (event, index) => {
        let sections = [...this.state.sections];
        sections[index][event.target.name] = event.target.value;
        this.setState({sections});
    }

    handleAddField = () => {
        let sections = [...this.state.sections];
        let uuid = crypto.randomUUID();
        sections.push({value: "", category: "Laufen", secUUID: uuid});
        this.setState({sections});
    }

    handleDeleteField = (index) => {
        let sections = this.state.sections.filter((section, i) => i !== index);
        this.setState({sections});
    }

    handleSubmit = () => {
        let date = validateDate(this.state.trHeader.date.date);
        let weekday = validateWeekday(this.state.trHeader.date.weekday);
        let duration = validateDuration(this.state.trHeader.duration);

        if (date !== false && weekday !== false && duration !== false) {
            let json = {
                "date": date,
                "weekday": weekday,
                "trainingCategory": this.state.trHeader.trainingCategory,
                "duration": duration,
                "distance": "10.0",
                "content": []
            };

            this.state.sections.forEach((item) => {
                json.content.push({sectionCategory: item.category, value: item.value});
            });

            const options = {
                method: 'post',
                url: 'http://localhost:8080/addTraining',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                },
                data: json
            }
            axios(options).then(() => {
                console.log("success!");
            });

        } else {
            alert("Du hast ungültige Werte eingegeben. Versuche es erneut.");
        }
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#creatorModal"
                >
                    erstellen
                </button>
                <div
                    className="modal fade"
                    id="creatorModal"
                    tabIndex="-1"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Training erstellen</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <CreatorForm
                                    sections={this.state.sections}
                                    onInputChange={this.handleInputChange}
                                    onFieldChange={this.handleFieldChange}
                                    onDeleteField={this.handleDeleteField}
                                    onAddField={this.handleAddField}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    form="creatorForm"
                                    className="btn btn-primary"
                                    onClick={this.handleSubmit}
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Creator;
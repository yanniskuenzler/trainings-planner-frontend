import React, {Component} from "react";
import axios from "axios";
import CreatorForm from "./creatorForm";
import {validateDate, validateDuration, validateSectionValue} from "./validateValues";

class Creator extends Component {
    state = {
        trainingHead: {
                trainingCategory: "Bahntraining",
                date: "",
                weekday: "Montag",
                duration: ""
        },
        trainingBody: [
            {
                sectionValue: "",
                sectionCategory: "Laufen",
                secUUID: crypto.randomUUID()
            }
        ]
    }

    handleInputChange = (event) => {
        let trainingHead = this.state.trainingHead;
        trainingHead[event.target.name] = event.target.value;
        this.setState({trainingHead});
    }

    handleFieldChange = (event, index) => {
        let trainingBody = [...this.state.trainingBody];
        trainingBody[index][event.target.name] = event.target.value;
        this.setState({trainingBody});
    }

    handleAddField = () => {
        let trainingBody = [...this.state.trainingBody];
        let uuid = crypto.randomUUID();
        trainingBody.push({sectionValue: "", sectionCategory: "Laufen", secUUID: uuid});
        this.setState({trainingBody});
    }

    handleDeleteField = (index) => {
        let trainingBody = this.state.trainingBody.filter((section, i) => i !== index);
        this.setState({trainingBody});
    }

    handleSubmit = () => {
        let date = validateDate(this.state.trainingHead.date);
        let duration = validateDuration(this.state.trainingHead.duration);
        let trainingBody = validateSectionValue(this.state.trainingBody);

        if (date.status && trainingBody.status && duration.status) {
            let json = {
                "date": date.date,
                "weekday": this.state.trainingHead.weekday,
                "trainingCategory": this.state.trainingHead.trainingCategory,
                "duration": duration.duration,
                "trainingBody": []
            };

            trainingBody.trainingBody.forEach((section) => {
                json.trainingBody.push({sectionCategory: section.sectionCategory, sectionValue: section.sectionValue});
            });

            const options = {
                method: 'post',
                url: 'https://trainings-planner-backend.herokuapp.com/addTraining',
                data: json
            }
            axios(options).then(() => {
                window.location.reload();
            });

        } else {
            console.log(trainingBody);
            let response = "";
            if (!date.status) {response += date.msg + "\n"}
            if (!duration.status) {response += duration.msg + "\n"}
            if (!trainingBody.status) {response += trainingBody.msg + "\n"}
            alert(response);
        }
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <button
                        type="button"
                        className="btn btn-outline-success m-2"
                        data-toggle="modal"
                        data-target="#creatorModal"
                    >
                        Training erstellen
                    </button>
                </div>
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
                                    trainingBody={this.state.trainingBody}
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
                                    Schliesen
                                </button>
                                <button
                                    type="button"
                                    form="creatorForm"
                                    className="btn btn-success"
                                    onClick={this.handleSubmit}
                                >
                                    Erstellen
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
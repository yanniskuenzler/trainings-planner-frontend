import React, {Component} from "react";
import axios from "axios";
import CreatorForm from "./creatorForm";
import {validateDate, validateWeekday, validateDuration} from "./validateValues";

class Creator extends Component {
    state = {
        trainingHead: {
                trainingCategory: "Bahntraining",
                date: "",
                weekday: "",
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
        let weekday = validateWeekday(this.state.trainingHead.weekday);
        let duration = validateDuration(this.state.trainingHead.duration);

        if (date.status && weekday.status && duration.status) {
            let json = {
                "date": date,
                "weekday": weekday,
                "trainingCategory": this.state.trainingHead.trainingCategory,
                "duration": duration,
                "distance": "10.0",
                "content": []
            };

            this.state.trainingBody.forEach((section) => {
                json.content.push({sectionCategory: section.sectionCategory, sectionValue: section.sectionValue});
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
            let response = "";
            if (!date.status) {response += date.msg + "\n"}
            if (!weekday.status) {response += weekday.msg + "\n"}
            if (!duration.status) {response += duration.msg + "\n"}
            alert(response);
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
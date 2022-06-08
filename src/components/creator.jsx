import React, {Component} from "react";
import CreatorForm from "./creatorForm";

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
        ]
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
        let json = {
            "date": this.state.trHeader.date.date,
            "weekday": this.state.trHeader.date.weekday,
            "trainingCategory": this.state.trHeader.trainingCategory,
            "duration": this.state.trHeader.duration,
            "distance": "10.0",
            "content": []
        };

        let content = [];
        this.state.sections.forEach((item) => {
            content.push({sectionCategory: item.category, value: item.value});
        });

        json.content = content;

        console.log(json);
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
                                    onSubmit={this.handleSubmit}
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
                                    type="submit"
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
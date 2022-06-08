import React, {Component} from "react";
import CreatorForm from "./creatorForm";

class Creator extends Component {
    state = {
        trHeaders: {
                trainingCategory: "",
                date: {
                    date: "",
                    weekday: ""
                },
                duration: ""
        },
        sections: [
            {
                value: "",
                category: "",
                secUUID: crypto.randomUUID()
            }
        ]
    }

    handleInputChange = (event) => {
        let name = event.target.name;
        let trHeaders = this.state.trHeaders;
        if (name === "date" || name === "weekday") {
            trHeaders.date[name] = event.target.value;
        } else {
            trHeaders[name] = event.target.value;
        }

        this.setState({trHeaders});
    }

    handleFieldChange = (event, index) => {
        let sections = [...this.state.sections];
        sections[index][event.target.name] = event.target.value;
        this.setState({sections});
    }

    handleAddField = () => {
        let sections = [...this.state.sections];
        let uuid = crypto.randomUUID();
        sections.push({value: "", category: "", secUUID: uuid});
        this.setState({sections});
    }

    handleDeleteField = (index) => {
        let sections = this.state.sections.filter((section, i) => i !== index);
        this.setState({sections});
    }

    handleSubmit = () => {

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
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Creator;
import React, {Component} from "react";
import SectionField from "./sectionField";

class Creator extends Component {
    state = {
        sections: [
            {value: "", category: ""}
        ]
    }

    handleInputChange = (event, index) => {
        let sections = [...this.state.sections];
        sections[index][event.target.name] = event.target.value;
        this.setState({sections: sections});
    }

    handleAddField = () => {
        let sections = [...this.state.sections];
        sections.push({value: "", category: ""});
        this.setState({sections: sections});
    }

    handleDeleteField = (index) => {
        let sections = [...this.state.sections];
        sections.splice(index, 1);
        console.log(sections);
        debugger
        this.setState({sections: sections});

    }

    render() {
        return (
            <div>
                <button className="btn btn-success" data-toggle="modal" data-target="#creatorModal">erstellen</button>
                <div className="modal fade" id="creatorModal" tabIndex="-1">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Training erstellen</h5>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button className="btn btn-primary" onClick={this.handleAddField}>weiteres Feld</button>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="selectTrainingCategory">Training auswählen</label>
                                        <select className="form-control" id="selectTrainingCategory">
                                            <option>Bahntraining</option>
                                            <option>Krafttraining</option>
                                            <option>Wettkampf</option>
                                            <option>Sonstige</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        {this.state.sections.map((section, index) => (
                                            <SectionField key={index} section={section} index={index} onFieldChange={this.handleInputChange} onFieldDelete={this.handleDeleteField} />
                                            )
                                        )}

                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Creator;
import React, {Component} from "react";

class SectionField extends Component {
    state = {}

    render() {
        return (
            <div className="form-row mt-1">
                <input type="text" className="form-control col-md-6" id="sectionValue" placeholder="Tätigkeit" name="value" value={this.props.section.value} onChange={(event) => this.props.onFieldChange(event, this.props.index)} />
                <select className="form-control col-md-4" id="selectTrainingCategory" name="category" value={this.props.section.category} onChange={(event) => this.props.onFieldChange(event, this.props.index)}>
                    <option>Laufen</option>
                    <option>Pause</option>
                    <option>Kraftübung</option>
                    <option>Disziplin</option>
                    <option>Sonstige</option>
                </select>
                <button className="btn btn-danger col-md-2" onClick={() => this.props.onFieldDelete(this.props.index)}>Löschen</button>
            </div>
        );
    }
}

export default SectionField;
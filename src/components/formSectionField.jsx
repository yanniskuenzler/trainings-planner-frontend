import React, {Component} from "react";

class FormSectionField extends Component {
    render() {
        return (
            <div className="form-row mt-1">
                <input
                    type="text"
                    className="form-control col-md-6"
                    tabIndex="1"
                    name="sectionValue"
                    placeholder="Tätigkeit"
                    value={this.props.section.sectionValue}
                    onChange={(event) => this.props.onFieldChange(event, this.props.index)}
                />
                <select
                    className="form-control col-md-4"
                    name="sectionCategory"
                    value={this.props.section.sectionCategory}
                    onChange={(event) => this.props.onFieldChange(event, this.props.index)}
                >
                    <option>Laufen</option>
                    <option>Pause</option>
                    <option>Kraftübung</option>
                    <option>Disziplin</option>
                    <option>Sonstige</option>
                </select>
                <button
                    type="button"
                    className="btn btn-danger col-md-2"
                    onClick={() => this.props.onFieldDelete(this.props.index)}
                >
                    Löschen
                </button>
            </div>
        );
    }
}

export default FormSectionField;
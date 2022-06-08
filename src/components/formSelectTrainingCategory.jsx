import React, {Component} from "react";

class FormSelectTrainingCategory extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="selectTrainingCategory">Training auswählen</label>
                    <select
                        className="form-control"
                        id="selectTrainingCategory"
                        name="trainingCategory"
                        onChange={(event) => {this.props.onInputChange(event)}}
                    >
                        <option>Bahntraining</option>
                        <option>Krafttraining</option>
                        <option>Wettkampf</option>
                        <option>Sonstige</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default FormSelectTrainingCategory;
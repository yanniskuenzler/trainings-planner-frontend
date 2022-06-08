import React, {Component} from "react";

class FormWriteDateDuration extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="">Datum</label>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control"
                        id="date"
                        name="date"
                        placeholder="Datum"
                        onChange={(event) => {this.props.onInputChange(event)}}
                    />
                    <input
                        type="text"
                        className="form-control"
                        name="weekday"
                        placeholder="Wochentag"
                        onChange={(event) => {this.props.onInputChange(event)}}
                    />
                </div>
                <label htmlFor="duration">Zeitdauer</label>
                <input
                    type="text"
                    className="form-control"
                    id="duration"
                    name="duration"
                    placeholder="Anzahl Minuten"
                    onChange={(event) => {this.props.onInputChange(event)}}
                />
            </div>
        )
    }
}

export default FormWriteDateDuration;
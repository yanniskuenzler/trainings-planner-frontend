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
                        placeholder="dd.mm.yyyy"
                        onChange={(event) => {this.props.onInputChange(event)}}
                    />
                    <select
                        className="form-control"
                        name="weekday"
                        onChange={(event) => {this.props.onInputChange(event)}}
                    >
                        <option>Montag</option>
                        <option>Dienstag</option>
                        <option>Mittwoch</option>
                        <option>Donnerstag</option>
                        <option>Freitag</option>
                        <option>Samstag</option>
                        <option>Sonntag</option>
                    </select>
                </div>
                <label htmlFor="duration">Zeitdauer</label>
                <input
                    type="text"
                    className="form-control"
                    id="duration"
                    name="duration"
                    placeholder="Anzahl Minuten (geschrieben ohne Einheit)"
                    onChange={(event) => {this.props.onInputChange(event)}}
                />
            </div>
        )
    }
}

export default FormWriteDateDuration;
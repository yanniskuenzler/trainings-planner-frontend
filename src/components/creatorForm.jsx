import React, {Component} from "react";
import FormSelectTrainingCategory from "./formSelectTrainingCategory";
import FormWriteDateDuration from "./formWriteDateDuration";
import FormSectionField from "./formSectionField";

class CreatorForm extends Component {

    render() {
        return (
            <form>
                <FormSelectTrainingCategory onInputChange={this.props.onInputChange} />
                <FormWriteDateDuration
                    onInputChange={this.props.onInputChange}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.props.onAddField}
                >
                    weiteres Feld
                </button>
                <div className="form-group m-1">
                    {this.props.sections.map((section, index) => (
                            <FormSectionField
                                key={section.secUUID}
                                section={section}
                                index={index}
                                onFieldChange={this.props.onFieldChange}
                                onFieldDelete={this.props.onDeleteField}
                            />
                        )
                    )}

                </div>
            </form>
        )
    }
}

export default CreatorForm;
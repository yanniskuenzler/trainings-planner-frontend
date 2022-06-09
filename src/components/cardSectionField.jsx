import React, {Component} from "react";

class CardSectionField extends Component {
    render() {
        return (
                <li key={this.props.index}>{"- " + this.props.content.sectionCategory}: {this.props.content.value}</li>
        )
    }
}

export default CardSectionField
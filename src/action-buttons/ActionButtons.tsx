import * as React from "react";
import { Component, ReactElement } from "react";
import { RaisedButton } from "material-ui";

import "./ActionButtons.css";

class ActionButtons extends Component<IActionButtonsProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className="action-buttons">
                <RaisedButton
                    className="reset"
                    label="Clear Filters"
                    secondary={true}
                    onClick={this.props.onReset}
                />

                <RaisedButton
                    className="submit"
                    label="Search"
                    primary={true}
                    onClick={this.props.onSubmit}
                    disabled={this.props.isSubmitDisabled}
                />
            </div>
        );
    }
}

interface IActionButtonsProps {
    onReset: () => void;
    onSubmit: () => void;
    isSubmitDisabled: boolean;
}

export default ActionButtons;

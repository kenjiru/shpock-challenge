import * as React from "react";
import { Component, ReactElement } from "react";
import { RaisedButton } from "material-ui";

import "./ActionButtons.css";

class ActionButtons extends Component<IActionButtonsProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className="action-buttons">
                <RaisedButton
                    label="Clear Filters"
                    secondary={true}
                    onClick={this.props.onReset}
                />

                <RaisedButton
                    label="Search"
                    primary={true}
                    onClick={this.props.onSubmit}
                    disabled={this.props.isSearchDisabled === false}
                />
            </div>
        );
    }
}

interface IActionButtonsProps {
    onReset: () => void;
    onSubmit: () => void;
    isSearchDisabled: boolean;
}

export default ActionButtons;

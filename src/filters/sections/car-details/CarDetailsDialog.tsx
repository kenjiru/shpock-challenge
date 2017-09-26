import * as React from "react";
import { Component, ReactElement } from "react";
import { Dialog, FlatButton } from "material-ui";
import { ICarDetails } from "./CarDetails";

class CarDetailsDialog extends Component<ICarDetailsDialogProps, ICarDetailsDialogState> {
    public render(): ReactElement<HTMLElement> {
        const actions = [(
            <FlatButton
                key="ok"
                label="Ok"
                primary={true}
                onClick={this.handleOk}
            />
        )];

        return (
            <div className="car-details-dialog">
                <Dialog
                    title="Car Details"
                    actions={actions}
                    modal={true}
                    open={true}
                >
                    Dialog content
                </Dialog>
            </div>
        );
    }

    private handleOk = (): void => {
        this.props.onClose();
    }
}

interface ICarDetailsDialogState {
}

interface ICarDetailsDialogProps extends ICarDetails {
    onClose: () => void;
}

export default CarDetailsDialog;

import * as React from "react";
import { Component, ReactElement } from "react";
import { Dialog, FlatButton } from "material-ui";

import { ICarDetails } from "./CarDetails";
import Year from "./Year";
import Km from "./Km";
import Brand from "./Brand";

class CarDetailsDialog extends Component<ICarDetailsDialogProps> {
    public render(): ReactElement<HTMLElement> {
        const actions = [(
            <FlatButton
                key="close"
                label="Close"
                primary={true}
                onClick={this.handleOk}
            />
        )];

        return (
            <Dialog
                className="car-details-dialog"
                title="Car Details"
                autoScrollBodyContent={true}
                actions={actions}
                modal={true}
                open={true}
            >

                <Brand
                    value={this.props.carDetails.brand}
                    onChange={this.handleBrandChange}
                />

                <Year
                    startYear={this.props.carDetails.startYear}
                    endYear={this.props.carDetails.endYear}
                    onChange={this.handleYearChange}
                />

                <Km
                    value={this.props.carDetails.km}
                    onChange={this.handleKmChange}
                />
            </Dialog>
        );
    }

    private handleBrandChange = (brand: string): void => {
        this.props.onUpdate({
            ...this.props.carDetails,
            brand
        });
    }

    private handleKmChange = (km: number): void => {
        this.props.onUpdate({
            ...this.props.carDetails,
            km
        });
    }

    private handleYearChange = (startYear: number, endYear: number): void => {
        this.props.onUpdate({
            ...this.props.carDetails,
            startYear,
            endYear
        });
    }

    private handleOk = (): void => {
        this.props.onClose();
    }
}

interface ICarDetailsDialogProps {
    carDetails: ICarDetails;
    onUpdate: (carDetails: ICarDetails) => void;
    onClose: () => void;
}

export default CarDetailsDialog;

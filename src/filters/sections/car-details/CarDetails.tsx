import * as React from "react";
import { Component, ReactElement } from "react";

import Section from "../../../section/Section";
import CarDetailsDialog from "./CarDetailsDialog";

class CarDetails extends Component<ICarDetailsProps, ICarDetailsState> {
    public state: ICarDetailsState = {
        showDetailsDialog: false
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                icon={null}
                title="More car details"
                subTitle="Click here for more options"
                onHeaderClick={this.handleHeaderClick}
            >
                {this.renderDetailsDialog()}
            </Section>
        );
    }

    private renderDetailsDialog(): ReactElement<CarDetailsDialog> {
        if (this.state.showDetailsDialog === false) {
            return undefined;
        }

        return (
            <CarDetailsDialog {...this.props} onClose={this.handleClose}/>
        );
    }

    private handleHeaderClick = (): void => {
        this.setState({
            showDetailsDialog: true
        });
    }

    private handleClose = (): void => {
        this.setState({
            showDetailsDialog: false
        });
    }
}

export interface ICarDetails {
    brand: string;
    startYear: number;
    endYear: number;
    km: number;
}

interface ICarDetailsState {
    showDetailsDialog?: boolean;
}

interface ICarDetailsProps extends ICarDetails {
}

export default CarDetails;

import * as _ from "lodash";
import * as React from "react";
import { Component, ReactElement } from "react";

import { IOption } from "../../../util/CommonTypes";
import Section from "../../../section/Section";

import CarDetailsDialog from "./CarDetailsDialog";
import Year from "./Year";
import Km from "./Km";
import Brand from "./Brand";

class CarDetails extends Component<ICarDetailsProps, ICarDetailsState> {
    private static EMPTY_TITLE: string = "More car details";
    private static EMPTY_SUB_TITLE: string = "Click here for more options";

    public state: ICarDetailsState = {
        showDetailsDialog: false
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                icon={null}
                title={this.getTitle()}
                subTitle={this.getSubtitle()}
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
            <CarDetailsDialog
                carDetails={this.props.carDetails}
                onUpdate={this.handleUpdateDetails}
                onClose={this.handleClose}
            />
        );
    }

    private handleHeaderClick = (): void => {
        this.setState({
            showDetailsDialog: true
        });
    }

    private handleUpdateDetails = (details: ICarDetails): void => {
        this.props.onChange(details);
    }

    private handleClose = (): void => {
        this.setState({
            showDetailsDialog: false
        });
    }

    private getTitle(): string {
        if (_.isNil(this.props.carDetails.brand)) {
            return CarDetails.EMPTY_TITLE;
        }

        return this.getBrandName();
    }

    private getSubtitle(): string {
        const carDetails: ICarDetails = this.props.carDetails;

        if (this.hasDefaultValues(carDetails)) {
            return CarDetails.EMPTY_SUB_TITLE;
        }

        let subtitle: string = "";

        if (carDetails.startYear !== Year.MIN || carDetails.endYear !== Year.MAX) {
            subtitle = `${carDetails.startYear} - ${carDetails.endYear}`;
        }

        if (carDetails.km !== Km.MAX) {
            if (_.isEmpty(subtitle) === false) {
                subtitle += ", ";
            }

            subtitle += `up to ${carDetails.km} km`;
        }

        return subtitle;
    }

    private getBrandName(): string {
        let brandOption: IOption = _.find(Brand.availableOptions, (option: IOption): boolean =>
            option.id === this.props.carDetails.brand);

        return brandOption.label;
    }

    private hasDefaultValues(carDetails: ICarDetails): boolean {
        return carDetails.startYear === Year.MIN &&
            carDetails.endYear === Year.MAX &&
            carDetails.km === Km.MAX;
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

interface ICarDetailsProps {
    carDetails: ICarDetails;
    onChange: (carDetails: ICarDetails) => void;
}

export default CarDetails;

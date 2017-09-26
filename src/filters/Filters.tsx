import * as React from "react";
import { Component, ReactElement } from "react";
import { RaisedButton } from "material-ui";

import DateRange from "./sections/DateRange";
import Radius from "./sections/Radius";
import SortedBy from "./sections/SortedBy";
import Category from "./sections/Category";
import SubCategory from "./sections/SubCategory";
import Price from "./sections/Price";
import Location from "./sections/Location";
import CarDetails, { ICarDetails } from "./sections/car-details/CarDetails";

import "./Filters.css";

class Filters extends Component<IFiltersProps, IFiltersState> {
    public state: IFiltersState = {
        dateRange: 0,
        radius: 0,
        categories: ["evr"],
        subCategory: "evr",
        address: "Vienna, Austria",
        car: {} as ICarDetails
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="filters">
                <div className="title">Filters</div>
                <div className="content">
                    <DateRange
                        value={this.state.dateRange}
                        onChange={this.handleDateRangeChange}
                    />

                    <SortedBy
                        value={this.state.sortedBy}
                        onChange={this.handleSortedByChange}
                    />

                    <Radius
                        value={this.state.radius}
                        onChange={this.handleRadiusChange}
                    />

                    <Location
                        radius={this.state.radius}
                        ownCountry={true}
                        address="Vienna, Austria"
                        onChange={this.handleAddressChange}
                    />

                    <Category
                        selectedCategories={this.state.categories}
                        onChange={this.handleCategoryChange}
                    />

                    {this.renderSubCategory()}
                    {this.renderCarDetails()}

                    <Price
                        minValue={this.state.minValue}
                        maxValue={this.state.maxValue}
                        onChange={this.handlePriceChange}
                    />

                    <div className="clear-button-container">
                        <RaisedButton label="Clear Filters" secondary={true}/>
                    </div>
                </div>
            </div>
        );
    }

    private renderSubCategory(): ReactElement<SubCategory> {
        if (this.hasSubCategories(this.state.categories[0]) === false) {
            return undefined;
        }

        return (
            <SubCategory
                selectedCategory={this.state.categories[0]}
                selectedSubCategory={this.state.subCategory}
                onChange={this.handleSubCategoryChange}
            />
        );
    }

    private renderCarDetails(): ReactElement<CarDetails> {
        if (this.state.subCategory !== "cars") {
            return undefined;
        }

        return (
            <CarDetails {...this.state.car}/>
        );
    }

    private handleAddressChange = (address: string): void => {
        this.setState({
            address
        });
    }

    private handlePriceChange = (minValue: number, maxValue: number): void => {
        this.setState({
            minValue,
            maxValue
        });
    }

    private handleCategoryChange = (categories: string[]): void => {
        this.setState({
            categories
        });
    }

    private handleSubCategoryChange = (subCategory: string): void => {
        this.setState({
            subCategory
        });
    }

    private handleSortedByChange = (sortedBy: string): void => {
        this.setState({
            sortedBy
        });
    }

    private handleDateRangeChange = (dateRange: number): void => {
        this.setState({
            dateRange
        });
    }

    private handleRadiusChange = (radius: number): void => {
        this.setState({
            radius
        });
    }

    private hasSubCategories(category: string): boolean {
        return category === "auto" || category === "property";
    }
}

interface IFiltersState {
    dateRange?: number;
    radius?: number;
    sortedBy?: string;
    categories?: string[];
    subCategory?: string;
    car?: ICarDetails;
    minValue?: number;
    maxValue?: number;
    address?: string;
}

interface IFiltersProps {
}

export default Filters;

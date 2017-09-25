import * as React from "react";
import { Component, ReactElement } from "react";
import { RaisedButton } from "material-ui";

import DateRange from "./sections/DateRange";
import Radius from "./sections/Radius";
import SortedBy from "./sections/SortedBy";
import Category from "./sections/Category";
import Price from "./sections/Price";
import Location from "./sections/Location";

import "./Filters.css";

class Filters extends Component<IFiltersProps, IFiltersState> {
    public state: IFiltersState = {
        dateRange: 0,
        radius: 0,
        categories: [],
        address: "Vienna, Austria"
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
                        selectedValues={this.state.categories}
                        onChange={this.handleCategoryChange}
                    />

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
}

interface IFiltersState {
    dateRange?: number;
    radius?: number;
    sortedBy?: string;
    categories?: string[];
    minValue?: number;
    maxValue?: number;
    address?: string;
}

interface IFiltersProps {
}

export default Filters;

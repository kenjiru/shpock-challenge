import * as React from "react";
import { Component, ReactElement } from "react";
import { RaisedButton } from "material-ui";

import { IFilters } from "../page/Page";
import DateRange from "./sections/DateRange";
import Radius from "./sections/Radius";
import SortedBy from "./sections/SortedBy";
import Category from "./sections/Category";
import SubCategory from "./sections/SubCategory";
import Price from "./sections/Price";
import Location from "./sections/Location";
import CarDetails, { ICarDetails } from "./sections/car-details/CarDetails";

import "./Filters.css";

class Filters extends Component<IFiltersProps> {
    public static DEFAULT_RANGE: string = "24h";
    public static DEFAULT_SORTED_BY: string = "distance";
    public static DEFAULT_RADIUS: string = "1km";
    public static DEFAULT_CATEGORY: string = "evr";
    public static DEFAULT_SUBCATEGORY: string = "evr";
    public static DEFAULT_ADDRESS: string = "Vienna, Austria";

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="filters">
                <div className="title">Filters</div>
                <div className="content">
                    <DateRange
                        value={this.props.dateRange}
                        onChange={this.handleDateRangeChange}
                    />

                    <SortedBy
                        value={this.props.sortedBy}
                        onChange={this.handleSortedByChange}
                    />

                    <Radius
                        value={this.props.radius}
                        onChange={this.handleRadiusChange}
                    />

                    <Location
                        radius={this.props.radius}
                        ownCountry={true}
                        address="Vienna, Austria"
                        onChange={this.handleAddressChange}
                    />

                    <Category
                        selectedCategories={this.props.categories}
                        onChange={this.handleCategoryChange}
                    />

                    {this.renderSubCategory()}
                    {this.renderCarDetails()}

                    <Price
                        minValue={this.props.minValue}
                        maxValue={this.props.maxValue}
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
        if (this.hasSubCategories(this.props.categories[0]) === false) {
            return undefined;
        }

        return (
            <SubCategory
                selectedCategory={this.props.categories[0]}
                selectedSubCategory={this.props.subCategory}
                onChange={this.handleSubCategoryChange}
            />
        );
    }

    private renderCarDetails(): ReactElement<CarDetails> {
        if (this.props.subCategory !== "cars") {
            return undefined;
        }

        return (
            <CarDetails
                carDetails={this.props.carDetails}
                onChange={this.handleCarDetailsChange}
            />
        );
    }

    private handleCarDetailsChange = (carDetails: ICarDetails): void => {
        this.props.onChange({
            carDetails
        });
    }

    private handleAddressChange = (address: string): void => {
        this.props.onChange({
            address
        });
    }

    private handlePriceChange = (minValue: number, maxValue: number): void => {
        this.props.onChange({
            minValue,
            maxValue
        });
    }

    private handleCategoryChange = (categories: string[]): void => {
        if (Category.isMetaCategory(categories[0])) {
            this.props.onChange({
                subCategory: Filters.DEFAULT_SUBCATEGORY
            });
        }

        this.props.onChange({
            categories
        });
    }

    private handleSubCategoryChange = (subCategory: string): void => {
        this.props.onChange({
            subCategory
        });
    }

    private handleSortedByChange = (sortedBy: string): void => {
        this.props.onChange({
            sortedBy,
            radius: sortedBy === "distance" ? "evr" : "30km"
        });
    }

    private handleDateRangeChange = (dateRange: string): void => {
        this.props.onChange({
            dateRange
        });
    }

    private handleRadiusChange = (radius: string): void => {
        this.props.onChange({
            radius
        });
    }

    private hasSubCategories(category: string): boolean {
        return category === "auto" || category === "property";
    }
}

interface IFiltersProps extends IFilters {
    onChange: (filters: IFilters) => void;
}

export default Filters;

import * as _ from "lodash";
import * as React from "react";
import { Component, ReactElement } from "react";
import { Paper } from "material-ui";

import SearchBar from "../search-bar/SearchBar";
import Filters from "../filters/Filters";
import { ICarDetails } from "../filters/sections/car-details/CarDetails";
import Year from "../filters/sections/car-details/Year";
import Km from "../filters/sections/car-details/Km";
import JsonCode from "../json-code/JsonCode";
import SearchHint from "../search-hint/SearchHint";

import "./Page.css";

class Page extends Component<IPageProps, IPageState> {
    public state: IPageState = {
        formSubmitted: false,
        searchStr: "",
        filters: {
            dateRange: Filters.DEFAULT_RANGE,
            sortedBy: Filters.DEFAULT_SORTED_BY,
            radius: Filters.DEFAULT_RADIUS,
            categories: [Filters.DEFAULT_CATEGORY],
            subCategory: Filters.DEFAULT_SUBCATEGORY,
            address: Filters.DEFAULT_ADDRESS,
            carDetails: {
                startYear: Year.MIN,
                endYear: Year.MAX,
                km: Km.MAX
            } as ICarDetails,
            minPrice: 0
        }
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="page">
                <div className="header">
                    <div className="header-content">
                        <div className="logo"/>
                    </div>
                </div>

                <SearchBar
                    searchStr={this.state.searchStr}
                    onChange={this.handleSearchChange}
                    onSubmit={this.handleSubmit}
                />
                <Paper className="page-content">
                    {this.renderHint()}
                    {this.renderFilters()}
                    {this.renderJson()}
                </Paper>
            </div>
        );
    }

    private renderJson(): ReactElement<HTMLElement> {
        if (this.state.formSubmitted === false) {
            return undefined;
        }

        const {formSubmitted, ...obj} = this.state;

        return (
            <JsonCode json={obj}/>
        );
    }

    private renderFilters(): ReactElement<HTMLElement> {
        if (_.isEmpty(this.state.searchStr) || this.state.formSubmitted) {
            return undefined;
        }

        return (
            <Filters
                {...this.state.filters}
                onChange={this.handleFiltersChange}
            />
        );
    }

    private renderHint(): ReactElement<SearchHint> {
        if (_.isEmpty(this.state.searchStr) === false || this.state.formSubmitted) {
            return undefined;
        }

        return <SearchHint/>
    }

    private handleFiltersChange = (filters: IFilters): void => {
        this.setState({
            filters: _.merge({}, this.state.filters, filters)
        });
    }

    private handleSearchChange = (searchStr: string): void => {
        this.setState({
            searchStr,
            formSubmitted: false
        });
    }

    private handleSubmit = (): void => {
        if (this.state.formSubmitted === false && _.isEmpty(this.state.searchStr) === false) {
            this.submitForm();
        }
    }

    private submitForm(): void {
        this.setState({
            formSubmitted: true
        });
    }
}

export interface IFilters {
    dateRange?: string;
    radius?: string;
    sortedBy?: string;
    categories?: string[];
    subCategory?: string;
    carDetails?: ICarDetails;
    minPrice?: number;
    maxPrice?: number;
    address?: string;
}

interface IPageState {
    formSubmitted?: boolean;
    searchStr?: string;
    filters?: IFilters;
}

interface IPageProps {
}

export default Page;

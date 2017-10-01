import * as _ from "lodash";
import * as React from "react";
import { Component, ReactElement } from "react";
import { Paper } from "material-ui";
import { Grid, Row, Col } from "react-flexbox-grid";

import Header from "../header/Header";
import SearchBar from "../search-bar/SearchBar";
import Filters from "../filters/Filters";
import { ICarDetails } from "../filters/sections/car-details/CarDetails";
import Year from "../filters/sections/car-details/Year";
import Km from "../filters/sections/car-details/Km";
import JsonCode from "../json-code/JsonCode";
import SearchHint from "../search-hint/SearchHint";
import Category from "../filters/sections/Category";
import Price from "../filters/sections/Price";

import "./Page.css";

class Page extends Component<IPageProps, IPageState> {
    public static defaultCarDetails: ICarDetails = {
        startYear: Year.MIN,
        endYear: Year.MAX,
        km: Km.MAX
    } as ICarDetails;

    public defaultFilters: IFilters = {
        dateRange: Filters.DEFAULT_RANGE,
        sortedBy: Filters.DEFAULT_SORTED_BY,
        radius: Filters.DEFAULT_RADIUS,
        categories: [Filters.DEFAULT_CATEGORY],
        subCategory: Filters.DEFAULT_SUBCATEGORY,
        ownCountry: true,
        address: Filters.DEFAULT_ADDRESS,
        carDetails: _.cloneDeep(Page.defaultCarDetails),
        minPrice: 0,
        maxPrice: 0
    };

    public state: IPageState = {
        formSubmitted: false,
        searchStr: "",
        filters: _.cloneDeep(this.defaultFilters)
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="page">
                <Header/>
                <SearchBar
                    searchStr={this.state.searchStr}
                    onChange={this.handleSearchChange}
                    onSubmit={this.handleSubmit}
                />

                <Grid>
                    <Row>
                        <Col xs={0} md={2} lg={3}/>
                        <Col xs={12} md={8} lg={6}>
                            <Paper className="page-content">
                                {this.renderHint()}
                                {this.renderFilters()}
                                {this.renderJson()}
                            </Paper>
                        </Col>
                        <Col xs={0} md={2} lg={3}/>
                    </Row>
                </Grid>
            </div>
        );
    }

    private renderJson(): ReactElement<HTMLElement> {
        if (this.state.formSubmitted === false) {
            return undefined;
        }

        return (
            <JsonCode json={this.getJsonObject()}/>
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
                onReset={this.handleReset}
                onSubmit={this.handleSubmit}
                isPriceValid={this.isPriceValid()}
            />
        );
    }

    private renderHint(): ReactElement<SearchHint> {
        if (_.isEmpty(this.state.searchStr) === false || this.state.formSubmitted) {
            return undefined;
        }

        return <SearchHint/>;
    }

    private handleReset = (): void => {
        this.setState({
            filters: _.cloneDeep(this.defaultFilters)
        });
    }

    private handleFiltersChange = (filters: IFilters): void => {
        this.setState({
            filters: _.assign({}, this.state.filters, filters)
        });
    }

    private handleSearchChange = (searchStr: string): void => {
        this.setState({
            searchStr,
            formSubmitted: false
        });
    }

    private handleSubmit = (): void => {
        if (this.state.formSubmitted === false &&
            _.isEmpty(this.state.searchStr) === false &&
            this.isPriceValid()) {

            this.submitForm();
        }
    }

    private submitForm(): void {
        this.setState({
            formSubmitted: true
        });
    }

    private getJsonObject(): Object {
        const {formSubmitted, ...jsonObj} = _.cloneDeep(this.state);

        if (Category.isMetaCategory(jsonObj.filters.categories[0]) === false ||
            jsonObj.filters.categories[0] === "evr") {

            delete jsonObj.filters.subCategory;
            delete jsonObj.filters.carDetails;
        } else if (jsonObj.filters.subCategory !== "cars") {
            delete jsonObj.filters.carDetails;
        }

        return jsonObj;
    }

    private isPriceValid(): boolean {
        return Price.isValid(this.state.filters.minPrice, this.state.filters.maxPrice);
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
    ownCountry?: boolean;
}

interface IPageState {
    formSubmitted?: boolean;
    searchStr?: string;
    filters?: IFilters;
}

interface IPageProps {
}

export default Page;

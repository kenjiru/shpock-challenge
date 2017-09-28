import * as _ from "lodash";
import * as React from "react";
import { Component, ReactElement } from "react";
import { Paper } from "material-ui";

import SearchBar from "../search-bar/SearchBar";
import Filters from "../filters/Filters";

import "./Page.css";

class Page extends Component<IPageProps, IPageState> {
    public state: IPageState = {
        formSubmitted: false,
        searchStr: ""
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
                {this.renderFilters()}
            </div>
        );
    }

    private renderFilters(): ReactElement<HTMLElement> {
        if (_.isEmpty(this.state.searchStr) || this.state.formSubmitted) {
            return undefined;
        }

        return (
            <Paper
                className="filters-container"
                zDepth={1}
            >
                <Filters/>
            </Paper>
        );
    }

    private handleSearchChange = (searchStr: string): void => {
        this.setState({
            searchStr
        });
    }

    private handleSubmit(): void {
        if (this.state.formSubmitted === false) {
            this.submitForm();
        }
    }

    private submitForm(): void {
        this.setState({
            formSubmitted: true
        });
        console.log("submit form!");
    }
}

interface IPageState {
    formSubmitted?: boolean;
    searchStr?: string;
}

interface IPageProps {
}

export default Page;

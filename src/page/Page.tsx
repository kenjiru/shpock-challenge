import * as _ from "lodash";
import * as React from "react";
import { Component, ReactElement } from "react";
import { Paper } from "material-ui";

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

                <div className="search-bar">
                    <div className="search-bar-content">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="What are you looking for ..."
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />
                    </div>
                </div>
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

    private handleKeyDown = (ev: any): void => {
        if (ev.keyCode === 13) {
            if (this.state.formSubmitted === false) {
                this.submitForm();
            }
            ev.preventDefault();
        }
    }

    private handleChange = (ev: any): void => {
        this.setState({
            searchStr: ev.target.value,
            formSubmitted: false
        });
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

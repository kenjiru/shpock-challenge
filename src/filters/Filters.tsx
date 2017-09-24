import * as React from "react";
import { Component, ReactElement } from "react";

import "./Filters.css";

class Filters extends Component<IFiltersProps, IFiltersState> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className="filters">
                <div className="filters-title">Filters</div>
                <div className="content">
                    Content
                </div>
            </div>
        );
    }
}

interface IFiltersState {
}

interface IFiltersProps {
}

export default Filters;

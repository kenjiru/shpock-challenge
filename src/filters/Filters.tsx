import * as React from "react";
import { Component, ReactElement } from "react";

import Section from "../section/Section";

import "./Filters.css";

class Filters extends Component<IFiltersProps, IFiltersState> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className="filters">
                <div className="filters-title">Filters</div>
                <div className="content">
                    <Section
                        icon="date.png"
                        title="Listed in the last"
                        titleRight="forever"
                    >
                        Section
                    </Section>
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

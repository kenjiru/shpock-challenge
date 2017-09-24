import * as React from "react";
import { Component, ReactElement } from "react";
import { RaisedButton, TextField, Toggle } from "material-ui";
import ClearFix from "material-ui/internal/ClearFix";

import Section from "../section/Section";
import IconSlider from "../icon-slider/IconSlider";
import RaisedRadioButton from "../raised-radio-button/RaisedRadioButton";
import RaisedCheckbox from "../raised-checkbox/RaisedCheckbox";
import LocationMap from "../location-map/LocationMap";

import "./Filters.css";

class Filters extends Component<IFiltersProps, IFiltersState> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className="filters">
                <div className="title">Filters</div>
                <div className="content">
                    <Section
                        icon="date.png"
                        title="Listed in the last"
                        titleRight="forever"
                    >
                        <IconSlider
                            iconLeft="egg.png"
                            iconRight="dino.png"
                            step={0.20}
                        />
                    </Section>

                    <Section icon="sorting.png" title="Sort by">
                        <RaisedRadioButton label="Distance"/>
                        <RaisedRadioButton label="Date"/>
                        <ClearFix/>
                        <RaisedRadioButton label="Price up"/>
                        <RaisedRadioButton label="Price down"/>
                    </Section>

                    <Section icon="radius.png" title="Radius" titleRight="everywhere">
                        <IconSlider iconLeft="home.png" iconRight="world.png" step={0.05}/>
                    </Section>

                    <Section
                        icon="flag.png"
                        title="Search only in my country"
                        titleRight={<Toggle/>}
                    />

                    <Section className="filter-location" icon="location.png" title="Current location">
                        <div className="label">Tap on the map to change the location</div>
                        <LocationMap/>
                    </Section>

                    <Section icon="category.png" title="Choose categories">
                        <RaisedCheckbox label="Everything"/>
                        <RaisedCheckbox label="New in your area"/>
                        <RaisedCheckbox label="Fashion and Accessories"/>
                        <RaisedCheckbox label="Home and Garden"/>
                        <RaisedCheckbox label="Electronics"/>
                        <RaisedCheckbox label="Sport, Leisure and Games"/>
                        <RaisedCheckbox label="Movies, Books and Music"/>
                        <RaisedCheckbox label="Cars and Motors"/>
                        <RaisedCheckbox label="Property"/>
                        <RaisedCheckbox label="Services"/>
                        <RaisedCheckbox label="Other"/>
                    </Section>

                    <Section className="filter-price" icon="price.png" title="Set your price range">
                        <TextField className="min-price" floatingLabelText="Min. price"/>
                        <TextField className="max-price" floatingLabelText="Max. price"/>
                    </Section>

                    <div className="clear-button-container">
                        <RaisedButton label="Clear Filters" secondary={true}/>
                    </div>
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

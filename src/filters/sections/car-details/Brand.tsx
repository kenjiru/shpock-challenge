import * as React from "react";
import { Component, CSSProperties, ReactElement } from "react";
import { MenuItem, SelectField } from "material-ui";

import { IOption } from "../../../util/CommonTypes";
import Img from "../../../img/Img";

import "./Brand.css";

class Brand extends Component<IBrandProps> {
    public static availableOptions: IOption[] = [
        {id: "bmw", label: "BMW"},
        {id: "vw", label: "Volkswagen"},
        {id: "opel", label: "Opel"}
    ];

    private selectFieldStyle: CSSProperties = {
        width: "inherit"
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="brand">
                <div className="icon-container">
                    <Img
                        className="icon"
                        src="car.png"
                    />
                </div>
                <SelectField
                    className="select-field"
                    hintText="Search"
                    value={this.props.value}
                    onChange={this.handleChange}
                    style={this.selectFieldStyle}
                >
                    {this.renderOptions()}
                </SelectField>
            </div>
        );
    }

    private renderOptions(): ReactElement<MenuItem>[] {
        return Brand.availableOptions.map((option: IOption): ReactElement<MenuItem> => (
            <MenuItem
                key={option.id}
                value={option.id}
                primaryText={option.label}
            />
        ));
    }

    private handleChange = (event: React.MouseEvent<{}>, index: number, value: string) => {
        this.props.onChange(value);
    }
}

interface IBrandProps {
    value: string;
    onChange: (value: string) => void;
}

export default Brand;

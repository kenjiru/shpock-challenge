import * as React from "react";
import { Component, ReactElement } from "react";

import { IOption } from "../../util/CommonTypes";
import RaisedCheckbox from "../../raised-checkbox/RaisedCheckbox";
import Section from "../../section/Section";

class Category extends Component<ICategoryProps> {
    public static availableOptions: IOption[] = [
        {id: "evr", label: "Everything"},
        {id: "new", label: "New in your area"},
        {id: "fashion", label: "Fashion and Accessories"},
        {id: "home", label: "Home and Garden"},
        {id: "electronics", label: "Electronics"},
        {id: "sport", label: "Sport, Leisure and Games"},
        {id: "movies", label: "Movies, Books and Music"},
        {id: "auto", label: "Cars and Motors"},
        {id: "property", label: "Property"},
        {id: "services", label: "Services"},
        {id: "other", label: "Other"}
    ];

    public render(): ReactElement<HTMLElement> {
        return (
            <Section icon="category.png" title="Choose categories">
                {this.renderOptions()}
            </Section>
        );
    }

    private renderOptions(): ReactElement<RaisedCheckbox>[] {
        return Category.availableOptions.map((category: IOption): ReactElement<RaisedCheckbox> => (
            <RaisedCheckbox
                key={category.id}
                value={category.id}
                label={category.label}
                checked={this.isChecked(category.id)}
                onCheck={this.handleCheck.bind(this, category.id)}
            />
        ));
    }

    private handleCheck = (id: string, ev: React.MouseEvent<{}>, checked: boolean): void => {
        let selectedValues: string[] = this.props.selectedValues.slice(0);

        if (checked) {
            selectedValues.push(id);
        } else {
            let index: number = selectedValues.indexOf(id);

            if (index > -1) {
                selectedValues.splice(index, 1);
            }
        }

        this.props.onChange(selectedValues);
    }

    private isChecked(id: string): boolean {
        return this.props.selectedValues.some((selectedValue: string): boolean => selectedValue === id);
    }
}

interface ICategoryProps {
    selectedValues: string[];
    onChange?: (values: string[]) => void;
}

export default Category;

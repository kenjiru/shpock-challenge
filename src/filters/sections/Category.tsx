import * as _ from "lodash";
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

    private static metaCategories: string[] = ["evr", "auto", "property"];

    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                icon="category.png"
                title="Choose categories"
            >
                {this.renderCategories()}
            </Section>
        );
    }

    private renderCategories(): ReactElement<RaisedCheckbox>[] {
        return Category.availableOptions.map((category: IOption): ReactElement<RaisedCheckbox> => (
            <RaisedCheckbox
                key={category.id}
                value={category.id}
                label={category.label}
                checked={this.isCategoryChecked(category.id)}
                onCheck={this.handleCategoryCheck.bind(this, category.id)}
            />
        ));
    }

    private handleCategoryCheck = (category: string, ev: React.MouseEvent<{}>, checked: boolean): void => {
        let selectedCategories: string[] = [];

        if (checked) {
            selectedCategories = this.addCategory(category);
        } else {
            selectedCategories = this.removeCategory(category);
        }

        this.props.onChange(selectedCategories);
    }

    private addCategory(category: string): string[] {
        let categories: string[] = this.props.selectedCategories.slice(0);

        if (this.isMetaCategory(category)) {
            categories = [category];
        } else {
            categories = this.removeMetaCategories(categories);
            categories.push(category);
        }

        return categories;
    }

    private removeCategory(category: string): string[] {
        let selectedCategories: string[] = this.props.selectedCategories.slice(0);

        let index: number = selectedCategories.indexOf(category);

        if (index > -1) {
            selectedCategories.splice(index, 1);
        }

        if (selectedCategories.length === 0) {
            selectedCategories = ["evr"];
        }

        return selectedCategories;
    }

    private removeMetaCategories(categories: string[]) {
        return _.difference(categories, Category.metaCategories);
    }

    private isMetaCategory(category: string): boolean {
        return Category.metaCategories.indexOf(category) > -1;
    }

    private isCategoryChecked(category: string): boolean {
        return this.props.selectedCategories.some(
            (selectedCategory: string): boolean => selectedCategory === category
        );
    }
}

interface ICategoryProps {
    selectedCategories: string[];
    onChange?: (categories: string[]) => void;
}

export default Category;

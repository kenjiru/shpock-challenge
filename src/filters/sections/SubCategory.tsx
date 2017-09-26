import * as React from "react";
import { Component, ReactElement } from "react";
import { Dictionary } from "lodash";

import { IOption } from "../../util/CommonTypes";
import Section from "../../section/Section";
import RaisedCheckbox from "../../raised-checkbox/RaisedCheckbox";

class SubCategory extends Component<ISubCategoryProps> {
    public static categoryConfig: Dictionary<ICategoryConfig> = {
        "auto": {
            icon: "car.png",
            title: "Cars and Motors",
            subCategories: [
                {id: "evr", label: "Everything"},
                {id: "cars", label: "Cars"},
                {id: "moto-scooters", label: "Motorcycles and scooters"},
                {id: "parts", label: "Parts and accessories"}
            ]
        },
        "property": {
            icon: "property.png",
            title: "Property",
            subCategories: [
                {id: "evr", label: "Everything"},
                {id: "sale", label: "For sale"},
                {id: "rent", label: "For rent"},
                {id: "shared", label: "Shared"},
            ]
        }
    };

    public render(): ReactElement<Section> {
        const firstCategory: string = this.props.selectedCategory;

        const categoryConfig: ICategoryConfig = SubCategory.categoryConfig[firstCategory];

        return (
            <Section
                icon={categoryConfig.icon}
                title={categoryConfig.title}
            >
                {this.renderSubCategories(firstCategory)}
            </Section>
        );
    }

    private renderSubCategories(category: string): ReactElement<RaisedCheckbox>[] {
        const subCategories: IOption[] = SubCategory.categoryConfig[category].subCategories;

        return subCategories.map((subCategory: IOption): ReactElement<RaisedCheckbox> => (
            <RaisedCheckbox
                key={subCategory.id}
                value={subCategory.id}
                label={subCategory.label}
                checked={this.isSubCategoryChecked(subCategory.id)}
                onCheck={this.handleSubCategoryCheck.bind(this, subCategory.id)}
            />
        ));
    }

    private handleSubCategoryCheck = (subCategory: string, ev: React.MouseEvent<{}>, checked: boolean): void => {
        let selectedSubCategory: string = checked ? subCategory : "evr";

        this.props.onChange(selectedSubCategory);
    }

    private isSubCategoryChecked(subCategory: string): boolean {
        return this.props.selectedSubCategory === subCategory;
    }

}

interface ICategoryConfig {
    icon: string;
    title: string;
    subCategories: IOption[];
}

interface ISubCategoryProps {
    selectedCategory: string;
    selectedSubCategory: string;
    onChange: (selectedSubCategory: string) => void;
}

export default SubCategory;

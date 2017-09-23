import * as React from "react";
import { Component, ReactElement } from "react";
import { Card, CardHeader, CardText, TextField } from "material-ui";

import "./Page.css";

class Page extends Component<IPageProps, IPageState> {
    public render(): ReactElement<Card> {
        return (
            <Card
                className="page"
                expanded={true}
            >
                <CardHeader
                    title={this.renderTitle()}
                    actAsExpander={false}
                    showExpandableButton={false}
                    style={{backgroundColor: "#45b862"}}
                />

                <CardText expandable={true}>
                    <TextField
                        hintText="Search"
                        fullWidth={true}
                    />
                </CardText>
            </Card>
        );
    }

    private renderTitle(): ReactElement<HTMLElement> {
        return (
            <div className="page-title"/>
        );
    }
}

interface IPageState {
}

interface IPageProps {
}

export default Page;

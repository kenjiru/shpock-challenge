import * as React from "react";
import { Component, ReactElement } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import "./Header.css";

class Header extends Component<{}> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className="header">
                <Grid>
                    <Row>
                        <Col xs={0} md={2} lg={3}/>
                        <Col xs={12} md={8} lg={6}>
                            <div className="logo"/>
                        </Col>
                        <Col xs={0} md={2} lg={3}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Header;

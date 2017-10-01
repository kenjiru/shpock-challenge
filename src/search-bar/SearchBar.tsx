import * as React from "react";
import { Component, ReactElement } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import "./SearchBar.scss";

class SearchBar extends Component<ISearchBarProps> {
    public static SEARCH_INPUT_CLASS: string = "search-input";
    private static PLACEHOLDER: string = "What are you looking for ...";

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="search-bar">
                <Grid>
                    <Row>
                        <Col xs={0} md={2} lg={3}/>
                        <Col xs={12} md={8} lg={6}>
                            <div className="search-bar-content">
                                <input
                                    className={SearchBar.SEARCH_INPUT_CLASS}
                                    type="text"
                                    placeholder={SearchBar.PLACEHOLDER}
                                    value={this.props.searchStr}
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyDown}
                                />
                            </div>
                        </Col>
                        <Col xs={0} md={2} lg={3}/>
                    </Row>
                </Grid>
            </div>
        );
    }

    private handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>): void => {
        if (ev.keyCode === 13) {
            ev.preventDefault();

            this.props.onSubmit();
        }
    }

    private handleChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.onChange(ev.target.value);
    }
}

interface ISearchBarProps {
    searchStr: string;
    onSubmit: () => void;
    onChange: (searchStr: string) => void;
}

export default SearchBar;

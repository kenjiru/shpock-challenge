import * as React from "react";
import { Component, ReactElement } from "react";

import "./SearchBar.css";

class SearchBar extends Component<ISearchBarProps> {
    private static PLACEHOLDER: string = "What are you looking for ...";

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="search-bar">
                <div className="search-bar-content">
                    <input
                        className="search-input"
                        type="text"
                        placeholder={SearchBar.PLACEHOLDER}
                        value={this.props.searchStr}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                </div>
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

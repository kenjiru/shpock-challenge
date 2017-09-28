import * as React from "react";
import { Component, ReactElement } from "react";

import "./SearchHint.css";

class SearchHint extends Component<ISearchHintProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className="search-hint">
                <h2>Hint</h2>
                <p>Enter something in the input above in order to show the available filters.</p>
                <p>Press Enter to submit.</p>
            </div>
        );
    }
}

interface ISearchHintProps {
}

export default SearchHint;

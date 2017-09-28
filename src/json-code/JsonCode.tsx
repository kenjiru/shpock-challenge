import * as React from "react";
import { Component, ReactElement } from "react";
import { Paper } from "material-ui";

import "./JsonCode.css";

class JsonCode extends Component<IJsonCodeProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <Paper
                className="json-code"
                zDepth={2}
            >
                <h2>Here's the JSON corresponding to the filters</h2>
                {this.renderCode()}
            </Paper>
        );
    }

    private renderCode(): ReactElement<HTMLElement> {
        return <pre dangerouslySetInnerHTML={{__html: this.syntaxHighlight()}}/>;
    }

    private syntaxHighlight(): string {
        let json: string = JSON.stringify(this.props.json, null, 2);

        json = json
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        const regexp: RegExp =
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

        return json.replace(regexp, function (match: string) {
            let cls: string = "number";

            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = "key";
                } else {
                    cls = "string";
                }
            } else if (/true|false/.test(match)) {
                cls = "boolean";
            } else if (/null/.test(match)) {
                cls = "null";
            }
            return `<span class="${cls}">${match}</span>`;
        });
    }
}

interface IJsonCodeProps {
    json: Object;
}

export default JsonCode;

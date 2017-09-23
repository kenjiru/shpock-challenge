import * as React from "react";
import { ReactElement } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Page from "./page/Page";

import "./App.css";

class App extends React.Component {
    public render(): ReactElement<MuiThemeProvider> {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <Page/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

import * as React from "react";
import { ReactElement } from "react";
import { MuiTheme } from "material-ui/styles";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { greenA700 } from "material-ui/styles/colors";

import Page from "./page/Page";

export const appMuiTheme: MuiTheme = {
    palette: {
        primary1Color: greenA700,
    }
};

const muiTheme: MuiTheme = getMuiTheme(appMuiTheme);

class App extends React.Component {
    public render(): ReactElement<MuiThemeProvider> {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="app">
                    <Page/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

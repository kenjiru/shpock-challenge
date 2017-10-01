# shpock-challenge
This project is a demo for Shpock. The application is deployed online at 
[shpock-challenge.surge.sh](http://shpock-challenge.surge.sh).

For more information, checkout the [requirements](docs/Requirements.md), 
the [technical details](docs/Technical-details.md) and the [functionality](docs/Functionality.md).

The Kanban board corresponding to the project is hosted by 
[Taiga](https://tree.taiga.io/project/kenjiru-shpock-challenge/kanban)

## How to build

### Install the dependencies

`yarn`

### Start the dev server

`yarn start`

This will start webpack-dev-server at `http://localhost:3000` and open a browser window.

### Building for production

`yarn build`

This will build the project in the `build/` folder. This is what it's deployed to surge.sh.

### Deploy the app to surge.sh

`yarn deploy`

Will deploy the project to [shpock-challenge.surge.sh](http://shpock-challenge.surge.sh).

### Run te unit tests

`yarn test`

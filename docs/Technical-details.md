# Technical details

## Build system
This is a React application written in TypeScript, that uses SCSS for styling.

In order to build the project without investing a lot of time in configuration I used 
[react-create-app](https://github.com/facebookincubator/create-react-app) developed by Facebook.

Because I wanted to use TypeScript, I had to use the custom scripts 
[create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)

In order to use SCSS without ejecting and without start a separate process to build the SCSS files, it was necessary 
to patch `react-scripts-ts` in order to add a loader for SCSS loader to the webpack configuration.

## Code quality
For keeping up a good code quality, the project uses mostly the default settings from 
[tslint](https://github.com/palantir/tslint) together with 
[tslint-react](https://github.com/palantir/tslint-react) which adds some more constraints specific to JSX.

## UI libraries
The goal was to make the application look and behave as closely as possible as the Android application.

Most of the widgets come from the library [material-ui](http://www.material-ui.com), which implements most of the 
Material UI widgets using React components.

In order to replicate the look of the Android app, some custom components were created, like the Radiobutton and the 
Checkbox.

For customizing the styles [SASS](http://sass-lang.com) was used;

## Grid system
In order to make the application **responsive** on different form factors like phones and tablets, a CSS grid library 
was used [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid).

Which consists of a set of React components that offer a wrapper for [flexboxgrid.css](http://flexboxgrid.com).
I choose this library as opposed to Bootstrap because it's more lightweight and offers only the grid system without any
widgets.

## Unit tests
The application has 13 test suites with a total of 33 individual tests.

The unit tests use [Jest](https://facebook.github.io/jest) mainly because it comes by default with `create-create-app`.
Jest has a nice feature for creating snap shots of a component. This reduces the need for testing how all the 
properties are passed down the tree.

In order to make it easier to assert, manipulate, and traverse the React components, the testing utilities from 
[Enzyme](http://airbnb.io/enzyme) library were used.

The following aspects were tested:

* snapshot, for all components
* conditional rendering, mostly depending on the props
* custom styles
* state

# Functionality
This demo tries to implement as much as possible the look and behaviour of the Android application.

## Responsive design
The application was intended to work on multiple form factors like phones, tablets and dekstops.

## Google Maps
The maps section was implemented using the [react-google-maps](https://github.com/tomchentw/react-google-maps).

## Displaying the JSON result
The JSON representing the filters is shown in a custom code block that formats and styles the code.

## Known issues

Google maps issues:
* cannot click inside the radius circle
* choosing a different address does not move the radius circle
* searching for an address destroys the radius circle

Other issues:
* the inputs from the price range do not handle nicely invalid numbers, like letters
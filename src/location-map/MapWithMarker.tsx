import * as React from "react";
import { compose } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps";
import { ComponentClass, ReactElement, ReactNode } from "react";

const MapWithMarker: ComponentClass<IMapWithMarkerProps> = compose(withScriptjs, withGoogleMap)(
    (props: IMapWithMarkerProps) =>
        (
            <GoogleMap
                defaultZoom={9}
                defaultCenter={{lat: 48.194, lng: 16.377}}
            >
                <Circle
                    center={{lat: 48.194, lng: 16.377}}
                    radius={20000}
                    visible={true}
                    options={{
                        strokeColor: "#00c853",
                        strokeOpacity: 0,
                        strokeWeight: 2,
                        fillColor: "#00c853",
                        fillOpacity: 0.35,
                    }}
                />
            </GoogleMap>
        )
);

interface IMapWithMarkerProps {
    children?: ReactNode;
    googleMapURL?: string;
    loadingElement?: ReactElement<HTMLElement>;
    containerElement?: ReactElement<HTMLElement>;
    mapElement?: ReactElement<HTMLElement>;
}

export default MapWithMarker;

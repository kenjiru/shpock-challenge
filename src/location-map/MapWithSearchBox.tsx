/* tslint:disable:no-any */
import * as React from "react";
import { ComponentClass, ReactElement, ReactNode } from "react";
import { compose, lifecycle, withProps } from "recompose";

import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

interface IMapWithSearchBoxProps {
    children?: ReactNode;
    googleMapURL?: string;
    loadingElement?: ReactElement<HTMLElement>;
    containerElement?: ReactElement<HTMLElement>;
    mapElement?: ReactElement<HTMLElement>;
    center?: any;
    circleRadius?: number;
    zoom?: number;
    bounds?: any;
    markers?: any[];
    onMapMounted?: any;
    onBoundsChanged?: any;
    onSearchBoxMounted?: any;
    onSearchPlacesChanged?: any;
    onMapClicked?: any;
    onAddressChange?: (msg: string) => void;
}

const DEFAULT_ZOOM: number = 12;

const MapWithASearchBox: ComponentClass<IMapWithSearchBoxProps> = compose(
    withProps((props: IMapWithSearchBoxProps) => ({
        center: {
            lat: 48.2082,
            lng: 16.3738
        },
        zoom: radiusToZoom(props.circleRadius)
    })),
    lifecycle({
        componentWillMount() {
            const refs: any = {};

            this.setState({
                bounds: null,
                markers: [],
                onMapMounted: (ref: any) => {
                    refs.map = ref;
                },
                onBoundsChanged: () => {
                    this.setState({
                        bounds: refs.map.getBounds(),
                        center: refs.map.getCenter(),
                    });
                },
                onSearchBoxMounted: (ref: any) => {
                    refs.searchBox = ref;
                },
                onSearchPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();
                    const bounds = new google.maps.LatLngBounds();

                    places.forEach((place: any) => {
                        if (place.geometry.viewport) {
                            bounds.union(place.geometry.viewport);
                        } else {
                            bounds.extend(place.geometry.location);
                        }
                    });
                    const nextMarkers = places.map((place: any) => ({
                        position: place.geometry.location,
                    }));

                    let state: any = this.state;
                    // const nextCenter = _.get(nextMarkers, "0.position", state.center);
                    let nextCenter: any;

                    if (!nextMarkers[0] || !nextMarkers[0].position) {
                        nextCenter = state.center;
                    } else {
                        nextCenter = nextMarkers[0].position;
                    }

                    this.setState({
                        center: nextCenter,
                        markers: nextMarkers,
                        zoom: DEFAULT_ZOOM,
                        circleRadius: null,
                    });

                    let props: any = this.props;
                    props.onAddressChange(places[0].formatted_address);
                },

                onMapClicked: (event: any) => {
                    this.setState({
                        clickMarkerPosition: event.latLng,
                        markers: [{
                            position: event.latLng
                        }]
                    });

                    let geocoder: any = new google.maps.Geocoder();

                    geocoder.geocode({"latLng": event.latLng}, (results: any, status: any) => {
                        if (status === google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                let props: any = this.props;

                                props.onAddressChange(results[0].formatted_address);
                            }
                        }
                    });
                }
            });
        },
    }),
    withScriptjs,
    withGoogleMap
)((props: IMapWithSearchBoxProps) => (
    <GoogleMap
        ref={props.onMapMounted}
        center={props.center}
        zoom={props.zoom}
        onBoundsChanged={props.onBoundsChanged}
        onClick={props.onMapClicked}
    >
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onSearchPlacesChanged}
        >
            <input
                type="text"
                placeholder="Search"
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `320px`,
                    height: `32px`,
                    marginTop: `8px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                }}
            />
        </SearchBox>

        <Circle
            center={props.center}
            radius={props.circleRadius < 1000000 ? props.circleRadius : null}
            visible={true}
            options={{
                strokeColor: "#00c853",
                strokeOpacity: 0,
                strokeWeight: 2,
                fillColor: "#00c853",
                fillOpacity: 0.35,
            }}
        />

        {props.markers.map((marker, index) =>
            <Marker key={index} position={marker.position}/>
        )}
    </GoogleMap>
));

function radiusToZoom(radius: number): number {
    return Math.round(14 - Math.log(radius / 1000) / Math.LN2);
}

export default MapWithASearchBox;
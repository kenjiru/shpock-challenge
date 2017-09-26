/* tslint:disable:no-any */
import * as React from "react";
import { ComponentClass, ReactElement, ReactNode } from "react";
import { compose, lifecycle } from "recompose";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

interface IMapWithSearchBoxProps {
    children?: ReactNode;
    googleMapURL?: string;
    loadingElement?: ReactElement<HTMLElement>;
    containerElement?: ReactElement<HTMLElement>;
    mapElement?: ReactElement<HTMLElement>;
    center?: any;
    bounds?: any;
    markers?: any[];
    onMapMounted?: any;
    onBoundsChanged?: any;
    onSearchBoxMounted?: any;
    onSearchPlacesChanged?: any;
    onMapClicked?: any;
    onAddressChange?: (msg: string) => void;
}

const MapWithASearchBox: ComponentClass<IMapWithSearchBoxProps> = compose(
    lifecycle({
        componentWillMount() {
            const refs: any = {};

            this.setState({
                bounds: null,
                center: {
                    lat: 48.194, lng: 16.377
                },
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

                    geocoder.geocode({
                        "latLng": event.latLng
                    }, (results: any, status: any) => {
                        if (status == google.maps.GeocoderStatus.OK) {
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
        defaultZoom={15}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
        onClick={props.onMapClicked}
        defaultCenter={{lat: 48.194, lng: 16.377}}
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
        {props.markers.map((marker, index) =>
            <Marker key={index} position={marker.position}/>
        )}
    </GoogleMap>
));

export default MapWithASearchBox;
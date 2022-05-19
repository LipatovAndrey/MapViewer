import React, {useCallback, useEffect, useRef, useState} from "react";
import DeckGL from '@deck.gl/react';
import {ArcLayer, BitmapLayer, GeoJsonLayer, IconLayer, PathLayer, ScatterplotLayer} from '@deck.gl/layers';
import {TileLayer} from '@deck.gl/geo-layers';
import StaticMap, {MapContext} from "react-map-gl";
import MapView from "@deck.gl/core/src/views/map-view";
import FlyToInterpolator from "@deck.gl/core/src/transitions/viewport-fly-to-interpolator";

import LinearInterpolator from "@deck.gl/core/src/transitions/linear-interpolator";
import style from './Map.module.css'


const INITIAL_VIEW_STATE = {
    longitude: 37.617734,
    latitude: 55.751999,
    zoom: 13,
    pitch: 0,
    bearing: 0
};

const Map = (props) => {

    let [viewState, setViewState] = useState({...INITIAL_VIEW_STATE})

    let [bounds, setBounds] = useState({
        west: null,
        south: null,
        east: null,
        north: null
    })

    useEffect(() => {
        if (props.userCoordinate && viewState.latitude != props.userCoordinate.latitude && viewState.longitude != props.userCoordinate.longitude) {
            setViewState({
                ...viewState,
                longitude: props.userCoordinate.longitude,
                latitude: props.userCoordinate.latitude,
                transitionDuration: 4000,
                transitionInterpolator: new FlyToInterpolator()
            })
        }
    })

    const pathLayer = new PathLayer({
        id: 'path-layer',
        data: [{
            path: [[38.238168, 55.580164], [38.238168, 55.581164], [38.248168, 55.584164]],
            name: 'Richmond - Millbrae',
            color: [155, 155, 15]
        }],
        pickable: true,
        widthScale: 10,
        widthMinPixels: 1,
        getWidth: d => 4
    });


    const layer = new TileLayer({
        data: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        minZoom: 0,
        maxZoom: 20,
        tileSize: 256,

        renderSubLayers: props => {
            const {
                bbox: {west, south, east, north}
            } = props.tile;
            setBounds({west: west, south: south, east: east, north: north})
            return new BitmapLayer(props, {
                data: null,
                image: props.data,
                bounds: [west, south, east, north]
            });
        }
    });

    const ICON_MAPPING = {
        marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
    };

    const iclayer = new IconLayer({
        id: 'icon-layer',
        data: [
            {
                name: 'Colma (COLM)',
                address: '365 D Street, Colma CA 94014',
                exits: 4214,
                coordinates: [38.248168, 55.580164]
            }
        ],
        pickable: true,
        getIcon: d => ({
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
            width: 128,
            height: 128,
            anchorY: 128
        }),
        iconMapping: ICON_MAPPING,
        sizeScale: 15,
        getPosition: d => d.coordinates,
        getSize: d => 5,
        getColor: d => [Math.sqrt(d.exits), 140, 0]
    });


    return (
        <React.Fragment>
            <DeckGL
                initialViewState={viewState}
                controller={true}
                layers={[layer, iclayer]}
                ContextProvider={MapContext.Provider}
                views={[
                    new MapView({id: 'map', width: '50%', height: '50%', controller: true})
                ]}
                onViewStateChange={(state) => {
                    console.log(state)
                }}
            >
            </DeckGL>
        </React.Fragment>

    );
}


export default Map;
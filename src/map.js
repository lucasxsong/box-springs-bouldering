import React, { Component } from 'react';
import MapGL, { Popup, GeolocateControl } from 'react-map-gl';
import './App.css';

import CityInfo from './boulder-info';
import BOULDERS from './boulders.json'
import Pins from './pins';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_KEY; // Set your mapbox token here

export default class Map extends Component {
	state = {
		viewport: {
			latitude: 33.993,
			longitude: -117.3,
			zoom: 14,
			bearing: 0,
			pitch: 0
        }, 
        popupInfo: null
	};

	_sourceRef = React.createRef();

	_onViewportChange = viewport => this.setState({ viewport });

	_onClick = event => {
		const feature = event.features[0];
		const clusterId = feature.properties.cluster_id;

		const mapboxSource = this._sourceRef.current.getSource();

		mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
			if (err) {
				return;
			}

			this._onViewportChange({
				...this.state.viewport,
				longitude: feature.geometry.coordinates[0],
				latitude: feature.geometry.coordinates[1],
				zoom,
				transitionDuration: 500
			});
		});
    };
    
    _onClickMarker = city => {
        this.setState({popupInfo: city});
     };

     _renderPopup() {
        const {popupInfo} = this.state;
    
        return (
          popupInfo && (
            <Popup
            style={{display: 'none !important'}}
              tipSize={6}
              anchor="top"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              closeOnClick={false}
              onClose={() => this.setState({popupInfo: null})}
            >
              <CityInfo info={popupInfo} />
            </Popup>
          )
        );
      }

	render() {
		const { viewport } = this.state;

		return (
			//   <MapGL
			//     {...viewport}
			//     width="100%"
			//     height="100%"
			//     mapStyle="mapbox://styles/mapbox/dark-v9"
			//     onViewportChange={this._onViewportChange}
			//     mapboxApiAccessToken={MAPBOX_TOKEN}
			//     // interactiveLayerIds={[clusterLayer.id]}
			//     // onClick={this._onClick}
			//   >
			//     {/* <Source
			//       type="geojson"
			//       data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
			//       cluster={true}
			//       clusterMaxZoom={14}
			//       clusterRadius={50}
			//       ref={this._sourceRef}
			//     >
			//       <Layer {...clusterLayer} />
			//       <Layer {...clusterCountLayer} />
			//       <Layer {...unclusteredPointLayer} />
			//     </Source> */}
			//     <ControlPanel containerComponent={this.props.containerComponent} />
			//   </MapGL>
			<MapGL
				{...viewport}
				width="100vw"
				height="100vh"
				mapStyle="mapbox://styles/mapbox/satellite-v8"
				onViewportChange={this._onViewportChange}
				mapboxApiAccessToken={MAPBOX_TOKEN}
				onClick={this.on_onClick}
			>
                <Pins data={BOULDERS} onClick={this._onClickMarker} />
                {this._renderPopup()}

				<GeolocateControl
					positionOptions={{ enableHighAccuracy: false }}
					trackUserLocation={true}
				/>
			</MapGL>
		);
	}
}

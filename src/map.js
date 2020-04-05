import React, { Component } from 'react';
import MapGL, { Popup, GeolocateControl } from 'react-map-gl';
import './App.css';

import CityInfo from './boulder-info';
import BOULDERS from './boulders.json';
import Pins from './pins';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_KEY; // Set your mapbox token here

export default class Map extends Component {
	state = {
		viewport: {
			latitude: 33.9915,
			longitude: -117.3075,
			zoom: 16,
			bearing: 0,
			pitch: 0,
		},
		popupInfo: null,
	};

	_sourceRef = React.createRef();

	_onViewportChange = (viewport) => this.setState({ viewport });

	_onClick = (event) => {
		this.setState({ popupInfo: null });
	};

	_onClickMarker = (boulder) => {
		this.setState({ popupInfo: boulder });
	};

	_renderPopup() {
		const { popupInfo } = this.state;

		return (
			popupInfo && (
				<Popup
					style={{ display: 'none !important' }}
					tipSize={0}
					dynamicPosition={true}
					longitude={popupInfo.longitude}
					latitude={popupInfo.latitude}
					closeOnClick={false}
					captureClick={true}
					onClose={() => this.setState({ popupInfo: null })}
				>
					<CityInfo info={popupInfo} />
				</Popup>
			)
		);
	}

	render() {
		const { viewport } = this.state;

		return (
			<MapGL
				{...viewport}
				width="100vw"
				height="100vh"
				mapStyle="mapbox://styles/mapbox/satellite-v8"
				onViewportChange={this._onViewportChange}
				mapboxApiAccessToken={MAPBOX_TOKEN}
				onClick={this._onClick}
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

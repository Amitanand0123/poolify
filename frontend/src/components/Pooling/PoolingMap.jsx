import React from 'react';
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const PoolingMap = () => {
  const poolCenter = { longitude: -118.2437, latitude: 34.0522 };

  return (
    <Map
      initialViewState={{ longitude: poolCenter.longitude, latitude: poolCenter.latitude, zoom: 12 }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={poolCenter.longitude} latitude={poolCenter.latitude} color="red" />
    </Map>
  );
};

export default PoolingMap;
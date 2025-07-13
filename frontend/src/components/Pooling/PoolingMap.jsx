import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const PoolingMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configuration
  const USER_RADIUS = 500; // radius in meters
  const CURSOR_IMAGE_PATH = './magnifying-glass.png'; // path to your cursor image

  // Default fallback location (Los Angeles)
  const defaultCenter = [34.0522, -118.2437];

  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser');
      setLoading(false);
      return;
    }

    // Get current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        setLoading(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        setError(`Location error: ${error.message}`);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  }, []);

  // Use user location if available, otherwise use default
  const mapCenter = userLocation || defaultCenter;
  
  // Markers array with user location or default
  const markers = userLocation ? [
    { 
      position: userLocation,
      popup: "Your Current Location"
    }
  ] : [
    { 
      position: defaultCenter,
      popup: "Default Location (Los Angeles)"
    }
  ];

  // Show loading state
  if (loading) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
      }}>
        <div style={{ textAlign: 'center' }}>
          <p>Getting your location...</p>
          <p style={{ fontSize: '12px', color: '#666' }}>
            Please allow location access when prompted
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Custom CSS for cursor */}
      <style jsx>{`
        .custom-cursor-map {
          cursor: url('${CURSOR_IMAGE_PATH}') 12 12, auto !important;
        }
        .custom-cursor-map * {
          cursor: url('${CURSOR_IMAGE_PATH}') 12 12, auto !important;
        }
        .leaflet-grab {
          cursor: url('${CURSOR_IMAGE_PATH}') 12 12, auto !important;
        }
        .leaflet-grabbing {
          cursor: url('${CURSOR_IMAGE_PATH}') 12 12, auto !important;
        }
      `}</style>
      
      {/* Show error message if location failed */}
      {error && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          right: '10px',
          backgroundColor: '#ffebee',
          color: '#c62828',
          padding: '10px',
          borderRadius: '4px',
          zIndex: 1000,
          fontSize: '14px'
        }}>
          {error} - Using default location
        </div>
      )}
      
      <MapContainer
        center={mapCenter}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
        zoomControl={true}
        className="custom-cursor-map"
      >
        {/* OpenStreetMap tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Render circular area around user location */}
        {userLocation && (
          <Circle
            center={userLocation}
            radius={USER_RADIUS}
            pathOptions={{
              fillColor: '#87CEEB',
              fillOpacity: 0.3,
              color: '#4682B4',
              weight: 2,
              opacity: 0.8
            }}
          />
        )}
        
        {/* Render markers */}
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>
              {marker.popup}
              {userLocation && (
                <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
                  Radius: {USER_RADIUS}m
                </div>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PoolingMap;
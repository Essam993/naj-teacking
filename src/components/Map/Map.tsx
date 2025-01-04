import React, { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

// Fix Leaflet's default icon paths using TypeScript-safe approach
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapContent = () => {
    const map = useMap();
    // Updated coordinates
    const startPosition: [number, number] = [25.3199, 55.4408]; // Industrial Area 4, Sharjah
    const endPosition: [number, number] = [25.2532, 55.3657]; // Dubai International Airport


    useEffect(() => {
        if (map) {
            map.setView(startPosition, 3);
        }
    }, [map]);

    return (
        <>
            {/* Light Gray Tile Layer */}
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
            />
            <Marker position={startPosition}>
                <Popup>Start Point</Popup>
            </Marker>
            <Marker position={endPosition}>
                <Popup>End Point</Popup>
            </Marker>
            <Polyline positions={[startPosition, endPosition]} pathOptions={{ color: 'blue', weight: 4 }} />
        </>
    );
};

const Map = () => (
    <div className="map-container">
        <MapContainer style={{ height: '100vh', width: '100%' }}>
            <MapContent />
        </MapContainer>
        <div className="map-overlay"></div>
    </div>
);

export default Map;

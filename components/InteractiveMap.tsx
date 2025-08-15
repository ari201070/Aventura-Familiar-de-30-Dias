
import React, { useEffect, useRef } from 'react';
import { City, PointOfInterest } from '../types';
import { useAppContext } from '../App';

declare var L: any; // Declare L from Leaflet CDN

interface InteractiveMapProps {
  cities: City[]; // Can be a single city in an array for detail page
  selectedCityCoords?: [number, number];
  pointsOfInterest?: PointOfInterest[];
  zoomLevel?: number;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ cities, selectedCityCoords, pointsOfInterest, zoomLevel }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const poiMarkersRef = useRef<any[]>([]);
  const cityMarkersRef = useRef<any[]>([]);
  const { t, language } = useAppContext();

  useEffect(() => {
    if (mapRef.current && typeof L !== 'undefined' && !mapInstanceRef.current) {
      let initialCoords: [number, number] = [-34.5, -63]; // Default to Argentina center
      let initialZoom = zoomLevel || 4.2;

      if (selectedCityCoords) {
        initialCoords = selectedCityCoords;
        initialZoom = zoomLevel || (pointsOfInterest && pointsOfInterest.length > 0 ? 13 : 8);
      } else if (cities.length > 0) {
        initialCoords = cities[0].coords;
        initialZoom = zoomLevel || 8;
      }
      
      mapInstanceRef.current = L.map(mapRef.current).setView(initialCoords, initialZoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);
    }

    // Add/Update city markers
    if (mapInstanceRef.current && cities) {
        cityMarkersRef.current.forEach(marker => mapInstanceRef.current.removeLayer(marker));
        cityMarkersRef.current = [];
        cities.forEach(city => {
            const marker = L.marker(city.coords).addTo(mapInstanceRef.current)
              .bindPopup(t(city.nameKey));
            cityMarkersRef.current.push(marker);
        });
    }
    
    // Add/Update POI markers
    if (mapInstanceRef.current && pointsOfInterest) {
        poiMarkersRef.current.forEach(marker => mapInstanceRef.current.removeLayer(marker));
        poiMarkersRef.current = [];
        pointsOfInterest.forEach(poi => {
            const marker = L.marker(poi.coords, {icon: L.icon({
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })}).addTo(mapInstanceRef.current)
              .bindPopup(`<b>${t(poi.nameKey)}</b><br>${poi.descriptionKey ? t(poi.descriptionKey) : ''}`);
            poiMarkersRef.current.push(marker);
        });
    }

    if (mapInstanceRef.current) {
        if (pointsOfInterest && pointsOfInterest.length > 0) {
            const poiBounds = L.latLngBounds(pointsOfInterest.map(poi => poi.coords));
            mapInstanceRef.current.fitBounds(poiBounds, { padding: [50, 50], maxZoom: 15 });
        } else if (selectedCityCoords) {
            mapInstanceRef.current.setView(selectedCityCoords, zoomLevel || 12, { animate: true });
        }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities, selectedCityCoords, pointsOfInterest, t, language, zoomLevel]); // Added language to re-render popups

  return <div ref={mapRef} className="w-full leaflet-container shadow-lg rounded-lg"></div>;
};

export default InteractiveMap;

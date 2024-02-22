"use client"
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapsProps {
  position: { lat: number; lng: number };
}

const Maps: React.FC<MapsProps> = ({ position }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        mapId: 'My_map'
      }

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position
      });
    }

    initMap();
  }, [position]);

  return (
    <div>
      <div style={{ height: '450px'}} ref={mapRef} />
    </div>
  );
}

export default Maps;

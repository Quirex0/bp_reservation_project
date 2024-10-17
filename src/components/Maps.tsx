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
        version: 'weekly',
        libraries: ['marker']
      });

      const google = await loader.load();

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        mapId: 'MAP_ID'
      }

      const map = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);  

      const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Marker'
      });
    }

    initMap();
  }, [position]);

  return (
    <div className="h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
      <div className="h-full" ref={mapRef} />
    </div>
  );
}

export default Maps;

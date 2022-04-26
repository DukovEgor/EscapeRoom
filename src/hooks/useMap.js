import { Map, TileLayer } from 'leaflet';
import { useEffect, useState } from 'react';

export default function useMap({ mapRef, city }) {
  const [map, setMap] = useState(null);

  useEffect(() => {

    if (mapRef.current !== null && map === null) {

      const instance = new Map(mapRef.current, {

        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,

      });

      const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png');
      instance.addLayer(layer);
      setMap(instance);
    }
  }, [mapRef, map, city.location.latitude, city.location.longitude, city.location.zoom]);

  return map;
}

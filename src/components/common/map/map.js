import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ANCHOR_SIZES, CITY as city, ICONS_SIZES } from 'utils/const';
import useMap from 'hooks/useMap';

function Map() {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: '../../../img/icon-location.svg',
    iconSize: ICONS_SIZES,
    iconAnchor: ANCHOR_SIZES,
  });

  useEffect(() => {
    if (map) {
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
      );

      const marker = leaflet.marker(
        {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        {
          icon: defaultCustomIcon,
        },
      );

      marker.addTo(map);
    }
  }, [defaultCustomIcon, map]);

  return <section style={{ width: '100%' }} ref={mapRef} />;
}

export default Map;

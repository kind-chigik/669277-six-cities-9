import {MutableRefObject} from 'react';
import {City} from '../types/city';
import {useEffect, useState} from 'react';
import leaflet, {Map} from 'leaflet';
import {LAYER_MAP_URL, LAYER_MAP_COPYRIGHT} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City) {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet.tileLayer(LAYER_MAP_URL, {
        attribution: LAYER_MAP_COPYRIGHT,
      }).addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;

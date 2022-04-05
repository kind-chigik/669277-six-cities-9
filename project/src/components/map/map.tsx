import {OfferForMap, Hotel} from '../../types/hotel';
import {City} from '../../types/city';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet, {LayerGroup} from 'leaflet';

type mapProps = {
  offers: Hotel[];
  activeOffer: OfferForMap | null;
  city: City;
  classMap?: string;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 20],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 20],
});

function getIcon(offerId: number, activeOffer: OfferForMap | null) {
  if (activeOffer) {
    const currentIcon = offerId === activeOffer.id ? currentCustomIcon : defaultCustomIcon;
    return currentIcon;
  }
  return defaultCustomIcon;
}

function Map({offers, activeOffer, city, classMap}: mapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    let layerGroup: LayerGroup;

    if (map) {
      const markers = offers.map((offer) => leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }, {
        icon: getIcon(offer.id, activeOffer),
      }));
      layerGroup = leaflet.layerGroup(markers);
      layerGroup.addTo(map);
      map.setView([city.lat, city.lng]);
    }

    return () => {
      if (map) {
        map.removeLayer(layerGroup);
      }
    };

  }, [map, offers, activeOffer, city]);

  return (
    <section className={`${classMap} map`} ref={mapRef}></section>
  );
}

export default Map;

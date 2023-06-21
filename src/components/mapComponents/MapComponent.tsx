import * as React from "react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import L from "leaflet";
import { MapComponentProps } from "./MapComponent.types";
import { ChangeView } from "./changeView/ChangeView";

const DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export const MapComponent: FC<MapComponentProps> = (props) => {
  const { locations, center } = props;

  return (
    <MapContainer
      center={center}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <ChangeView center={center} zoom={6} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations?.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.user.address}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

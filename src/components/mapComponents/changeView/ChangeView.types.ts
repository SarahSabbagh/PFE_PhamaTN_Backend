import { LatLngExpression } from "leaflet";

export interface ChangeViewProps {
    center: LatLngExpression;
    zoom: number;
  }
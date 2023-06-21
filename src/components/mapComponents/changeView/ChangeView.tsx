import { useMap } from "react-leaflet";
import { ChangeViewProps } from "./ChangeView.types";

export function ChangeView({ center, zoom }: ChangeViewProps): null {
  const map = useMap();
  map.setView(center, zoom);
 
  return null;
}

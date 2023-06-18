import { LatLngExpression } from "leaflet";
import { ISearchMedResponse } from "../../redux/api/types/ISearchMed";

 export interface MapComponentProps {
    locations?: ISearchMedResponse[];
    center:LatLngExpression
  }
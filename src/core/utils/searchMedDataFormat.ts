import { ISearchMedResponse } from "../../redux/api/types/ISearchMed";

export const transformedSearchMedData = (data: ISearchMedResponse[]) =>
  data.map((item) => ({
    name: item.user.name,
    address: item.user.address,
    lng: item.lng,
    lat: item.lat,
    distance: item.distance,
  }));

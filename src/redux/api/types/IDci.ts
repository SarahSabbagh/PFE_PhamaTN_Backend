export interface IDciRequest {
  page?: number;
  page_size?: number;
}
export interface IDci {
  id: number;
  name: string;
}
export interface IDciFilterRequest {
  search?: string;
  page?: number;
  page_size?: number;
  sortBy?: string;
  sortOrder?: string;
}

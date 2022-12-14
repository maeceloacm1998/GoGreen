export interface LatLongResponseModel {
  type: string;
  licence: string;
  features: FeaturesItem[];
}

export interface FeaturesItem {
  type: string;
  properties: Properties;
  bbox: number[];
  geometry: Geometry;
}

interface Properties {
  place_id: number;
  osm_type: string;
  osm_id: number;
  display_name: string;
  place_rank: number;
  category: string;
  type: string;
  importance: number;
}

interface Geometry {
  type: string;
  coordinates: number[];
}

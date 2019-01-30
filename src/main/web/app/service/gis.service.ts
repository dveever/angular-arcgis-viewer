import {ElementRef, Injectable} from '@angular/core';
import {loadModules} from "esri-loader";

@Injectable()
export class GisService {

  map:__esri.Map;
  mapView:__esri.MapView;

  constructor() { }

  initMap(mapViewContainer: ElementRef){
    loadModules(["esri/Map", "esri/views/MapView"])
      .then(([Map, MapView]:
               [__esri.MapConstructor,
                __esri.MapViewConstructor]) => {
        const mapProperties:__esri.MapProperties = {
          basemap: 'dark-gray'
        };
        this.map = new Map(mapProperties);
        const map = this.map;

        const mapViewProperties: __esri.MapViewProperties = {
          container: mapViewContainer.nativeElement,
          center: [65.6, 57.15],
          zoom: 11,
          map
        };

        this.mapView = new MapView(mapViewProperties);
    });
  }

}

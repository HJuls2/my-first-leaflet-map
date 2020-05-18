import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  placesUrl = '/assets/tram.geojson';

  constructor(private http: HttpClient) {
  }

  makePlacesMarkers(map: L.map): void {
    this.http.get(this.placesUrl).subscribe( (places: any) => {
      for (const c of places.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]).addTo(map);
      }
    });
  }
}
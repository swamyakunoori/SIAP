import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { from } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private geocoder: any;

  constructor(private mapLoader: MapsAPILoader) {}

  private initGeocoder() {
    console.log('Init geocoder!');
    this.geocoder = new google.maps.Geocoder();
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if (!this.geocoder) {
      return from(this.mapLoader.load()).pipe(
        tap(() => this.initGeocoder()),
        map(() => true)
      );
    }
    return of(true);
  }

  
}

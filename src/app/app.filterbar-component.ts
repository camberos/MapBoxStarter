import { Component,EventEmitter,ViewChild } from '@angular/core';
// import { DemographicsService } from './app.service-http';
import { MaterializeAction } from 'angular2-materialize';




import { MapService } from './app.map-service';
import { GeocodingService } from './app.geocode-service';
import { Location } from './location.class';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'datatable-filter',
  templateUrl: 'app.filterbar-component.html',
  styleUrls: ['app.filterbar-component.css']
})
export class AppFilterBarComponent {

 //@ViewChild(MarkerComponent) markerComponent: MarkerComponent;

    constructor(private mapService: MapService, private geocoder: GeocodingService) {
    }

    ngOnInit() {

        let map = new Map({
            container: 'map',
            style: 'mapbox://styles/camberos/ciz2jll7r00162ro8pngc9qoy',
            zoom: 5,
            center: [-78.880453, 42.897852]
        });

        this.mapService.map = map;
    }

    // ngAfterViewInit() {
    //     this.markerComponent.Initialize();
    // }


}
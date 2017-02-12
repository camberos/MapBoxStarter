import { Component,EventEmitter,ViewChild } from '@angular/core';
// import { DemographicsService } from './app.service-http';
import { MaterializeAction } from 'angular2-materialize';
import { MapService } from './app.map-service';
import { GeocodingService } from './app.geocode-service';
import { Location } from './location.class';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-languge-management',
  templateUrl: './app.language-management.html',
  styleUrls: ['./app.language-management.css']

})
export class AppLanguageManagment{

 //@ViewChild(MarkerComponent) markerComponent: MarkerComponent;

    constructor(private mapService: MapService, private geocoder: GeocodingService) {
    }

    ngOnInit() {

        let map = new Map({
            container: 'map',
            style: 'mapbox://styles/camberos/ciz1bcs1l000o2ro81hgqnjed',
            zoom: 1,
            center: [54.00, -3.00]
        });

        this.mapService.map = map;
    }

    // ngAfterViewInit() {
    //     this.markerComponent.Initialize();
    // }
}
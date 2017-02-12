import {Injectable} from '@angular/core';
import {Location} from './location.class';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

@Injectable()
export class MapService {
    map: Map;
    baseMaps: any;

    constructor() {

        (mapboxgl as any).accessToken = 'pk.eyJ1IjoiY2FtYmVyb3MiLCJhIjoiY2l1ZXl3ZHJuMDBiaDJ5cDJxb3I4NjQ4OSJ9.J79oEWgMK6SafDsdEmuUow';

        this.baseMaps = [
            { name: 'Street', id: 'street' },
            { name: 'Bright', id: 'bright' },
            { name: 'Light', id: 'light' },
            { name: 'Satellite', id: 'satellite' }
        ];
    }

}

import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.css';
import "materialize-css";
import "angular2-materialize";
import { DemographicsService } from './app.service-http';

//import { Demographics } from './demographics';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  public loading: boolean = false;
  public noData: boolean = false;

  //demographics: Demographics[] = [];
  constructor(
    private demographicsService: DemographicsService) { 
  }

  // On init get values from API
  ngOnInit(): void {

        // this.demographicsService.getDemographics().then(
        //   demographics => { 
        //     this.demographics = demographics;
        //   }
        // );


      //console.log(this.demographicsService.getCountries());

      // this.demographicsService.getCountries()
      //   .subscribe(val => console.log(val));

  }

}


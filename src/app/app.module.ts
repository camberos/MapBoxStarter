import './rxjs-extensions';
//************************************************************
//
//    ANGULAR 2 PLATFORM
//
//************************************************************
import { NgModule, Injectable, APP_INITIALIZER } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormControl, FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';


//************************************************************
//
//    ANGULAR MATERIAL
//
//************************************************************
import "materialize-css";
import "angular2-materialize";
import { MaterializeDirective, MaterializeAction } from "angular2-materialize";

//************************************************************
//
//    DEMOGRAPHICS LOADER
//
//************************************************************

import { AppLoader } from './app.loader';

import { GeocodingService } from './app.geocode-service';
import { MapService } from './app.map-service';

//************************************************************
//
//    DEMOGRAPHICS REPORT COMPONENTS
//
//************************************************************

import { AppComponent } from './app.component';
import { AppFilterBarComponent } from './app.filterbar-component';
import { AppHeader} from "./app.header";
import { AppFooter } from "./app.footer";
import { DemographicsService } from './app.service-http';
import { Angular2DataTableModule } from 'angular2-data-table';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { AppWelcome } from './app.welcome';
import { AppCitizenship } from './app.citizenship';
import { AppAbout } from './app.about';


//************************************************************
//
//    ADMINISTRATION COMPONENTS
//
//************************************************************

import { AppMarketReport } from './app.market-report';




//************************************************************
//
//    Routing
//
//************************************************************

import { AppRoutingModule }     from './app.routing-module';
// import { AppDemographicsApi } from './app.demographics-api';
import { AppLanguageManagment } from './app.language-management';

//************************************************************
//
//    i18n
//
//************************************************************
import { LocaleModule, LocalizationModule, LocaleService, LocalizationService } from 'angular2localization';

/**
 * Advanced initialization.
 * 
 * With these settings, translation file will be loaded before the app.
 */
@Injectable()
export class LocalizationConfig {

    constructor(public locale: LocaleService, public localization: LocalizationService) { }

    load(): Promise<any> {

        // Adds the languages (ISO 639 two-letter or three-letter code).
        this.locale.addLanguages(['en', 'es', 'it', 'id']);

        // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
        // Selects the default language and country, regardless of the browser language, to avoid inconsistencies between the language and country.
        this.locale.definePreferredLocale('en', 'AUD', 30);

        // Optional: default currency (ISO 4217 three-letter code).
        this.locale.definePreferredCurrency('AUD');

        // Initializes LocalizationService: asynchronous loading.
         this.localization.translationProvider('https://lm06lf9uj6.execute-api.ap-southeast-2.amazonaws.com/prod/comments/','json', true); // Required: initializes the translation provider with the given path prefix.

        var promise: Promise<any> = new Promise((resolve: any) => {
            this.localization.translationChanged.subscribe(() => {
                resolve(true);
            });
        });

        this.localization.updateTranslation(); // Need to update the translation.

        return promise;
    }
}

/**
 * Aot compilation requires a reference to an exported function.
 */
export function initLocalization(localizationConfig: LocalizationConfig): Function {
    return () => localizationConfig.load();
}

//************************************************************
//
//    Module importa,declarations, providers
//
//************************************************************

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LocaleModule.forRoot(), // New instance of LocaleService.
    LocalizationModule.forRoot(), // New instance of LocalizationService.
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrLTUG-7jaAVEYTww0d5EzC6DzB2cY0-g',
      libraries: ["places"]
    }),
    Angular2DataTableModule,
    AppRoutingModule
   ],
  declarations: [
    AppLoader,
    AppComponent,
    AppHeader,
    AppFilterBarComponent,
    AppFooter,
    AppWelcome,
    AppCitizenship,
    AppAbout,
    AppLanguageManagment,
    AppMarketReport,
    MaterializeDirective
  ],
  providers: [
    DemographicsService,
    MapService,
    GeocodingService,
    LocalizationConfig,
        {
            provide: APP_INITIALIZER, // APP_INITIALIZER will execute the function when the app is initialized and delay what it provides.
            useFactory: initLocalization,
            deps: [LocalizationConfig],
            multi: true
        }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

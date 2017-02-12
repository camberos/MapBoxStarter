import { Component } from '@angular/core';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

@Component({
  selector: 'app-loader',
  templateUrl: 'app.loader.html',
 	styleUrls: ['app.loader.css']

})
export class AppLoader extends Locale {
	constructor(public locale: LocaleService, public localization: LocalizationService) {
    super(locale, localization);
    }
}
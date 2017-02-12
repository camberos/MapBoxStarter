import { Component } from '@angular/core';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

@Component({
  selector: 'app-footer',
  templateUrl: 'app.footer.html',
 	styleUrls: ['app.footer.css']

})
export class AppFooter extends Locale {
	constructor(public locale: LocaleService, public localization: LocalizationService) {
    super(locale, localization);
    }
}
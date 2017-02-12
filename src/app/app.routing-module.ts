import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppLanguageManagment } from './app.language-management';
import { AppMarketReport } from './app.market-report';
import { AppWelcome } from './app.welcome';
import { AppCitizenship } from './app.citizenship';
import { AppAbout } from './app.about';

const routes: Routes = [
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' },
  { path: 'Welcome',  component: AppWelcome },
  { path: 'Properties',     component: AppLanguageManagment },
  { path: 'MarketReport',     component: AppMarketReport },
  { path: 'Citizenship', component: AppCitizenship },
  { path: 'About', component: AppAbout },
  { path: 'Contact', component: AppAbout }    
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
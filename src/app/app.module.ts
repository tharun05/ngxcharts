import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import { GroupedhorizontalBarChartComponent } from './groupedhorizontal-bar-chart/groupedhorizontal-bar-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GroupedhorizontalBarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

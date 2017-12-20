import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    Object.assign(this, {single, multi})   
   }
   single: any[];
   multi: any[];
 
   view: any[] = [700, 400];
 
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Country';
   showYAxisLabel = true;
   yAxisLabel = 'Population';
 
   colorScheme = {
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   };
  ngOnInit() {
  }
  onSelect(event) {
    console.log(event);
  }
}

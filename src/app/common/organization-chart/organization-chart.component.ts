import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.css']
})
export class OrganizationChartComponent implements OnInit {
  breadcrumb: any; 
  constructor() { }

  ngOnInit() {

    this.breadcrumb = {
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },        
      ],
      'mainlabel': 'Organization chart'
    };
  }

}

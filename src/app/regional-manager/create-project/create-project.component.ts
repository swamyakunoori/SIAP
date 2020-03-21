import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  breadcrumb : any;
  constructor() { 
    
  }

  ngOnInit() {

    this.breadcrumb = {
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },        
      ],
      'mainlabel': 'Create Project'
    };

  }

}

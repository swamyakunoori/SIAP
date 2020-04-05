import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
   breadcrumb: any;

   public Editor = ClassicEditor;

   
  constructor() { 

    ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( Array.from( editor.ui.componentFactory.names() ) );
    } )
    .catch( error => {
        console.error( error );
    } );
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
      'mainlabel': 'Add question answer',
     
    };
  }

}

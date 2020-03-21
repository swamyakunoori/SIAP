import { Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { SettingsService } from 'src/app/_services/settings.service';
import { ButtonRendererComponent } from '../button-renderer.component';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  breadcrumb: any; 

  public modules =  ['Bands','Departments','Designations','Subjects','Courses','Universities',
                    'Locations','States','Semisters','Shifts','Regulations'];
  settingsData = [];
  selectedModule: any;

  rowDataClicked1 = {};
  AGgridOptions: GridOptions;

   rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

private GridApi;
private GridColumnApi;
public columnDefs;

frameworkComponents: any;

  constructor(private _settingsService: SettingsService) {

    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    };

    this.selectedModule = "Bands";
    this.settingsGridInit();

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
      'mainlabel': 'Master Settings'
    };

    this.loadMasterSettingsGrid();
  }

   settingsGridInit() {
     this.AGgridOptions = <GridOptions>{
          context: {
              componentParent: this
          },
        };

   this.columnDefs = [
      {
      headerName: "",
      width: 35,
      pinned: "left",
      suppressSizeToFit: true,
      headerCheckboxSelectionFilteredOnly: true,
      editable: false,
      checkboxSelection: function (params) {
          return params.columnApi.getRowGroupColumns().length === 0;
      }
    },
    {
      headerName: 'SNo',
      field: 'id',
      sortable: true,
      filter: true
    },
    {
      headerName: 'NAME',
      field: 'name',
      sortable: true,
      filter: true
    },
    {
      headerName: 'DESCRIPTION',
      field: 'description',
      sortable: true,
      filter: true
    },
    {
      headerName: 'ACTION',
      cellRenderer : 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label1: 'Click 1',
        label2: 'Click 2',
        label3: 'Click 3'
      }
    }
  ];
  this.AGgridOptions.rowSelection = "single";  
  this.AGgridOptions.paginationPageSize = 10;  
  this.AGgridOptions.rowData = [];
  //this.AGgridOptions.columnDefs = columnDef;
   }

   onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
  }
       
  loadMasterSettingsGrid(){
    this._settingsService.getSettingsData(this.selectedModule)
      .subscribe((data :any) => { 
          this.settingsData = data.results; 
          this.autoSizeAll();
          this.GridApi.sizeColumnsToFit(); 
            // data.results.forEach(element => {
            //   //console.log(element)
            //   this.settingsData.push({ "id" : element.id , "name" : element.name, "description" : element.description , "action" : "" });
            // });
      })
        
  };  
      
      autoSizeAll() {
        var allColumnIds = [];
        this.GridColumnApi.getAllColumns().forEach(function (column) {
            allColumnIds.push(column.colId);
        });
        this.GridColumnApi.autoSizeColumns(allColumnIds);
    }

    onGridReady(params) {
        this.GridApi = params.api;
        this.GridColumnApi = params.columnApi;
        this.autoSizeAll();
        this.GridApi.sizeColumnsToFit();
    }

  
    }


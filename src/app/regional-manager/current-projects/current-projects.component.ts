import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { CurrentProjectsService } from '../../_services/regional-manager/current-projects.service';
import { CurrentListButtonRendererComponent } from './currentlistbutton-renderer.component';

@Component({
  selector: 'app-current-projects',
  templateUrl: './current-projects.component.html',
  styleUrls: ['./current-projects.component.css']
})
export class CurrentProjectsComponent implements OnInit {
  breadcrumb: any;
  agGridOptions: GridOptions;

  public columnDefs;
  private gridApi;
  private gridColumnApi;
  currentProjectsList = [];
  frameworkComponents: any;
  rowDataClicked1 = {};

  constructor(private _currentProjectsService:CurrentProjectsService) {
    this.frameworkComponents = {
      buttonRenderer: CurrentListButtonRendererComponent,
    };
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
      'mainlabel': 'Current Projects'
    };
    this.currentProjectsGridInit();
    this.getcurrentProjectsList();
  }

  currentProjectsGridInit() {
    this.agGridOptions = <GridOptions>{
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
        headerName: 'PROJECT ID',
        field: 'project_id',
        sortable: true,
        filter: true
      },
      {
        headerName: 'PRIORITY',
        field: 'priority',
        sortable: true,
        filter: true
      },
      {
        headerName: 'REGIONAL MANAGER',
        field: 'manager_id',
        sortable: true,
        filter: true
      },
      {
        headerName: 'DEPARTMENT',
        field: 'department',
        sortable: true,
        filter: true
      },
      {
        headerName: 'PROJECT TYPE',
        field: 'project_type',
        sortable: true,
        filter: true
      },
      {
        headerName: 'PROJECT STATUS',
        field: 'status',
        sortable: true,
        filter: true
      },
      {
        headerName: 'EXPECTED DATE',
        field: 'expected_date',
        sortable: true,
        filter: true
      },
      {
        headerName: 'EXTENDED DATE',
        field: 'extendedDate',
        sortable: true,
        filter: true
      },
      {
        headerName: 'ACTIONS',
        cellRenderer : 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label1: 'Click 1',
        label2: 'Click 2',
        label3: 'Click 3'
      }
      }
    ];
    this.agGridOptions.rowSelection = "single";
    this.agGridOptions.paginationPageSize = 10;
    this.agGridOptions.rowData = [];
  };

  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
  }

  getcurrentProjectsList(){
    this._currentProjectsService.getCurrentProjects()
     .subscribe((data: any) =>{
       this.currentProjectsList = data.result;
       this.autoSizeAll();
       this.gridApi.sizeColumnsToFit();
     })
 };

 autoSizeAll() {
   var allColumnIds = [];
   this.gridColumnApi.getAllColumns().forEach(function (column) {
       allColumnIds.push(column.colId);
   });
   this.gridColumnApi.autoSizeColumns(allColumnIds);
}

onGridReady(params) {
   this.gridApi = params.api;
   this.gridColumnApi = params.columnApi;
   this.autoSizeAll();
   this.gridApi.sizeColumnsToFit();
}

}

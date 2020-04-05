import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { ExtensionRequestsService } from '../../_services/regional-manager/extension-requests.service';

@Component({
  selector: 'app-extension-requests',
  templateUrl: './extension-requests.component.html',
  styleUrls: ['./extension-requests.component.css']
})
export class ExtensionRequestsComponent implements OnInit {

  breadcrumb: any;
  agGridOptions: GridOptions;
  extensionRequestsList = [];
  public columnDefs;
  private gridApi;
  private gridColumnApi;
  currentProjectsList = [];
  frameworkComponents: any;
  constructor(private _extensionRequestsService: ExtensionRequestsService) { 
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
      'mainlabel': 'Extension Requests'
    };
    this.  extensionRequestsGridInit();
    this.getExtensionRequestsData();
  }

  extensionRequestsGridInit() {
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
        headerName: 'EMPLOYEE NAME',
        field: 'emplyee_name',
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
        headerName: 'ASSIGN DATE',
        field: 'assign_date',
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
        headerName: 'RELEASE DATE',
        field: 'releaseDate',
        sortable: true,
        filter: true
      },
      {
        headerName: 'ACTIONS',
        field: 'actions'
      }
      
    ];
    this.agGridOptions.rowSelection = "single";
    this.agGridOptions.paginationPageSize = 10;
    this.agGridOptions.rowData = [];
  };

  getExtensionRequestsData(){
    this._extensionRequestsService.getExtensionRequestsData()
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

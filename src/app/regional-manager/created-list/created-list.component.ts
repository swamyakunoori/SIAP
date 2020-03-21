import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { CreatedListService } from '../../_services/regional-manager/created-list.service';
import { CreatedListButtonRendererComponent } from '../created-list/createdlistbutton-renderer.component';

@Component({
  selector: 'app-created-list',
  templateUrl: './created-list.component.html',
  styleUrls: ['./created-list.component.css']
})
export class CreatedListComponent implements OnInit {
  breadcrumb: any;
  agGridOptions: GridOptions;

  public columnDefs;
  private gridApi;
  private gridColumnApi;
  createdProjectsList = [];
  frameworkComponents: any;

  constructor(private _createdListService: CreatedListService) { 
    this.frameworkComponents = {
      buttonRenderer: CreatedListButtonRendererComponent,
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
      'mainlabel': 'Created Projects'
    };
    this.createdProjectsGridInit();
    this.getCreatedProjectsList();
  }

  createdProjectsGridInit() {
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
        headerName: 'PROJECT NAME',
        field: 'project_name',
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
        headerName: 'CREATED DATE',
        field: 'created_at',
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
        headerName: 'TRANSFERED FROM',
        field: 'transferedFrom',
        sortable: true,
        filter: true
      },
      {
        headerName: 'TEAM STATUS',
        field: 'status',
        sortable: true,
        filter: true
      },
      {
        headerName: 'ACTIONS',
        cellRenderer : 'buttonRenderer',
        cellRendererParams: {
       //onClick: this.onBtnClick.bind(this)
      }
      }
    ];
    this.agGridOptions.rowSelection = "multiple";
    this.agGridOptions.paginationPageSize = 10;
    this.agGridOptions.rowData = [];
  };

  getCreatedProjectsList(){
    this._createdListService.getCreatedProjectsList()
     .subscribe((data: any) =>{
       this.createdProjectsList = data.results;
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

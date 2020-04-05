import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { ReferenceAllService } from '../../_services/regional-manager/reference-all.service'; 

@Component({
  selector: 'app-reference-all',
  templateUrl: './reference-all.component.html',
  styleUrls: ['./reference-all.component.css']
})
export class ReferenceAllComponent implements OnInit {
  breadcrumb: any;
  performanceData = [];

  agGridOptions: GridOptions;
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  constructor(private _referenceAllService: ReferenceAllService) { }

  ngOnInit() {
    this.breadcrumb = {
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
      ],
      'mainlabel': 'Reference Projects'
    };
    this.referenceAllGridInit();
    this.getReferenceAllData();
  }

  referenceAllGridInit() {
    this.agGridOptions = <GridOptions>{
      context: {
        componentParent: this
      }
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
        headerName: 'DEPARTMENT',
        field: 'department',
        sortable: true,
        filter: true
      },
      {
        headerName: 'DATE',
        field: 'date',
        sortable: true,
        filter: true
      },
      {
        headerName: 'EMPLOYEE',
        field: 'employee',
        sortable: true,
        filter: true
      },
      {
        headerName: 'TARGET DAYS',
        field: 'target_days',
        sortable: true,
        filter: true
      },
      {
        headerName: 'EXTENDED DATE',
        field: 'extended_date',
        sortable: true,
        filter: true
      },
      {
        headerName: 'RELEASE DATE',
        field: 'release_date',
        sortable: true,
        filter: true  
      },
      {
        headerName: 'EXTENSION REQUESTS',
        field: 'extension_requests',
        sortable: true,
        filter: true  
      }
    ];
    this.agGridOptions.rowSelection = "single";
    this.agGridOptions.paginationPageSize = 10;
    this.agGridOptions.rowData = [];
  }

  getReferenceAllData(){
    this._referenceAllService.getReferenceAllData()
      .subscribe((data :any) => { 
          this.performanceData = data.result; 
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

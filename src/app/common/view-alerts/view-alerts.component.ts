import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ViewAlertsService } from '../../_services/common/viewalerts.service'; 

@Component({
  selector: 'app-view-alerts',
  templateUrl: './view-alerts.component.html',
  styleUrls: ['./view-alerts.component.css']
})
export class ViewAlertsComponent implements OnInit {

  breadcrumb: any;
  viewAlertsData = [];

  agGridOptions: GridOptions;
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  constructor(private _viewAlertsService: ViewAlertsService) { }

  ngOnInit() {
    this.breadcrumb = {
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
      ],
      'mainlabel': 'Alerts'
    };
    this.viewAlertsGridInit();
    this.getPerformaceData();
  }

  viewAlertsGridInit() {
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
        headerName: 'EMPLOYEE NAME',
        field: 'employee_name ',
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
        headerName: 'TIME',
        field: 'time',
        sortable: true,
        filter: true
      },
      {
        headerName: 'IP ADDRESS',
        field: 'ip_address',
        sortable: true,
        filter: true
      },
      {
        headerName: 'LOCATION',
        field: 'location',
        sortable: true,
        filter: true
      }
    ];
    this.agGridOptions.rowSelection = "single";
    this.agGridOptions.paginationPageSize = 10;
    this.agGridOptions.rowData = [];
  }

  getPerformaceData(){
    this._viewAlertsService.getAlertsList()
      .subscribe((data :any) => { 
          this.viewAlertsData = data.result; 
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

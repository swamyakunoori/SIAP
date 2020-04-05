import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { PerformanceService } from '../../_services/regional-manager/performance.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  
  breadcrumb: any;
  performanceData = [];
  
  agGridOptions: GridOptions;
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  constructor(private _performanceService: PerformanceService) { }

  ngOnInit() {
    this.breadcrumb = {
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
      ],
      'mainlabel': 'Performance'
    };
    this.performanceGridInit();
    this.getPerformaceData();
  }

  performanceGridInit() {
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
        headerName: 'EMPLOYEE NAME',
        field: 'employeeName',
        sortable: true,
        filter: true
      },
      {
        headerName: 'RATING',
        field: 'rating',
        sortable: true,
        filter: true
      },
      {
        headerName: 'DESIGNATION',
        field: 'designation',
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
        headerName: 'EXPERIENCE',
        field: 'experience',
        sortable: true,
        filter: true
      }
    ];
    this.agGridOptions.rowSelection = "single";
    this.agGridOptions.paginationPageSize = 10;
    this.agGridOptions.rowData = [];
  }

  getPerformaceData(){
    this._performanceService.getEmployeesPerformanceData()
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

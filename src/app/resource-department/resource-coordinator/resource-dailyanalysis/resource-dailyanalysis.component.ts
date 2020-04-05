import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { DailyAnalysisService } from 'src/app/_services/resource-department/resource-coordinator/daily-analysis.service';

@Component({
  selector: 'app-resource-dailyanalysis',
  templateUrl: './resource-dailyanalysis.component.html',
  styleUrls: ['./resource-dailyanalysis.component.css']
})
export class ResourceDailyanalysisComponent implements OnInit {

  breadcrumb: any;
  dailyAnalysisList = [];
  agGridOptions: GridOptions;

  private GridApi;
  private GridColumnApi;
  public columnDefs;

  constructor(private _dailyAnalysisService: DailyAnalysisService) {
    this.dailyAnalysisGridInit();
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
      'mainlabel': 'DAILY PERFORMANCE'
    };
    
    this.getdailyAnalysisList();
  }


  dailyAnalysisGridInit() {
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
        headerName: 'DATE',
        field: 'o_date',
        sortable: true,
        filter: true
      },
      {
        headerName: 'CHAPTERS',
        field: 'o_chapters',
        sortable: true,
        filter: true
      },
      {
        headerName: 'TOPICS',
        field: 'o_topics',
        sortable: true,
        filter: true
      },
      {
        headerName: 'SUB TOPICS',
        field: 'o_sub_topics',
        sortable: true,
        filter: true
      },
      {
        headerName: 'SUB-SUB-TOPICS',
        field: 'o_sub_sub_topics',
        sortable: true,
        filter: true
      },
      {
        headerName: 'SUB-SUB-SUB-TOPICS',
        field: 'o_sub_sub_sub_topics',
        sortable: true,
        filter: true
      },
      {
        headerName: 'NUMBER OF QUESTIONS',
        field: 'o_no_quetions',
        sortable: true,
        filter: true
      },
      {
        headerName: 'DURATION (HOURS)',
        field: 'o_duration',
        sortable: true,
        filter: true
      }
    ];
    this.agGridOptions.rowSelection = "single";
    this.agGridOptions.paginationPageSize = 10;
    this.agGridOptions.rowData = [];
  };

  getdailyAnalysisList(){
     this._dailyAnalysisService.getdailyAnalysisList()
      .subscribe((data: any) =>{
        this.dailyAnalysisList = data.result;
        this.autoSizeAll();
        this.GridApi.sizeColumnsToFit();
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

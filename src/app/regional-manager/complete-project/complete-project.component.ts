import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { CompletedProjectsService } from '../../_services/regional-manager/completed-projects.service';

@Component({
  selector: 'app-complete-project',
  templateUrl: './complete-project.component.html',
  styleUrls: ['./complete-project.component.css']
})
export class CompleteProjectComponent implements OnInit {

  breadcrumb: any;
  completedProjectsList = [];
  agGridOptions: GridOptions;

  private GridApi;
  private GridColumnApi;
  public columnDefs;

  constructor(private _completedProjectsService: CompletedProjectsService) {
    this.completedProjectsGridInit();
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
      'mainlabel': 'Completed Projects'
    };
    
    this.getcompletedProjectsList();
  }

  completedProjectsGridInit() {
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
        headerName: 'REGIONAL MANAGER',
        field: 'manager_id',
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
        headerName: 'COMPLETION DATE',
        field: 'completionDate',
        sortable: true,
        filter: true
      },
      {
        headerName: 'DURATION(HRS)',
        field: 'duration',
        sortable: true,
        filter: true
      },
      {
        headerName: 'QUESTIONS SOLVED',
        field: 'questionsSolved',
        sortable: true,
        filter: true
      },
      {
        headerName: 'TOPICS SOLVED',
        field: 'topicsSolved',
        sortable: true,
        filter: true
      },
      {
        headerName: 'PAGES SOLVED',
        field: 'pagesSolved',
        sortable: true,
        filter: true
      }
    ];
    this.agGridOptions.rowSelection = "single";
    this.agGridOptions.paginationPageSize = 10;
    this.agGridOptions.rowData = [];
  };

  getcompletedProjectsList(){
     this._completedProjectsService.getcompletedProjectsList()
      .subscribe((data: any) =>{
        this.completedProjectsList = data.result;
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
  



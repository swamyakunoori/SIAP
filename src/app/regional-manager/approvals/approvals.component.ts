import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ApprovalsService } from '../../_services/regional-manager/approvals.service';

import { ApprovalButtonRendererComponent } from './approvalbutton-renderer.component';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {

  breadcrumb: any;
  approvalsData = [];
  frameworkComponents: any;

  private GridApi;
  private GridColumnApi;
  public columnDefs;
  rowDataClicked = {};

  agGridOptions: GridOptions;

  constructor(private _approvalsService: ApprovalsService) {
    this.frameworkComponents = {
      buttonRenderer: ApprovalButtonRendererComponent,
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
      'mainlabel': 'Approvals'
    };
    this.approvalsGridInit(); 
    this.getApprovalsData();
  }

  approvalsGridInit() {
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
        headerName: 'PROJECT TYPE',
        field: 'project_type',
        sortable: true,
        filter: true
      },
      {
        headerName: 'RESOURCE TEAM',
        field: 'resource_team_lead_id',
        sortable: true,
        filter: true
      },
      {
        headerName: 'TEAM LEAD',
        field: 'resource_team_lead_id',
        sortable: true,
        filter: true
      },
      {
        headerName: 'QUALITY TEAM',
        field: 'quality_team_lead_id',
        sortable: true,
        filter: true
      },
      {
        headerName: 'ACTION',
        cellRenderer : 'buttonRenderer',
        cellRendererParams: {
        onClick: this.onBtnClick.bind(this)
      }
      },
    ];
    this.agGridOptions.rowSelection = "single";
    this.agGridOptions.paginationPageSize = 10;
    this.agGridOptions.rowData = [];
  }

  
  getApprovalsData(){
    this._approvalsService.getApprovalsData()
      .subscribe((data :any) => { 
          this.approvalsData = data.result; 
          this.autoSizeAll();
          this.GridApi.sizeColumnsToFit(); 
      })
        
  };

  onBtnClick(e) {
    this.rowDataClicked = e.rowData;
  }

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

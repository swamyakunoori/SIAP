import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ReferenceService } from 'src/app/_services/resource-department/resource-coordinator/reference.service';

import { ApprovalButtonRendererComponent } from './approvalbutton-renderer.component';

@Component({
  selector: 'app-resource-reference',
  templateUrl: './resource-reference.component.html',
  styleUrls: ['./resource-reference.component.css']
})
export class ResourceReferenceComponent implements OnInit {

  breadcrumb: any;
  referenceData = [];
  frameworkComponents: any;

  private GridApi;
  private GridColumnApi;
  public columnDefs;
  rowDataClicked = {};

  agGridOptions: GridOptions;

  constructor(private _referenceService: ReferenceService) {
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
      'mainlabel': 'REFERENCE PROJECTS'
    };
    this.referenceGridInit(); 
    this.getReferenceData();
  }


  referenceGridInit() {
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
        headerName: 'PROJECT STATUS',
        field: 'o_status',
        sortable: true,
        filter: true
      },
      {
        headerName: 'EXPECTED DATE',
        field: 'o_exp_date',
        sortable: true,
        filter: true
      },
      {
        headerName: 'EXTENDED DATE',
        field: 'o_ext_date',
        sortable: true,
        filter: true
      },
      {
        headerName: 'TARGET DATE',
        field: 'o_tar_date',
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

  
  getReferenceData(){
    this._referenceService.getReferenceData()
      .subscribe((data :any) => { 
          this.referenceData = data.result; 
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

import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { AnnouncementsListService } from '../../_services/common/announcements-list.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {

  breadcrumb: any;
  public columnDefs;
  private gridApi;
  private gridColumnApi;
  gridOptions: GridOptions;
  announcementsList = [];

  constructor(private _announcementsListService: AnnouncementsListService) { }

  ngOnInit() {
    this.breadcrumb = {
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
      ],
      'mainlabel': 'Announcements List'
    };
    this.announcementsListGridInit();
    this.getAnnouncementsList();
  }

  announcementsListGridInit(){
    this.gridOptions= <GridOptions>{
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
        headerName: 'TITLE',
        field: 'title',
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
        headerName: 'DATE',
        field: 'date',
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
        headerName: 'ACTION',
        field: 'action',
        sortable: true,
        filter: true
      },
    ];
    this.gridOptions.rowSelection = "single";
    this.gridOptions.paginationPageSize = 10;
    this.gridOptions.rowData = [];
  }

  getAnnouncementsList(){
    this._announcementsListService.getAnnouncementsList()
     .subscribe((data: any) =>{
       this.announcementsList = data.result;
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

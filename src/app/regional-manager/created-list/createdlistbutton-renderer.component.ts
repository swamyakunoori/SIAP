// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-renderer',
  template: `<a href="#" id="a1" (click)="onClick($event)">
  <i class="fa fa-eye icon1-yellow" style="font-size: 18px; padding: 2px;" aria-hidden="true" data-toggle="tooltip" title="View" data-original-title="View"></i>
  </a>
  <a href="#" id="a2" (click)="onClick($event)">
  <i class="fa fa-pencil-square icon1-blue" style="font-size: 18px; padding: 2px;" aria-hidden="true" data-toggle="tooltip" title="Edit" data-original-title="Edit"></i>
  </a>
  <a href="#" id="a3" (click)="onClick($event)">
  <i class="feather ft-check-square icon1-orange" style="font-size: 18px; padding: 2px;" aria-hidden="true" data-toggle="tooltip" title="Active" data-original-title="Active"></i>
  </a>
  <a href="#" id="a4" (click)="onClick($event)">
  <i class="feather ft-octagon icon1-orange" style="font-size: 18px; padding: 2px;" aria-hidden="true" data-toggle="tooltip" title="InActive" data-original-title="InActive"></i>
  </a>
  <a href="#" id="a5" (click)="onClick($event)">
  <i class="feather ft-repeat icon1-orange" style="font-size: 18px; padding: 2px;" aria-hidden="true" data-toggle="tooltip" title="Re-assign" data-original-title="Re-assign"></i>
  </a>
  <a href="#" id="a5" (click)="onClick($event)">
  <i class="icon-repeat icon1-orange" style="font-size: 18px; padding: 2px;" aria-hidden="true" data-toggle="tooltip" title="Re-assign" data-original-title="Re-assign"></i>
  </a>`
})


export class CreatedListButtonRendererComponent implements ICellRendererAngularComp {

  params;
  label1: string;
  label2: string;
  label3: string;

  agInit(params): void {
    this.params = params;
    this.label1 = this.params.label1 || null;
    this.label2 = this.params.label2 || null;
    this.label3 = this.params.label3 || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);
      return false;
    }
  }
}
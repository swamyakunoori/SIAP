
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from '../../app/content/partials/general/card/card.module';
import { ChartsModule } from 'ng2-charts';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../_layout/blockui/block-template.component';
import { MatchHeightModule } from '../../app/content/partials/general/match-height/match-height.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BreadcrumbModule } from '../../app/_layout/breadcrumb/breadcrumb.module';

import { ApprovalsComponent } from './approvals/approvals.component';
import { CompleteProjectComponent } from './complete-project/complete-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { CreatedListComponent } from './created-list/created-list.component';
import { CreatedProjectviewComponent } from './created-projectview/created-projectview.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { ExtensionRequestsComponent } from './extension-requests/extension-requests.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { ReferenceComponent } from './reference/reference.component';
import { ReferenceAllComponent } from './reference-all/reference-all.component';
import { CurrentListButtonRendererComponent } from './current-projects/currentlistbutton-renderer.component';
import { ApprovalButtonRendererComponent } from './approvals/approvalbutton-renderer.component'; 
import { CreatedListButtonRendererComponent } from '../regional-manager/created-list/createdlistbutton-renderer.component';

import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    ApprovalsComponent, CompleteProjectComponent, CreateProjectComponent, CreateEditComponent, 
    CreatedListComponent, CreatedProjectviewComponent, CurrentProjectsComponent, 
    ExtensionRequestsComponent, PerformanceComponent, ProductivityComponent, ReferenceComponent, 
    ReferenceAllComponent, ApprovalButtonRendererComponent,
    CreatedListButtonRendererComponent, CurrentListButtonRendererComponent],
  imports: [
    CommonModule,
    ChartistModule,
    FormsModule,
    ChartsModule,
    CardModule,
    MatchHeightModule,
    NgxDatatableModule,
    BreadcrumbModule,
    PerfectScrollbarModule,
    NgbModule,
    AgGridModule.withComponents([
      ApprovalButtonRendererComponent,
      CreatedListButtonRendererComponent,
      CurrentListButtonRendererComponent]),
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'approvals',
        component : ApprovalsComponent
      },
      {
        path: 'completedProjects',
        component : CompleteProjectComponent
      },
      {
        path: 'createProject',
        component : CreateProjectComponent
      },
      {
        path: 'createEditProject',
        component : CreateEditComponent
      },
      {
        path: 'createdListProject',
        component : CreatedListComponent
      },
      {
        path: 'createdProjectView',
        component : CreatedProjectviewComponent
      },
      {
        path: 'currentProjects',
        component : CurrentProjectsComponent
      },
      {
        path: 'extensionRequests',
        component : ExtensionRequestsComponent 
      },
      {
        path: 'performance',
        component : PerformanceComponent  
      },
      {
        path: 'productivity',
        component : ProductivityComponent   
      },
      {
        path: 'reference',
        component : ReferenceComponent   
      },
      {
        path: 'referenceAll',
        component : ReferenceAllComponent   
      }
    ])
  ]
})
export class RegionalManagerModule { }

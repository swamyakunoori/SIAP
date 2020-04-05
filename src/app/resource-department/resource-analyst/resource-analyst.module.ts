import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from '../../../app/content/partials/general/card/card.module';
import { ChartsModule } from 'ng2-charts';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../_layout/blockui/block-template.component';
import { MatchHeightModule } from '../../../app/content/partials/general/match-height/match-height.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BreadcrumbModule } from '../../app/../_layout/breadcrumb/breadcrumb.module';
import { AgGridModule } from 'ag-grid-angular';

import { ResourceApprovalsComponent } from './resource-approvals/resource-approvals.component';
import { ResourceBasebookComponent } from './resource-basebook/resource-basebook.component';
import { ResourceCompletedComponent } from './resource-completed/resource-completed.component';
import { ResourceContentComponent } from './resource-content/resource-content.component';
import { ResourceCurrenttaskComponent } from './resource-currenttask/resource-currenttask.component';
import { ResourceDailyanalysisComponent } from './resource-dailyanalysis/resource-dailyanalysis.component';
import { ResourcePerformanceAnalysisComponent } from './resource-performance-analysis/resource-performance-analysis.component';
import { ResourceQuesstionPreviewComponent } from './resource-quesstion-preview/resource-quesstion-preview.component';
import { ResourceReferenceComponent } from './resource-reference/resource-reference.component';
import { ResourceStartComponent } from './resource-start/resource-start.component';


@NgModule({
  declarations: [ResourceApprovalsComponent, ResourceBasebookComponent, ResourceCompletedComponent, 
    ResourceContentComponent, ResourceCurrenttaskComponent, ResourceDailyanalysisComponent, 
    ResourcePerformanceAnalysisComponent, ResourceQuesstionPreviewComponent, 
    ResourceReferenceComponent, ResourceStartComponent],
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
    AgGridModule.withComponents([]),
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'approvals',
        component : ResourceApprovalsComponent
      },
      {
        path: 'basebook',
        component : ResourceBasebookComponent
      },
      {
        path: 'completedProjects',
        component : ResourceCompletedComponent
      },
      {
        path: 'content',
        component : ResourceContentComponent
      },
      {
        path: 'currentTask',
        component : ResourceCurrenttaskComponent
      },
      {
        path: 'dailyAnalysis',
        component : ResourceDailyanalysisComponent
      },
      {
        path: 'performanceAnalysis',
        component : ResourcePerformanceAnalysisComponent
      },
      {
        path: 'questionPreview',
        component : ResourceQuesstionPreviewComponent
      },
      {
        path: 'reference',
        component : ResourceReferenceComponent
      },
      {
        path: 'start',
        component : ResourceStartComponent
      }
    ])
      ]
})
export class ResourceAnalystModule { }

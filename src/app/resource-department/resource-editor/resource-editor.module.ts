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

import { ParaphrasingComponent } from './paraphrasing/paraphrasing.component';
import { ResourceApprovalsComponent } from './resource-approvals/resource-approvals.component';
import { ResourceBasebookComponent } from './resource-basebook/resource-basebook.component';
import { ResourceCompletedComponent } from './resource-completed/resource-completed.component';
import { ResourceContentComponent } from './resource-content/resource-content.component';
import { ResourceNewprojectsComponent } from './resource-newprojects/resource-newprojects.component';
import { ResourcePerformanceAnalysisComponent } from './resource-performance-analysis/resource-performance-analysis.component';
import { ResourceProjectAnalysisComponent } from './resource-project-analysis/resource-project-analysis.component';
import { ResourceQuestionPreviewComponent } from './resource-question-preview/resource-question-preview.component';
import { ResourceReferenceComponent } from './resource-reference/resource-reference.component';
import { ResourceStartComponent } from './resource-start/resource-start.component';
import { ResourceUpcomingComponent } from './resource-upcoming/resource-upcoming.component';
import { ResourceIndexComponent } from './resource-index/resource-index.component';


@NgModule({
  declarations: [ParaphrasingComponent, ResourceApprovalsComponent, ResourceBasebookComponent, 
    ResourceCompletedComponent, ResourceContentComponent, ResourceNewprojectsComponent, 
    ResourcePerformanceAnalysisComponent, ResourceProjectAnalysisComponent, 
    ResourceQuestionPreviewComponent, ResourceReferenceComponent, ResourceStartComponent,
    ResourceUpcomingComponent, ResourceIndexComponent],
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
      path: 'paraphrasing',
      component : ParaphrasingComponent
    },
    {
      path: 'approvals',
      component : ResourceApprovalsComponent
    },
    {
      path: 'basebook',
      component : ResourceBasebookComponent
    },
    {
      path: 'projectAnalysis',
      component : ResourceProjectAnalysisComponent
    },
    {
      path: 'completedProjects',
      component : ResourceCompletedComponent
    },
    {
      path: 'newProjects',
      component : ResourceNewprojectsComponent
    },
    {
      path: 'content',
      component : ResourceContentComponent
    },
    {
      path: 'performanceAnalysis',
      component : ResourcePerformanceAnalysisComponent
    },
    {
      path: 'questionPreview',
      component : ResourceQuestionPreviewComponent
    },
    {
      path: 'reference',
      component : ResourceReferenceComponent
    },
    {
      path: 'start',
      component : ResourceStartComponent
    },
    {
      path: 'upcomingProjects',
      component : ResourceUpcomingComponent
    }
  ])
    ]
})
export class ResourceEditorModule { }

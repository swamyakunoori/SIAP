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
import { BreadcrumbModule } from '../../../app/_layout/breadcrumb/breadcrumb.module';

import { ContentComponent } from './content/content.component';
import { QualityApprovalsComponent } from './quality-approvals/quality-approvals.component';
import { QualityBasebookComponent } from './quality-basebook/quality-basebook.component';
import { QualityCompletedComponent } from './quality-completed/quality-completed.component';
import { QualityNewprojectsComponent } from './quality-newprojects/quality-newprojects.component';
import { QualityPerformanceAnalysisComponent } from './quality-performance-analysis/quality-performance-analysis.component';
import { QualityProjectanalysisComponent } from './quality-projectanalysis/quality-projectanalysis.component';
import { QualityReferenceComponent } from './quality-reference/quality-reference.component';
import { QualityStartComponent } from './quality-start/quality-start.component';
import { QualityUpcomingComponent } from './quality-upcoming/quality-upcoming.component';


@NgModule({
  declarations: [ContentComponent, QualityApprovalsComponent, QualityBasebookComponent, 
    QualityCompletedComponent, QualityNewprojectsComponent, QualityPerformanceAnalysisComponent, 
    QualityProjectanalysisComponent, QualityReferenceComponent, QualityStartComponent, 
    QualityUpcomingComponent],
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
      BlockUIModule.forRoot({
        template: BlockTemplateComponent
      }),
      RouterModule.forChild([
        {
          path: 'qualityApprovals',
          component : QualityApprovalsComponent
        },
        {
          path: 'basebook',
          component : QualityBasebookComponent
        },
        {
          path: 'qualityCompleted',
          component : QualityCompletedComponent
        },
        {
          path: 'newProjects',
          component : QualityNewprojectsComponent
        },
        {
          path: 'performanceAnalysis',
          component : QualityPerformanceAnalysisComponent
        },
        {
          path: 'projectAnalysis',
          component : QualityProjectanalysisComponent
        },
        {
          path: 'upcomingProjects',
          component : QualityUpcomingComponent
        },
        {
          path: 'reference',
          component : QualityReferenceComponent
        },
        {
          path: 'start',
          component : QualityStartComponent
        },
        {
          path: 'content',
          component : ContentComponent
        },
      ])
    ]
})
export class QualityEditorModule { }

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

import { AnalystAnnouncementCompletedComponent } from './analyst-announcement-completed/analyst-announcement-completed.component';
import { AnalystDailyanalysisComponent } from './analyst-dailyanalysis/analyst-dailyanalysis.component';
import { AnalystNewprojectsComponent } from './analyst-newprojects/analyst-newprojects.component';
import { AnalystPerformanceAnalysisComponent } from './analyst-performance-analysis/analyst-performance-analysis.component';
import { AnalystReferenceComponent } from './analyst-reference/analyst-reference.component';
import { AnalystStartComponent } from './analyst-start/analyst-start.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AnalystAnnouncementCompletedComponent, AnalystDailyanalysisComponent, 
    AnalystNewprojectsComponent, AnalystPerformanceAnalysisComponent, AnalystReferenceComponent, 
    AnalystStartComponent, ContentComponent],
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
        path: 'completedAnnouncement',
        component : AnalystAnnouncementCompletedComponent
      },
      {
        path: 'dailyAnalysis',
        component : AnalystDailyanalysisComponent
      },
      {
        path: 'newProjects',
        component : AnalystNewprojectsComponent
      },
      {
        path: 'performanceAnalysis',
        component : AnalystPerformanceAnalysisComponent
      },
      {
        path: 'reference',
        component : AnalystReferenceComponent
      },
      {
        path: 'start',
        component : AnalystStartComponent
      },
      {
        path: 'content',
        component : ContentComponent
      },
    ])
  ]
})
export class QualityAnalystModule { }

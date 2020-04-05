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
import { TraineeCompletedComponent } from './trainee-completed/trainee-completed.component';
import { TraineeDailyanalysisComponent } from './trainee-dailyanalysis/trainee-dailyanalysis.component';
import { TraineeNewprojectsComponent } from './trainee-newprojects/trainee-newprojects.component';
import { TraineePerformanceAnalysisComponent } from './trainee-performance-analysis/trainee-performance-analysis.component';
import { TraineeReferenceComponent } from './trainee-reference/trainee-reference.component';
import { TraineeStartComponent } from './trainee-start/trainee-start.component';


@NgModule({
  declarations: [ContentComponent, TraineeCompletedComponent, TraineeDailyanalysisComponent, 
    TraineeNewprojectsComponent, TraineePerformanceAnalysisComponent, TraineeReferenceComponent, 
    TraineeStartComponent],
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
        path: 'content',
        component : ContentComponent
      },
      {
        path: 'completedProjects',
        component : TraineeCompletedComponent
      },
      {
        path: 'dailyAnalysis',
        component : TraineeDailyanalysisComponent
      },
      {
        path: 'newProjects',
        component : TraineeNewprojectsComponent
      },
      {
        path: 'performanceAnalysis',
        component : TraineePerformanceAnalysisComponent
      },
      {
        path: 'reference',
        component : TraineeReferenceComponent
      },
      {
        path: 'start',
        component : TraineeStartComponent
      }
    ])
  ]
})
export class QualityTraineeModule { }

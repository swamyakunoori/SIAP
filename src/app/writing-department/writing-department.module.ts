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

import { ContentManagerComponent } from './content-manager/content-manager.component';
import { ContentReviewerComponent } from './content-reviewer/content-reviewer.component';
import { ContentTraineeComponent } from './content-trainee/content-trainee.component';
import { ExternalReviewerComponent } from './external-reviewer/external-reviewer.component';
import { SeniorTechnicalWriterComponent } from './senior-technical-writer/senior-technical-writer.component';
import { TechnicalWriterComponent } from './technical-writer/technical-writer.component';


@NgModule({
  declarations: [ContentManagerComponent, ContentReviewerComponent, ContentTraineeComponent, 
    ExternalReviewerComponent,
    SeniorTechnicalWriterComponent,
    TechnicalWriterComponent
  ],
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
        path: 'contentManager',
        component : ContentManagerComponent
      },
      {
        path: 'contentReviewer',
        component : ContentReviewerComponent
      },
      {
        path: 'contentTrainee',
        component : ContentTraineeComponent
      },
      {
        path: 'externalReviewer',
        component : ExternalReviewerComponent
      },
      {
        path: 'seniorTechnicalWriter',
        component : SeniorTechnicalWriterComponent
      },
      {
        path: 'technicalWriter',
        component : TechnicalWriterComponent
      }
    ])
  ]
})
export class WritingDepartmentModule { }

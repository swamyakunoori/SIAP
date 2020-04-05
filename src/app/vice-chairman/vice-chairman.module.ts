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

import { QuickReportsComponent } from './quick-reports/quick-reports.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { PerformanceComponent } from './performance/performance.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { SettingsComponent } from './settings/settings.component';
import { AccessRightsComponent } from './access-rights/access-rights.component';


@NgModule({
  declarations: [QuickReportsComponent, CurrentProjectsComponent, CompletedProjectsComponent, 
    PerformanceComponent, UserListComponent, ProductivityComponent, SettingsComponent, 
    AccessRightsComponent],
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
        path: 'accessRights',
        component : AccessRightsComponent
      },
      {
        path: 'completedProjects',
        component : CompletedProjectsComponent
      },
      {
        path: 'currentProjects',
        component : CurrentProjectsComponent
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
        path: 'quickReports',
        component : QuickReportsComponent
      },
      {
        path: 'settings',
        component : SettingsComponent
      },
      {
        path: 'userManagement',
        component : UserListComponent
      }
    ])
  ]
})
export class ViceChairmanModule { }

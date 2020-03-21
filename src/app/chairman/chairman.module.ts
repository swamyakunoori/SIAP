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

import { AccessRightsComponent } from './access-rights/access-rights.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { CurrentProjectsComponent  } from './current-projects/current-projects.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProductivityComponent  } from './productivity/productivity.component';
import { QuickComponent } from './quick/quick.component';
 import { SettingsComponent } from './settings/settings.component';
import { UserListComponent } from './user-list/user-list.component';

import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './button-renderer.component';

@NgModule({
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
    AgGridModule.withComponents([ButtonRendererComponent]),
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
        path: 'quick',
        component: QuickComponent
      },  
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'userManagement',
        component: UserListComponent
      },      
    ])
  ],
  declarations: [AccessRightsComponent, CompletedProjectsComponent, CurrentProjectsComponent, 
      PerformanceComponent, ProductivityComponent, QuickComponent, 
    SettingsComponent,UserListComponent, ButtonRendererComponent],

  exports: [RouterModule]
})
export class ChairmanModule { }

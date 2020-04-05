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

import { HrAddannouncementComponent } from './hr-addannouncement/hr-addannouncement.component';
import { HrAnnouncementComponent } from './hr-announcement/hr-announcement.component';
import { HrEditannouncementComponent } from './hr-editannouncement/hr-editannouncement.component';
import { HrHolidaysComponent } from './hr-holidays/hr-holidays.component';
import { HrPoliciesComponent } from './hr-policies/hr-policies.component';
import { HrUserAddComponent } from './hr-user-add/hr-user-add.component';
import { HrUserManagementComponent } from './hr-user-management/hr-user-management.component';


@NgModule({
  declarations: [HrAddannouncementComponent, HrAnnouncementComponent, HrEditannouncementComponent, 
    HrHolidaysComponent, HrPoliciesComponent, HrUserAddComponent, HrUserManagementComponent],
  imports: [CommonModule,
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
        path: 'addAnnouncements',
        component : HrAddannouncementComponent
      },
        {
          path: 'announcements',
          component : HrAnnouncementComponent
        },
        {
          path: 'editAnnouncement',
          component : HrEditannouncementComponent
        },
        {
          path: 'holidays',
          component : HrHolidaysComponent
        },
        {
          path: 'policies',
          component : HrPoliciesComponent
        },
        {
          path: 'addUser',
          component : HrUserAddComponent
        },
        {
          path: 'userManagement',
          component : HrUserManagementComponent
        },
    ])
  ]
})

export class HrModule { }

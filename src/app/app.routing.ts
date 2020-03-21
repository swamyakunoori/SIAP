import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login';
import { ChangelogComponent } from './changelog/changelog.component';
import { FullLayoutComponent } from './_layout/full-layout/full-layout.component';
import { RegisterComponent } from './register';

//common components
import { AnnouncementListComponent } from './common/announcement-list/announcement-list.component';
import { AnnouncementViewComponent } from './common/announcement-view/announcement-view.component';
import { OrganizationChartComponent } from './common/organization-chart/organization-chart.component';
import { IndexComponent } from './common/index/index.component';
import { ProfileViewComponent } from './common/profile-view/profile-view.component'; 
import { ViewAlertsComponent } from './common/view-alerts/view-alerts.component';



const appRoutes: Routes = [

  
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [     
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'error', loadChildren: '../app/content/full-pages/error/error.module#ErrorModule', canActivate: [AuthGuard] },
      { path: 'authentication', loadChildren: '../app/content/full-pages/authentication/authentication.module#AuthenticationModule',
        canActivate: [AuthGuard]
      },
      { path: 'others', loadChildren: '../app/content/full-pages/others/others.module#OthersModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  // Private layout
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'logout', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'changelog', component: ChangelogComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', loadChildren: '../app/content/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },      
     
      
      { path: 'chairman', loadChildren: '../app/chairman/chairman.module#ChairmanModule' , canActivate: [AuthGuard] },
      { path: 'chairman/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'chairman/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },
      { path: 'chairman/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'chairman/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'chairman/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'chairman/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      
      { path: 'administration', loadChildren: '../app/administration/administration.module#AdministrationModule' , canActivate: [AuthGuard] },
      { path: 'administration/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'administration/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'administration/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'administration/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'administration/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      { path: 'administration/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },
      
      { path: 'regionalmanager', loadChildren: '../app/regional-manager/regional-manager.module#RegionalManagerModule' , canActivate: [AuthGuard] },
      { path: 'regionalmanager/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'regionalmanager/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'regionalmanager/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'regionalmanager/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'regionalmanager/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      { path: 'regionalmanager/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },

      { path: 'prepress', loadChildren: '../app/pre-press/pre-press.module#PrePressModule' , canActivate: [AuthGuard] },
      { path: 'prepress/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'prepress/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'prepress/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'prepress/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'prepress/profileView', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'prepress/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },

      { path: 'hr', loadChildren: '../app/hr/hr.module#HrModule' , canActivate: [AuthGuard] },
      { path: 'hr/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'hr/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'hr/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'hr/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'hr/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      { path: 'hr/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },
 
      { path: 'qualityDepartment/analyst', loadChildren: '../app/quality-department/quality-analyst/quality-analyst.module#QualityAnalystModule' , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/analyst/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/analyst/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/analyst/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/analyst/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/analyst/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/analyst/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },
     
      { path: 'qualityDepartment/editor', loadChildren: '../app/quality-department/quality-editor/quality-editor.module#QualityEditorModule' , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/editor/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/editor/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/editor/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/editor/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/editor/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/editor/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },
     

      { path: 'qualityDepartment/trainee', loadChildren: '../app/quality-department/quality-trainee/quality-trainee.module#QualityTraineeModule' , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/trainee/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/trainee/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/trainee/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/trainee/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/trainee/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      { path: 'qualityDepartment/trainee/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },
     

      { path: 'vice-chairman', loadChildren: '../app/vice-chairman/vice-chairman.module#ViceChairmanModule' , canActivate: [AuthGuard] },
      { path: 'vice-chairman/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'vice-chairman/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'vice-chairman/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },
      { path: 'vice-chairman/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'vice-chairman/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'vice-chairman/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      

      { path: 'resourceDepartment/analyst', loadChildren: '../app/resource-department/resource-analyst/resource-analyst.module#ResourceAnalystModule' , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/analyst/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/analyst/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/analyst/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/analyst/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/analyst/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/analyst/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },
     
      
      { path: 'resourceDepartment/coordinator', loadChildren: '../app/resource-department/resource-coordinator/resource-coordinator.module#ResourceCoordinatorModule' , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/coordinator/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/coordinator/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/coordinator/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/coordinator/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/coordinator/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/coordinator/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },
     

      { path: 'resourceDepartment/editor', loadChildren: '../app/resource-department/resource-editor/resource-editor.module#ResourceEditorModule' , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/editor/announcementList', component:AnnouncementListComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/editor/announcementView', component:AnnouncementViewComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/editor/orgChart', component:OrganizationChartComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/editor/index', component:IndexComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/editor/profileView', component:ProfileViewComponent , canActivate: [AuthGuard] },
      { path: 'resourceDepartment/editor/viewAlerts', component:ViewAlertsComponent , canActivate: [AuthGuard] },

      { path: 'writingDepartment', loadChildren: '../app/writing-department/writing-department.module#WritingDepartmentModule' , canActivate: [AuthGuard] },
      // {path: 'addQuestion', component: AddQuestionComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
      
    ],
  },
  // otherwise redirect to home
   //{ path: '**', redirectTo: 'dashboard/sales' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });

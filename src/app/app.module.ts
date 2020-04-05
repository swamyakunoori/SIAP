import { NgModule } from '@angular/core';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
  NgbModule,
  NgbCarouselConfig,
  NgbModalConfig
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AuthGuard } from './_guards/auth.guard';
import { AlertComponent } from './_helpers/alert.component';
import { AlertService } from './_services/alert.service';
import { AuthService } from './_services/auth.service';
import { ChartApiService } from './_services/chart.api';
import { TableApiService } from './_services/table-api.service';
import { ApplicationApiService } from './_services/application-api.service';
import { AgGridModule} from 'ag-grid-angular';

import{ NgbdSortableHeader } from '../app/_directives/sortable.directive';
import { RegisterComponent } from '../app/register/register.component'
// Routing
import { routing } from './app.routing';
// Components
import { AppComponent } from './app.component';
import { SettingsModule } from './_layout/settings/settings.module';
import { ThemeSettingsConfig } from './_layout/settings/theme-settings.config';
import { MenuSettingsConfig } from './_layout/settings/menu-settings.config';
import { HeaderComponent } from './_layout/header/header.component';
import { VerticalComponent as HeaderVerticalComponent } from './_layout/header/vertical/vertical.component';
import { HorizontalComponent as HeaderHorizontalComponent } from './_layout/header/horizontal/horizontal.component';
import { FullLayoutNavbarComponent } from './_layout/header/full-layout-navbar/full-layout-navbar.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { NavigationComponent as AppNavigationComponent } from './_layout/navigation/navigation.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { SocialSigninComponent } from './social-signin/social-signin.component';
import { LoginComponent } from './login';
import { ChangelogComponent } from './changelog/changelog.component';
import { NavbarService } from './_services/navbar.service';
import { VerticalnavComponent } from './_layout/navigation/verticalnav/verticalnav.component';
import { HorizontalnavComponent } from './_layout/navigation/horizontalnav/horizontalnav.component';
// perfect scroll bar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// spinner
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { RouterModule } from '@angular/router';
import { CustomizerComponent } from './_layout/customizer/customizer.component';
import { ChartsModule } from 'ng2-charts';
import { PartialsModule } from './content/partials/partials.module';
import { BreadcrumbModule } from './_layout/breadcrumb/breadcrumb.module';
import { HorizontalCustomizerComponent } from './_layout/customizer/horizontal-customizer/horizontal-customizer.component';
import { BlockTemplateComponent } from './_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { MatchHeightModule } from './content/partials/general/match-height/match-height.module';
import { FullLayoutComponent } from './_layout/full-layout/full-layout.component';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './_api/user/user.service';
import { NgSelectModule } from '@ng-select/ng-select';

import { AddQuestionComponent } from './add-question/add-question.component';

//Common module components
import { AnnouncementViewComponent } from './common/announcement-view/announcement-view.component';
import { AnnouncementListComponent } from './common/announcement-list/announcement-list.component';
import { OrganizationChartComponent } from './common/organization-chart/organization-chart.component';
import { IndexComponent } from './common/index/index.component';
import { ProfileViewComponent } from './common/profile-view/profile-view.component';
import { ViewAlertsComponent } from './common/view-alerts/view-alerts.component';;

@NgModule({
    imports: [
        CKEditorModule,
        BrowserModule,
        PartialsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ChartsModule,
        BrowserAnimationsModule,
        MatchHeightModule,
        BreadcrumbModule,
        NgbModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
        routing,
        NgSelectModule,  
        SettingsModule.forRoot(ThemeSettingsConfig, MenuSettingsConfig),
        PerfectScrollbarModule,
        ToastrModule.forRoot(),
        NgxSpinnerModule,
        DeviceDetectorModule.forRoot(),
        LoadingBarRouterModule,
        BlockUIModule.forRoot({
          template: BlockTemplateComponent
        }),
        AgGridModule.withComponents([])
    ],
    declarations: [
      NgbdSortableHeader,
      RegisterComponent,
        AppComponent,
        PublicLayoutComponent,
        PrivateLayoutComponent,
        HeaderComponent,
        FullLayoutNavbarComponent,
        HeaderHorizontalComponent,
        HeaderVerticalComponent,
        FooterComponent,
        AppNavigationComponent,
        AlertComponent, 
        LoginComponent,
        SocialSigninComponent,
        ChangelogComponent,
        VerticalnavComponent ,
        HorizontalnavComponent ,
        CustomizerComponent,
        HorizontalCustomizerComponent,
        BlockTemplateComponent,
        FullLayoutComponent,   

        AddQuestionComponent,  
        AnnouncementListComponent,
        AnnouncementViewComponent,
        OrganizationChartComponent,
        IndexComponent,
        ProfileViewComponent,
        ViewAlertsComponent ],
    providers: [
        AuthGuard,
        ChartApiService,
        AlertService,
        NavbarService,
        TableApiService,
        ApplicationApiService,
        AuthService,
        UserService,
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerGestureConfig
        },
        NgbCarouselConfig,
        NgbModalConfig,
    ],
    entryComponents: [
      BlockTemplateComponent
    ],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule {}
